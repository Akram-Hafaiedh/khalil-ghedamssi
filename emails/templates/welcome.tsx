export function getWelcomeEmailHTML(data: {
    userName: string;
    userEmail: string;
    dashboardUrl: string;
}) {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue sur PhysioExpert</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);">
                    
                    <!-- Header with Logo -->
                    <tr>
                        <td style="padding: 48px 48px 32px; text-align: center; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);">
                            <div style="width: 80px; height: 80px; margin: 0 auto 24px; background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%); border-radius: 20px; display: inline-flex; align-items: center; justify-content: center;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                                </svg>
                            </div>
                            <h1 style="margin: 0; color: #ffffff; font-size: 36px; font-weight: 800; line-height: 1.2; background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                PhysioExpert
                            </h1>
                            <p style="margin: 12px 0 0; color: #8b5cf6; font-size: 14px; font-weight: 600;">
                                Excellence en Kinésithérapie
                            </p>
                        </td>
                    </tr>

                    <!-- Welcome Message -->
                    <tr>
                        <td style="padding: 0 48px 32px; text-align: center;">
                            <h2 style="margin: 0 0 16px; color: #ffffff; font-size: 32px; font-weight: 800;">
                                🎉 Bienvenue ${data.userName} !
                            </h2>
                            <p style="margin: 0; color: #cbd5e1; font-size: 18px; line-height: 1.6;">
                                Votre compte a été créé avec succès. Nous sommes ravis de vous accueillir sur PhysioExpert.
                            </p>
                        </td>
                    </tr>

                    <!-- Features Grid -->
                    <tr>
                        <td style="padding: 0 48px 32px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="50%" style="padding-right: 12px; padding-bottom: 16px;">
                                        <div style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 24px; height: 100%;">
                                            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                                </svg>
                                            </div>
                                            <h3 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 700;">
                                                Gestion des Rendez-vous
                                            </h3>
                                            <p style="margin: 0; color: #cbd5e1; font-size: 14px; line-height: 1.5;">
                                                Organisez votre planning facilement
                                            </p>
                                        </div>
                                    </td>
                                    <td width="50%" style="padding-left: 12px; padding-bottom: 16px;">
                                        <div style="background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 16px; padding: 24px; height: 100%;">
                                            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h3 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 700;">
                                                Suivi des Patients
                                            </h3>
                                            <p style="margin: 0; color: #cbd5e1; font-size: 14px; line-height: 1.5;">
                                                Historique et dossiers médicaux
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="50%" style="padding-right: 12px;">
                                        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: 16px; padding: 24px; height: 100%;">
                                            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                                </svg>
                                            </div>
                                            <h3 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 700;">
                                                Sécurité Maximale
                                            </h3>
                                            <p style="margin: 0; color: #cbd5e1; font-size: 14px; line-height: 1.5;">
                                                Vos données sont protégées
                                            </p>
                                        </div>
                                    </td>
                                    <td width="50%" style="padding-left: 12px;">
                                        <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 16px; padding: 24px; height: 100%;">
                                            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #22c55e 0%, #4ade80 100%); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                                                </svg>
                                            </div>
                                            <h3 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 700;">
                                                Accès 24/7
                                            </h3>
                                            <p style="margin: 0; color: #cbd5e1; font-size: 14px; line-height: 1.5;">
                                                Disponible à tout moment
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- CTA Button -->
                    <tr>
                        <td style="padding: 0 48px 32px; text-align: center;">
                            <a href="${data.dashboardUrl}" style="display: inline-block; padding: 18px 48px; background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%); color: #ffffff; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 700; box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);">
                                Accéder à mon Tableau de Bord
                            </a>
                        </td>
                    </tr>

                    <!-- Quick Start Guide -->
                    <tr>
                        <td style="padding: 0 48px 32px;">
                            <div style="background: rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 24px;">
                                <h3 style="margin: 0 0 16px; color: #ffffff; font-size: 18px; font-weight: 700;">
                                    🚀 Pour bien démarrer
                                </h3>
                                <ol style="margin: 0; padding-left: 20px; color: #cbd5e1; font-size: 14px; line-height: 2;">
                                    <li style="margin-bottom: 8px;">Complétez votre profil professionnel</li>
                                    <li style="margin-bottom: 8px;">Configurez vos horaires de disponibilité</li>
                                    <li style="margin-bottom: 8px;">Ajoutez vos premiers patients</li>
                                    <li>Commencez à prendre des rendez-vous</li>
                                </ol>
                            </div>
                        </td>
                    </tr>

                    <!-- Support Info -->
                    <tr>
                        <td style="padding: 0 48px 32px;">
                            <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 12px; padding: 20px; text-align: center;">
                                <p style="margin: 0 0 12px; color: #ffffff; font-size: 16px; font-weight: 600;">
                                    Besoin d'aide ?
                                </p>
                                <p style="margin: 0; color: #cbd5e1; font-size: 14px;">
                                    Notre équipe est disponible à <a href="mailto:support@physioexpert.tn" style="color: #8b5cf6; text-decoration: none; font-weight: 600;">support@physioexpert.tn</a>
                                    <br>ou au <a href="tel:+21612345678" style="color: #06b6d4; text-decoration: none; font-weight: 600;">+216 12 345 678</a>
                                </p>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 32px 48px; background: rgba(0, 0, 0, 0.2); border-top: 1px solid rgba(255, 255, 255, 0.1);">
                            <p style="margin: 0 0 12px; color: #94a3b8; font-size: 14px; line-height: 1.6; text-align: center;">
                                Vous recevez cet email car vous avez créé un compte sur PhysioExpert.
                            </p>
                            <p style="margin: 0 0 16px; color: #64748b; font-size: 12px; text-align: center;">
                                Votre compte: <strong style="color: #8b5cf6;">${data.userEmail}</strong>
                            </p>
                            <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                                <p style="margin: 0; color: #64748b; font-size: 12px;">
                                    © 2024 PhysioExpert. Tous droits réservés.
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}