// app/api/oauth/[provider]/data-deletion/route.ts

import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendAccountRecoveryEmail } from '@/emails/send';

const PROVIDER_CONFIGS = {
    facebook: {
        appSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        requiresSignedRequest: true,
        userIdField: 'user_id', // Field name in the signed request
        displayName: 'Facebook',
    },
    google: {
        appSecret: process.env.GOOGLE_CLIENT_SECRET!,
        requiresSignedRequest: false,
        userIdField: 'sub', // Google uses 'sub' for user ID
        displayName: 'Google',
    },
} as const;

type Provider = keyof typeof PROVIDER_CONFIGS;


function parseSignedRequest(signedRequest: string, secret: string) {
    const [encodedSig, payload] = signedRequest.split('.');

    const sig = Buffer.from(encodedSig.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
    const data = JSON.parse(Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());

    const expectedSig = crypto
        .createHmac('sha256', secret)
        .update(payload)
        .digest();

    if (!crypto.timingSafeEqual(sig, expectedSig)) {
        throw new Error('Invalid signature');
    }

    return data;
}

export async function POST(request: NextRequest, { params }: { params: { provider: string } }) {

    try {
        const provider = params.provider.toLowerCase() as Provider;

        // Validate provider
        if (!PROVIDER_CONFIGS[provider]) {
            return NextResponse.json(
                { error: 'Unsupported provider' },
                { status: 400 }
            );
        }

        const config = PROVIDER_CONFIGS[provider];
        let providerUserId: string;

        if (provider === 'facebook' && config.requiresSignedRequest) {
            const body = await request.formData();
            const signedRequest = body.get('signed_request') as string;

            if (!signedRequest) {
                return NextResponse.json(
                    { error: 'Missing signed_request' },
                    { status: 400 }
                );
            }
            const data = parseSignedRequest(signedRequest, config.appSecret);
            providerUserId = data[config.userIdField];
        } else if (provider === 'google') {
            const body = await request.json();
            providerUserId = body[config.userIdField] || body.user_id;

            if (!providerUserId) {
                return NextResponse.json(
                    { error: 'Missing user identifier' },
                    { status: 400 }
                );
            }
        } else {
            return NextResponse.json(
                { error: 'Invalid request format for provider' },
                { status: 400 }
            );
        }

        // Find the account
        const account = await prisma.account.findUnique({
            where: {
                provider_providerAccountId: {
                    provider: provider,
                    providerAccountId: providerUserId,
                },
            },
            include: {
                user: {
                    include: {
                        accounts: true,
                    },
                },
            },
        });

        if (!account) {
            // Account not found - still return success
            const confirmationCode = `NOT_FOUND_${provider.toUpperCase()}_${providerUserId}`;
            return NextResponse.json({
                url: `${process.env.NEXT_PUBLIC_APP_URL}/data-deletion-status?confirmation_code=${confirmationCode}`,
                confirmation_code: confirmationCode,
            });
        }

        const confirmationCode = crypto.randomBytes(16).toString('hex');

        // Delete the provider account link
        await prisma.account.delete({
            where: {
                id: account.id,
            },
        });

        // Check if user has other login methods
        const remainingAccounts = account.user.accounts.filter(
            (acc) => acc.id !== account.id
        );

        // Handle user with no remaining auth methods
        if (remainingAccounts.length === 0 && !account.user.hashedPassword) {
            const deletionDate = new Date();
            deletionDate.setDate(deletionDate.getDate() + 30);
            const recoveryToken = crypto.randomBytes(32).toString('hex');
            const recoveryTokenExpiry = new Date();
            recoveryTokenExpiry.setDate(recoveryTokenExpiry.getDate() + 7);
            await prisma.$transaction([
                // Lock the user account
                prisma.user.update({
                    where: { id: account.user.id },
                    data: {
                        lockedAt: new Date(),
                        lockedReason: `${provider}_disconnected_no_alt_auth`,
                        scheduledDeletionAt: deletionDate,
                    },
                }),
                // Invalidate all existing sessions
                prisma.session.deleteMany({
                    where: { userId: account.user.id },
                }),
                // Create a recovery token
                prisma.verificationToken.create({
                    data: {
                        identifier: account.user.email,
                        token: recoveryToken,
                        expires: recoveryTokenExpiry,
                    },
                }),
            ]);


            console.log(
                `🔒 User ${account.user.id} locked - scheduled for deletion on ${deletionDate.toISOString()}`
            );
            try {
                await sendAccountRecoveryEmail(
                    account.user.email,
                    account.user.name,
                    account.provider,
                    deletionDate,
                    recoveryToken
                );
            } catch (emailError) {
                console.error('Failed to send recovery email:', emailError);
            }

        }

        // Store deletion confirmation
        await prisma.deletionConfirmation.create({
            data: {
                confirmationCode,
                provider: provider,
                providerAccountId: providerUserId,
                userId: account.user.id,
                status: 'completed',
                completedAt: new Date(),
            },
        });

        // Return status URL
        return NextResponse.json({
            url: `${process.env.NEXT_PUBLIC_APP_URL}/data-deletion-status?confirmation_code=${confirmationCode}`,
            confirmation_code: confirmationCode,
        });
    } catch (error) {
        console.error(`${params.provider} data deletion error:`, error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
// GET endpoint for testing
export async function GET(request: NextRequest, { params }: { params: { provider: string } }) {
    return NextResponse.json({
        provider: params.provider,
        endpoint: 'data-deletion',
        method: 'POST',
        message: `Data deletion endpoint for ${params.provider}`,
    });
}
