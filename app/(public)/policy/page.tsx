// app/policy/page.tsx
'use client';

import { Shield, Lock, Eye, Database, Mail, Phone, ArrowRight, Sparkles, Users } from 'lucide-react';
import { useState } from 'react';

export default function PolicyPage() {
    const [openSection, setOpenSection] = useState<number | null>(0);

    const sections = [
        {
            title: "Collecte des Informations",
            content: "Nous collectons les informations que vous nous fournissez directement lors de la création de votre compte, de la réservation de rendez-vous ou de l'utilisation de nos services. Cela inclut votre nom, email, numéro de téléphone, et informations médicales nécessaires à votre prise en charge."
        },
        {
            title: "Utilisation des Données",
            content: "Vos données personnelles sont utilisées pour : gérer vos rendez-vous, vous fournir des soins adaptés, vous envoyer des rappels de rendez-vous, améliorer nos services, et vous informer des actualités importantes concernant vos soins."
        },
        {
            title: "Protection des Données Médicales",
            content: "Vos données médicales sont traitées avec la plus grande confidentialité et sont protégées par le secret médical. Seul le personnel médical autorisé a accès à ces informations dans le cadre de votre prise en charge."
        },
        {
            title: "Partage des Informations",
            content: "Nous ne partageons vos informations personnelles qu'avec votre consentement explicite, sauf dans les cas prévus par la loi (autre professionnel de santé dans le cadre de votre prise en charge, obligations légales, etc.)."
        },
        {
            title: "Sécurité des Données",
            content: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction."
        },
        {
            title: "Conservation des Données",
            content: "Vos données médicales sont conservées pendant la durée légale requise (10 ans en Tunisie pour les dossiers médicaux). Vos données de compte sont conservées aussi longtemps que votre compte est actif."
        },
        {
            title: "Vos Droits",
            content: "Vous avez le droit d'accéder à vos données, de les rectifier, de vous opposer à leur traitement, de les limiter, et de demander leur effacement dans les limites prévues par la loi. Contactez-nous pour exercer ces droits."
        },
        {
            title: "Droit à l'Effacement des Données",
            content: "Vous pouvez demander la suppression de votre compte et de vos données personnelles à tout moment. La suppression peut être demandée par email ou automatiquement via la suppression de l’application depuis votre compte Facebook ou Google. Lorsque des obligations légales existent, certaines données peuvent être conservées temporairement avant suppression définitive."
        },
        {
            title: "Suppression de Compte et des Données (Facebook & Google)",
            content: "Si vous utilisez Facebook ou Google pour vous connecter, vous pouvez déclencher la suppression de vos données directement depuis les paramètres de votre compte Facebook ou Google en supprimant l’application. Une demande de suppression entraîne la désactivation immédiate de l’accès et la suppression ou planification de suppression de vos données. Un lien de confirmation vous sera fourni après la demande."
        },
        {
            title: "Cookies et Traçage",
            content: "Nous utilisons des cookies essentiels au fonctionnement du site. Nous pouvons également utiliser des cookies analytiques pour améliorer nos services. Vous pouvez contrôler les cookies via les paramètres de votre navigateur."
        }
    ];

    const dataTypes = [
        {
            icon: Users,
            title: "Données d'Identité",
            items: ["Nom et prénom", "Email", "Téléphone", "Adresse"]
        },
        {
            icon: Database,
            title: "Données Médicales",
            items: ["Motif de consultation", "Antécédents médicaux", "Bilan kinésithérapique", "Progression"]
        },
        {
            icon: Eye,
            title: "Données de Navigation",
            items: ["Historique des rendez-vous", "Préférences", "Journal d'activité", "Cookies techniques"]
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
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-semibold bg-linear-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
                                Confidentialité et Sécurité
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            <span className="block bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                Politique de
                            </span>
                            <span className="block mt-2 bg-linear-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                Confidentialité
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300">
                            Dernière mise à jour: <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400 font-semibold">15 Janvier 2024</span>.
                            Nous protégeons vos données avec la plus grande attention.
                        </p>
                    </div>
                </section>

                {/* Data Types Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Types de Données Collectées
                            </h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Nous collectons uniquement les données nécessaires à votre prise en charge
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {dataTypes.map((dataType, index) => {
                                const DataIcon = dataType.icon;
                                return (
                                    <div
                                        key={index}
                                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2"
                                    >
                                        <div className="w-14 h-14 bg-linear-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                            <DataIcon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">{dataType.title}</h3>
                                        <ul className="space-y-2">
                                            {dataType.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-center space-x-2 text-slate-400">
                                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Policy Details */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Left Column - Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shrink-0">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black text-white mb-2">Engagement de Confidentialité</h2>
                                            <p className="text-slate-300">
                                                En tant que professionnel de santé, je suis soumis au secret médical.
                                                Vos données de santé sont protégées par la loi et ne seront jamais utilisées
                                                à des fins autres que votre prise en charge médicale.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Policy Sections */}
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
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${openSection === index ? 'bg-linear-to-br from-cyan-500 to-blue-600' : 'bg-white/5'}`}>
                                                        <Lock className="w-4 h-4 text-white" />
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
                                <div className="sticky top-32 space-y-6">
                                    {/* Contact & Rights */}
                                    <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/10 to-purple-500/10 border border-white/20 rounded-3xl p-8">
                                        <Mail className="w-8 h-8 text-violet-400 mb-4" />
                                        <h3 className="text-xl font-bold text-white mb-4">Exercer Vos Droits</h3>
                                        <p className="text-slate-400 mb-4">
                                            Pour exercer vos droits d&apos;accès, de rectification ou d&apos;opposition, contactez-nous :
                                        </p>
                                        <a
                                            href="mailto:privacy@physioexpert.tn"
                                            className="text-violet-400 hover:text-violet-300 transition-colors font-semibold"
                                        >
                                            privacy@physioexpert.tn
                                        </a>
                                    </div>

                                    <div className="backdrop-blur-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-white/20 rounded-3xl p-8">
                                        <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                                        <h3 className="text-xl font-bold text-white mb-4">Contact Délégué</h3>
                                        <p className="text-slate-400 mb-4">
                                            Pour toute question relative à la protection de vos données :
                                        </p>
                                        <a
                                            href="tel:+21612345678"
                                            className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                                        >
                                            +216 12 345 678
                                        </a>
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