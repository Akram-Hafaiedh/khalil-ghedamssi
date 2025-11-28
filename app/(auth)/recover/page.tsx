'use client';

import { useState, useEffect } from 'react';
import { Shield, Lock, AlertTriangle, CheckCircle, Eye, EyeOff } from 'lucide-react';

interface AccountInfo {
    provider: string;
    deletionDate: string;
}

export default function AccountRecoveryPage() {
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const tokenParam = params.get('token');
        const emailParam = params.get('email');

        if (tokenParam) setToken(tokenParam);
        if (emailParam) setEmail(emailParam);

        if (tokenParam && emailParam) {
            fetch(`/api/auth/verify-recovery-token?token=${tokenParam}&email=${emailParam}`)
                .then(res => res.json())
                .then(data => {
                    if (data.valid) {
                        setAccountInfo(data);
                    } else {
                        setError('Ce lien de récupération est invalide ou expiré');
                    }
                })
                .catch(() => setError('Erreur de vérification du lien'));
        }
    }, []);

    const handleSubmit = async () => {
        setError('');

        if (password.length < 8) {
            setError('Le mot de passe doit contenir au moins 8 caractères');
            return;
        }

        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/auth/set-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    window.location.href = '/login';
                }, 3000);
            } else {
                setError(data.error || 'Une erreur est survenue');
            }
        } catch (err) {
            setError('Erreur de connexion au serveur');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-black mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Compte Récupéré !
                </h2>
                <p className="text-slate-400 mb-6">
                    Votre mot de passe a été défini avec succès. Redirection vers la connexion...
                </p>
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
        );
    }

    return (
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl blur-xl opacity-50" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <Shield className="text-white" size={24} />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full mb-4 border border-white/10">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-semibold bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
                        Action Requise
                    </span>
                </div>

                <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Récupération de Compte
                </h3>
                <p className="text-slate-400">Définissez un mot de passe pour conserver l'accès</p>
            </div>

            {accountInfo && (
                <div className="backdrop-blur-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-4 mb-6">
                    <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-white text-sm mb-1">Votre compte sera supprimé</h4>
                            <p className="text-slate-300 text-xs">
                                Suite à la déconnexion de {accountInfo.provider}, votre compte sera supprimé le{' '}
                                <span className="font-bold text-amber-400">
                                    {new Date(accountInfo.deletionDate).toLocaleDateString('fr-FR')}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {error && (
                <div className="mb-6 backdrop-blur-xl bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                </div>
            )}

            <div className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        disabled
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-500 opacity-50 cursor-not-allowed"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Nouveau Mot de Passe
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={8}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all text-white placeholder-slate-500 pr-12"
                            placeholder="Minimum 8 caractères"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Confirmer le Mot de Passe
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            minLength={8}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all text-white placeholder-slate-500 pr-12"
                            placeholder="Répétez votre mot de passe"
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Traitement...</span>
                            </>
                        ) : (
                            <>
                                <Lock className="w-5 h-5" />
                                <span>Définir le Mot de Passe</span>
                            </>
                        )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-slate-400 text-center">
                    Des questions ? Contactez-nous à{' '}
                    <a href="mailto:privacy@physioexpert.tn" className="text-violet-400 hover:text-violet-300 font-semibold">
                        privacy@physioexpert.tn
                    </a>
                </p>
            </div>
        </div>
    );
}