import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const confirmationCode = searchParams.get('confirmation_code');

        if (!confirmationCode) {
            return NextResponse.json(
                { error: 'Missing confirmation_code' },
                { status: 400 }
            );
        }

        // Handle "NOT_FOUND" codes
        if (confirmationCode.startsWith('NOT_FOUND_')) {
            const parts = confirmationCode.split('_');
            const provider = parts[2]?.toLowerCase() || 'unknown';

            return NextResponse.json({
                status: 'not_found',
                provider: provider,
                message: `Aucun compte ${provider} trouvé dans notre système.`,
            });
        }

        const deletion = await prisma.deletionConfirmation.findUnique({
            where: { confirmationCode },
        });

        if (!deletion) {
            return NextResponse.json(
                { error: 'Code de confirmation non trouvé' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            status: deletion.status,
            provider: deletion.provider,
            completedAt: deletion.completedAt,
            message: `Vos données ${deletion.provider} ont été supprimées avec succès de notre système.`,
        });

    } catch (error) {
        console.error('Deletion status check error:', error);
        return NextResponse.json(
            { error: 'Erreur interne du serveur' },
            { status: 500 }
        );
    }
}