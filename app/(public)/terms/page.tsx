// app/terms/page.tsx
'use client';

import { Shield, FileText, AlertCircle, CheckCircle, ArrowRight, Sparkles, Scale } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function TermsPage() {
    const [openSection, setOpenSection] = useState<number | null>(0);

    const sections = [
        {
            title: "Acceptation des Conditions",
            content: "En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site."
        },
        {
            title: "Services de Kinésithérapie",
            content: "Les informations fournies sur ce site sont à titre informatif uniquement et ne remplacent pas une consultation médicale. Les rendez-vous réservés en ligne sont soumis à confirmation et peuvent être modifiés selon la disponibilité du praticien."
        },
        {
            title: "Compte Utilisateur",
            content: "Pour réserver des rendez-vous, vous pouvez créer un compte. Vous êtes responsable de la confidentialité de vos identifiants. Toute activité sur votre compte est de votre responsabilité. Nous nous réservons le droit de suspendre ou de résilier les comptes en cas d'utilisation abusive."
        },
        {
            title: "Réservations et Annulations",
            content: "Les rendez-vous doivent être annulés au moins 24 heures à l'avance. Les annulations tardives peuvent être soumises à des frais. En cas d'urgence médicale, veuillez nous contacter directement par téléphone."
        },
        {
            title: "Propriété Intellectuelle",
            content: "Tous les contenus de ce site (textes, images, logos, etc.) sont la propriété exclusive de PhysioExpert et sont protégés par les lois sur la propriété intellectuelle. Toute reproduction non autorisée est interdite."
        },
        {
            title: "Limitation de Responsabilité",
            content: "PhysioExpert ne peut être tenu responsable des dommages indirects résultant de l'utilisation du site. Les informations médicales sont fournies à titre indicatif et ne constituent pas un diagnostic médical."
        },
        {
            title: "Modifications des Conditions",
            content: "Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les utilisateurs seront informés des changements importants. L'utilisation continue du site après modification vaut acceptation des nouvelles conditions."
        },
        {
            title: "Loi Applicable",
            content: "Ces conditions sont régies par les lois tunisiennes. Tout litige relève de la compétence des tribunaux de Tunis."
        }
    ];

    const toggleSection = (index: number) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-violet-950 via-slate-950 to-cyan-950" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            </div>

            <div className="relative z-10">
                {/* Hero Section - Increased padding for fixed header */}
                <section className="pt-48 pb-20 px-4 relative">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/10">
                            <Scale className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-semibold bg-linear-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
                                Informations Légales
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            <span className="block bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                Conditions
                            </span>
                            <span className="block mt-2 bg-linear-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                d&apos;Utilisation
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300">
                            Dernière mise à jour: <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400 font-semibold">15 Janvier 2024</span>.
                            Veuillez lire attentivement ces conditions avant d&apos;utiliser nos services.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Left Column - Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                                            <AlertCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black text-white mb-2">Avis Important</h2>
                                            <p className="text-slate-300">
                                                Ces conditions d&apos;utilisation régissent votre utilisation de notre site web et de nos services de réservation en ligne.
                                                En créant un compte ou en réservant un rendez-vous, vous acceptez ces conditions dans leur intégralité.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Terms Sections */}
                                <div className="space-y-6">
                                    {sections.map((section, index) => (
                                        <div
                                            key={index}
                                            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                                        >
                                            <button
                                                onClick={() => toggleSection(index)}
                                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${openSection === index ? 'bg-linear-to-br from-violet-500 to-purple-600' : 'bg-white/5'}`}>
                                                        <FileText className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span className="text-lg font-semibold text-white">
                                                        {section.title}
                                                    </span>
                                                </div>
                                                {openSection === index ? (
                                                    <ArrowRight className="w-5 h-5 text-slate-400 rotate-90" />
                                                ) : (
                                                    <ArrowRight className="w-5 h-5 text-slate-400" />
                                                )}
                                            </button>
                                            {openSection === index && (
                                                <div className="px-6 py-4 border-t border-white/10">
                                                    <p className="text-slate-300 leading-relaxed">
                                                        {section.content}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column - Contact Information */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-32">
                                    <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/10 to-cyan-500/10 border border-white/20 rounded-3xl p-8">
                                        <div className="text-center">
                                            <Shield className="w-12 h-12 mx-auto mb-4 text-violet-400" />
                                            <h3 className="text-2xl font-bold text-white mb-4">
                                                Questions sur nos Conditions ?
                                            </h3>
                                            <p className="text-slate-400 mb-6">
                                                Si vous avez des questions concernant nos conditions d&apos;utilisation,
                                                n&apos;hésitez pas à nous contacter.
                                            </p>
                                            <div className="space-y-3">
                                                <Link
                                                    href="/contact"
                                                    className="block w-full text-center px-6 py-3 bg-linear-to-r from-violet-600 to-cyan-600 rounded-xl font-semibold hover:shadow-violet-500/50 transition-all duration-300"
                                                >
                                                    Nous Contacter
                                                </Link>
                                                <Link
                                                    href="/policy"
                                                    className="block w-full text-center px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                                                >
                                                    Politique de Confidentialité
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}