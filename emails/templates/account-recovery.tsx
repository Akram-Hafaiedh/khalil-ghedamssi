export function getAccountRecoveryEmailHTML(data: {
    userName: string;
    provider: string;
    deletionDate: string;
    daysRemaining: number;
    recoveryUrl: string;
}) {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Récupération de Compte - PhysioExpert</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="padding: 48px 48px 32px; text-align: center; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);">
                            <div style="width: 80px; height: 80px; margin: 0 auto 24px; background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    <path d="M9 12l2 2 4-4"/>
                                </svg>
                            </div>
                            <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; line-height: 1.2;">
                                Action Requise
                            </h1>
                            <p style="margin: 16px 0 0; color: #cbd5e1; font-size: 18px;">
                                Votre compte nécessite votre attention
                            </p>
                        </td>
                    </tr>

                    <!-- Warning Box -->
                    <tr>
                        <td style="padding: 0 48px 32px;">
                            <div style="background: linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%); border: 2px solid rgba(251, 146, 60, 0.3); border-radius: 16px; padding: 24px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="32" valign="top">
                                            <div style="width: 24px; height: 24px;">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="2">
                                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                                    <line x1="12" y1="9" x2="12" y2="13"/>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                                                </svg>
                                            </div>
                                        </td>
                                        <td style="padding-left: 16px;">
                                            <h3 style="margin: 0 0 8px; color: #fb923c; font-size: 16px; font-weight: 700;">
                                                Suppression Programmée
                                            </h3>
                                            <p style="margin: 0; color: #e2e8f0; font-size: 14px; line-height: 1.6;">
                                                Vous avez récemment déconnecté votre compte <strong>${data.provider}</strong> de PhysioExpert.
                                                Votre compte sera automatiquement supprimé le <strong style="color: #fb923c;">${data.deletionDate}</strong> si vous ne prenez pas d'action.
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 0 48px 32px;">
                            <h2 style="margin: 0 0 16px; color: #ffffff; font-size: 20px; font-weight: 700;">
                                Bonjour ${data.userName},
                            </h2>
                            <p style="margin: 0 0 16px; color: #cbd5e1; font-size: 16px; line-height: 1.6;">
                                Votre compte PhysioExpert n'a plus de méthode de connexion active. Pour éviter la perte de vos données et maintenir l'accès à votre compte, vous devez définir un mot de passe.
                            </p>
                            <p style="margin: 0 0 24px; color: #cbd5e1; font-size: 16px; line-height: 1.6;">
                                <strong>Vous avez ${data.daysRemaining} jours</strong> pour sécuriser votre compte.
                            </p>
                        </td>
                    </tr>

                    <!-- CTA Button -->
                    <tr>
                        <td style="padding: 0 48px 32px; text-align: center;">
                            <a href="${data.recoveryUrl}" style="display: inline-block; padding: 18px 48px; background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%); color: #ffffff; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 700; box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);">
                                Définir un Mot de Passe
                            </a>
                            <p style="margin: 16px 0 0; color: #64748b; font-size: 12px;">
                                Ce lien expire dans 7 jours
                            </p>
                        </td>
                    </tr>

                    <!-- Alternative Options -->
                    <tr>
                        <td style="padding: 0 48px 32px;">
                            <div style="background: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 24px;">
                                <h3 style="margin: 0 0 16px; color: #ffffff; font-size: 16px; font-weight: 700;">
                                    Autres Options
                                </h3>
                                <ul style="margin: 0; padding: 0; list-style: none; color: #cbd5e1; font-size: 14px;">
                                    <li style="margin-bottom: 12px; padding-left: 28px; position: relative;">
                                        <span style="position: absolute; left: 0; color: #06b6d4;">✓</span>
                                        Reconnecter un compte Facebook ou Google
                                    </li>
                                    <li style="margin-bottom: 12px; padding-left: 28px; position: relative;">
                                        <span style="position: absolute; left: 0; color: #06b6d4;">✓</span>
                                        Contacter notre support: <a href="mailto:privacy@physioexpert.tn" style="color: #8b5cf6; text-decoration: none;">privacy@physioexpert.tn</a>
                                    </li>
                                    <li style="padding-left: 28px; position: relative;">
                                        <span style="position: absolute; left: 0; color: #06b6d4;">✓</span>
                                        Appeler: <a href="tel:+21612345678" style="color: #8b5cf6; text-decoration: none;">+216 12 345 678</a>
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 32px 48px; background: rgba(0, 0, 0, 0.2); border-top: 1px solid rgba(255, 255, 255, 0.1);">
                            <p style="margin: 0 0 12px; color: #94a3b8; font-size: 14px; line-height: 1.6;">
                                Vous recevez cet email car votre compte PhysioExpert nécessite une action de votre part.
                            </p>
                            <p style="margin: 0 0 16px; color: #64748b; font-size: 12px;">
                                Si vous n'avez pas déconnecté votre compte ${data.provider}, veuillez nous contacter immédiatement.
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