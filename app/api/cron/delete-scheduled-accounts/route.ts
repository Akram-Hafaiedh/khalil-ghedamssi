// app/api/cron/delete-scheduled-accounts/route.ts
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// This should be called by a cron job (Vercel Cron, GitHub Actions, or external service)
export async function POST(req: NextRequest) {
    try {
        // Verify the request is from your cron service
        const authHeader = req.headers.get('authorization');
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const now = new Date();

        // Find users scheduled for deletion
        const usersToDelete = await prisma.user.findMany({
            where: {
                scheduledDeletionAt: {
                    lte: now, // Deletion date has passed
                },
                lockedAt: {
                    not: null, // Account is locked
                },
            },
            include: {
                accounts: true,
                sessions: true,
                deletionConfirmations: true,
            },
        });

        console.log(`🗑️  Found ${usersToDelete.length} users scheduled for deletion`);

        const deletionResults = [];

        for (const user of usersToDelete) {
            try {
                // Double-check they still have no auth methods
                const hasAuthMethod = user.accounts.length > 0 || !!user.hashedPassword;

                if (hasAuthMethod) {
                    // User has recovered their account - unlock it
                    await prisma.user.update({
                        where: { id: user.id },
                        data: {
                            lockedAt: null,
                            lockedReason: null,
                            scheduledDeletionAt: null,
                        },
                    });

                    console.log(`✅ User ${user.id} recovered - unlocking account`);
                    deletionResults.push({
                        userId: user.id,
                        email: user.email,
                        action: 'recovered',
                    });
                    continue;
                }

                // Delete user and all related data (cascade will handle most)
                await prisma.user.delete({
                    where: { id: user.id },
                });

                console.log(`🗑️  Deleted user ${user.id} (${user.email})`);
                deletionResults.push({
                    userId: user.id,
                    email: user.email,
                    action: 'deleted',
                });

            } catch (error) {
                console.error(`Failed to process user ${user.id}:`, error);
                deletionResults.push({
                    userId: user.id,
                    email: user.email,
                    action: 'failed',
                    error: error instanceof Error ? error.message : 'Unknown error',
                });
            }
        }

        return NextResponse.json({
            success: true,
            processedAt: now.toISOString(),
            totalProcessed: usersToDelete.length,
            results: deletionResults,
        });

    } catch (error) {
        console.error('Scheduled deletion cron error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// For manual testing (remove in production or protect with auth)
export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const usersScheduledForDeletion = await prisma.user.findMany({
        where: {
            scheduledDeletionAt: {
                not: null,
            },
        },
        select: {
            id: true,
            email: true,
            lockedAt: true,
            lockedReason: true,
            scheduledDeletionAt: true,
            accounts: {
                select: {
                    provider: true,
                },
            },
        },
    });

    return NextResponse.json({
        totalScheduled: usersScheduledForDeletion.length,
        users: usersScheduledForDeletion,
    });
}