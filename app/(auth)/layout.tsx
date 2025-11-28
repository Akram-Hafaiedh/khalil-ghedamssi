import { Sparkles, CheckCircle, Shield, Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden flex items-center justify-center p-4">
            {/* Fixed Back Button - Top Left */}
            <a
                href="/"
                className="fixed top-6 left-6 z-50 inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group backdrop-blur-xl bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold text-sm">Retour à l'accueil</span>
            </a>

            <div className="relative z-10 w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Branding (shown on desktop only) */}
                    <div className="hidden lg:block lg:sticky lg:top-8">
                        <div className="space-y-8">
                            {/* Logo */}
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl blur-xl opacity-50" />
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
                                        <Heart className="text-white" size={32} />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                        PhysioExpert
                                    </h1>
                                    <p className="text-sm font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                        Excellence en Kinésithérapie
                                    </p>
                                </div>
                            </div>

                            {/* Welcome Text */}
                            <div>
                                <h2 className="text-5xl font-black mb-6 leading-tight">
                                    <span className="block bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                        Bienvenue
                                    </span>
                                    <span className="block mt-2 bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                        Sur Votre Espace
                                    </span>
                                </h2>
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    Rejoignez notre plateforme pour gérer vos rendez-vous, suivre vos patients et optimiser votre pratique professionnelle.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-4">
                                {[
                                    { icon: Shield, text: 'Sécurité maximale de vos données' },
                                    { icon: Sparkles, text: 'Interface moderne et intuitive' },
                                    { icon: CheckCircle, text: 'Accès 24/7 depuis n\'importe où' }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-4 backdrop-blur-xl bg-white/5 border border-white/10 p-4 rounded-2xl">
                                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-slate-300 font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content from children */}
                    <div className="w-full">
                        {children}
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12">
                    <p className="text-slate-500 text-sm">
                        En continuant, vous acceptez nos{' '}
                        <Link href="/terms" className="text-slate-400 hover:text-slate-300 transition-colors underline">
                            Conditions d'utilisation
                        </Link>
                        {' '}et notre{' '}
                        <Link href="/privacy" className="text-slate-400 hover:text-slate-300 transition-colors underline">
                            Politique de confidentialité
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}