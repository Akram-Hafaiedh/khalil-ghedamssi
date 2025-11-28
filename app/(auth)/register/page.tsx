// app/(auth)/register/page.tsx
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle, Heart, User } from 'lucide-react';

export default function RegisterPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            setLoading(false);
            return;
        }

        if (formData.password.length < 6) {
            setError('Le mot de passe doit contenir au moins 6 caractères');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            setSuccess(true);

            // Auto sign in after registration
            const signInResult = await signIn('credentials', {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            setTimeout(() => {
                if (signInResult?.ok) {
                    router.push('/dashboard');
                } else {
                    router.push('/login');
                }
            }, 1500);

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Une erreur est survenue lors de l\'inscription');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSocialRegister = (provider: 'google' | 'facebook') => {
        signIn(provider, { callbackUrl: '/dashboard' });
    };

    return (
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl blur-xl opacity-50" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <Heart className="text-white" size={24} />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        PhysioExpert
                    </h1>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Créer un Compte
                </h3>
                <p className="text-slate-400">Rejoignez notre plateforme dès aujourd'hui</p>
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-6 backdrop-blur-xl bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 font-medium">{error}</p>
                </div>
            )}

            {/* Success Message */}
            {success && (
                <div className="mb-6 backdrop-blur-xl bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-emerald-300 font-medium">Compte créé avec succès ! Redirection...</p>
                </div>
            )}

            {/* Social Registration Buttons */}
            <div className="space-y-3 mb-8">
                <button
                    onClick={() => handleSocialRegister('google')}
                    type="button"
                    className="group w-full flex items-center justify-center space-x-3 px-6 py-4 backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="text-white font-semibold">S'inscrire avec Google</span>
                </button>

                <button
                    onClick={() => handleSocialRegister('facebook')}
                    type="button"
                    className="group w-full flex items-center justify-center space-x-3 px-6 py-4 bg-[#1877F2] rounded-xl hover:bg-[#166FE5] transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-white font-semibold">S'inscrire avec Facebook</span>
                </button>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-400 font-medium">
                        Ou avec email
                    </span>
                </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="space-y-6">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                        Nom Complet
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User className="w-5 h-5 text-slate-500" />
                        </div>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                            placeholder="Dr. Jean Dupont"
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                        Adresse Email
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail className="w-5 h-5 text-slate-500" />
                        </div>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                            placeholder="votre@email.com"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-slate-300 mb-2">
                        Mot de Passe
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="w-5 h-5 text-slate-500" />
                        </div>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Confirm Password Input */}
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-300 mb-2">
                        Confirmer le Mot de Passe
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="w-5 h-5 text-slate-500" />
                        </div>
                        <input
                            id="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-amber-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                        >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-2">
                    <input
                        type="checkbox"
                        required
                        className="w-4 h-4 mt-1 rounded border-white/20 bg-white/5 text-violet-600 focus:ring-violet-500 focus:ring-offset-0"
                    />
                    <label className="text-sm text-slate-400">
                        J'accepte les{' '}
                        <Link href="/terms" className="text-violet-400 hover:text-violet-300 transition-colors underline">
                            conditions d'utilisation
                        </Link>
                        {' '}et la{' '}
                        <Link href="/policy" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">
                            politique de confidentialité
                        </Link>
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading || success}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Création du compte...</span>
                            </>
                        ) : success ? (
                            <>
                                <CheckCircle className="w-5 h-5" />
                                <span>Compte créé !</span>
                            </>
                        ) : (
                            <>
                                <span>Créer mon Compte</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                {/* Login Link */}
                <div className="text-center pt-4 border-t border-white/10">
                    <p className="text-slate-400">
                        Vous avez déjà un compte ?{' '}
                        <Link
                            href="/login"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold hover:from-violet-300 hover:to-cyan-300 transition-all"
                        >
                            Se connecter
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}