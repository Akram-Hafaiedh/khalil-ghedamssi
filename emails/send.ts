import { Resend } from 'resend';
import { getAccountRecoveryEmailHTML } from './templates/account-recovery';
import { getWelcomeEmailHTML } from './templates/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendAccountRecoveryEmail(userEmail: string, userName: string, provider: string, deletionDate: Date, recoveryToken: string) {
    const recoveryUrl = `${process.env.NEXT_PUBLIC_APP_URL}/account-recovery?token=${recoveryToken}&email=${encodeURIComponent(userEmail)}`;

    const daysRemaining = Math.ceil(
        (deletionDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );

    const htmlContent = getAccountRecoveryEmailHTML({
        userName,
        provider,
        deletionDate: deletionDate.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        daysRemaining,
        recoveryUrl,
    });

    await resend.emails.send({
        from: 'PhysioExpert <noreply@physioexpert.tn>',
        to: userEmail,
        subject: `⚠️ Action Requise: Votre compte sera supprimé le ${deletionDate.toLocaleDateString('fr-FR')}`,
        html: htmlContent,
    });
}
export async function sendWelcomeEmail(userEmail: string, userName: string) {
    const dashboardUrl = `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`;

    const htmlContent = getWelcomeEmailHTML({ userName, userEmail, dashboardUrl });

    await resend.emails.send({
        from: 'PhysioExpert <noreply@physioexpert.tn>',
        to: userEmail,
        subject: '🎉 Bienvenue sur PhysioExpert - Votre compte est prêt !',
        html: htmlContent,
    });
}