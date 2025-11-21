// app/services/page.tsx
'use client';

import { Heart, Bone, Brain, Footprints, Zap, Target, Users, Clock, ArrowRight, Sparkles, CheckCircle, Star, Award, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            icon: Target,
            title: 'Rééducation Fonctionnelle',
            description: 'Récupération complète des capacités physiques après blessures, accidents ou interventions chirurgicales avec protocoles personnalisés.',
            fullDescription: 'Notre approche de rééducation fonctionnelle combine les dernières avancées en kinésithérapie avec des techniques éprouvées pour une récupération optimale. Chaque programme est personnalisé selon vos objectifs et votre progression.',
            details: [
                'Rééducation post-opératoire (prothèses, ligaments, fractures)',
                'Récupération fonctionnelle complète',
                'Travail de la mobilité et amplitude articulaire',
                'Renforcement musculaire progressif',
                'Réadaptation à l\'effort'
            ],
            stats: '95% de réussite',
            duration: '6-12 semaines',
            gradient: 'from-violet-500 to-purple-600',
            results: ['Mobilité retrouvée', 'Autonomie complète', 'Retour aux activités']
        },
        {
            icon: Zap,
            title: 'Kinésithérapie Sportive',
            description: 'Optimisation des performances, prévention et traitement des blessures liées à la pratique sportive de haut niveau.',
            fullDescription: 'Spécialement conçu pour les sportifs, ce programme combine prévention, performance et rééducation. Nous travaillons avec des athlètes de tous niveaux pour optimiser leur potentiel.',
            details: [
                'Préparation physique spécifique',
                'Récupération post-effort avancée',
                'Traitement des blessures sportives aiguës',
                'Bilan musculaire et articulaire complet',
                'Programme de prévention personnalisé'
            ],
            stats: '300+ athlètes suivis',
            duration: 'Variable selon objectifs',
            gradient: 'from-cyan-500 to-blue-600',
            results: ['Performance optimisée', 'Blessures prévenues', 'Récupération accélérée']
        },
        {
            icon: Bone,
            title: 'Thérapie Manuelle',
            description: 'Techniques manuelles avancées et précises pour le traitement des douleurs musculo-squelettiques chroniques ou aiguës.',
            fullDescription: 'Notre approche en thérapie manuelle intègre les techniques les plus modernes pour un soulagement rapide et durable. Chaque geste est précis et adapté à votre condition.',
            details: [
                'Mobilisations articulaires spécifiques',
                'Techniques myofasciales avancées',
                'Traitement des raideurs et limitations',
                'Thérapie des points gâchettes',
                'Correction des déséquilibres posturaux'
            ],
            stats: 'Soulagement immédiat',
            duration: '1-8 séances',
            gradient: 'from-pink-500 to-rose-600',
            results: ['Douleur soulagée', 'Mobilité restaurée', 'Confiance retrouvée']
        },
        {
            icon: Heart,
            title: 'Rééducation Respiratoire',
            description: 'Amélioration significative de la fonction respiratoire pour patients atteints de pathologies pulmonaires chroniques ou aiguës.',
            fullDescription: 'Programme complet de rééducation respiratoire utilisant des techniques modernes et des équipements spécialisés pour améliorer votre qualité de vie au quotidien.',
            details: [
                'Drainage bronchique assisté',
                'Rééducation à l\'effort ventilatoire',
                'Exercices respiratoires spécifiques',
                'Techniques de ventilation',
                'Éducation thérapeutique'
            ],
            stats: '80% amélioration capacité',
            duration: '4-20 séances',
            gradient: 'from-emerald-500 to-green-600',
            results: ['Respiration facilitée', 'Endurance améliorée', 'Qualité de vie accrue']
        },
        {
            icon: Brain,
            title: 'Rééducation Neurologique',
            description: 'Accompagnement spécialisé des patients atteints de troubles neurologiques pour retrouver autonomie et confiance.',
            fullDescription: 'Approche globale de la rééducation neurologique combinant techniques modernes et accompagnement personnalisé pour une récupération optimale après AVC, traumatisme ou maladie neurodégénérative.',
            details: [
                'Rééducation post-AVC complète',
                'Traitement des troubles de l\'équilibre',
                'Récupération motrice fonctionnelle',
                'Thérapie de la marche et transferts',
                'Rééducation cognitive associée'
            ],
            stats: '90% progrès significatifs',
            duration: '12-36 semaines',
            gradient: 'from-amber-500 to-orange-600',
            results: ['Autonomie retrouvée', 'Confiance restaurée', 'Qualité de vie améliorée']
        },
        {
            icon: Footprints,
            title: 'Posturologie & Analyse de la Marche',
            description: 'Analyse scientifique et correction des troubles posturaux responsables de douleurs chroniques et limitations fonctionnelles.',
            fullDescription: 'Notre approche en posturologie utilise des technologies d\'analyse avancées pour identifier et corriger les déséquilibres posturaux à l\'origine de nombreuses douleurs chroniques.',
            details: [
                'Analyse biomécanique complète de la marche',
                'Correction posturale globale',
                'Prescription de semelles orthopédiques',
                'Rééducation proprioceptive',
                'Travail de l\'équilibre et coordination'
            ],
            stats: '85% réduction douleur',
            duration: '6-15 séances',
            gradient: 'from-indigo-500 to-blue-600',
            results: ['Posture corrigée', 'Douleurs disparues', 'Équilibre amélioré']
        }
    ];

    const stats = [
        { icon: Users, value: '500+', label: 'Patients Satisfaits', color: 'text-violet-400' },
        { icon: Award, value: '10+', label: 'Années d\'Expérience', color: 'text-cyan-400' },
        { icon: Star, value: '4.9/5', label: 'Satisfaction Patients', color: 'text-amber-400' },
        { icon: Clock, value: '15min', label: 'Réponse Rapide', color: 'text-emerald-400' }
    ];

    const process = [
        {
            step: '01',
            title: 'Bilan Complet',
            description: 'Évaluation approfondie de votre condition et établissement de vos objectifs personnels'
        },
        {
            step: '02',
            title: 'Plan Personnalisé',
            description: 'Création d\'un programme de traitement sur mesure adapté à vos besoins spécifiques'
        },
        {
            step: '03',
            title: 'Traitement Actif',
            description: 'Séances thérapeutiques utilisant les techniques les plus modernes et efficaces'
        },
        {
            step: '04',
            title: 'Suivi & Adaptation',
            description: 'Réévaluation continue et ajustement du traitement pour des résultats optimaux'
        }
    ];

    // Get the current active service
    const currentService = services[activeService];
    const CurrentServiceIcon = currentService.icon;

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-violet-950 via-slate-950 to-cyan-950" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="mt-20 pt-32 pb-20 px-4 relative">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/10">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-semibold bg-linear-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
                                Services Premium · Résultats Garantis
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            <span className="block bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                Nos Services
                            </span>
                            <span className="block mt-2 bg-linear-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                d&apos;Excellence
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300">
                            Découvrez notre gamme complète de services en kinésithérapie et rééducation,
                            alliant <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400 font-semibold">technologie avancée</span> et
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-pink-400 font-semibold"> expertise médicale</span> pour des résultats optimaux.
                        </p>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto`} />
                                    <div className="text-2xl font-black mb-1 bg-linear-to-br from-white to-slate-400 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-linear-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 rounded-full text-sm font-semibold text-violet-300">
                                    Tous Nos Services
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Des Soins Sur Mesure
                            </h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Chaque service est conçu pour répondre à vos besoins spécifiques avec des protocoles personnalisés
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => {
                                const ServiceIcon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative backdrop-blur-xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden cursor-pointer"
                                        onClick={() => setActiveService(index)}
                                    >
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                        {/* Icon */}
                                        <div className={`relative w-16 h-16 bg-linear-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                            <ServiceIcon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Badge */}
                                        <div className="absolute top-6 right-6">
                                            <span className={`px-3 py-1 bg-linear-to-r ${service.gradient} rounded-full text-xs font-bold text-white shadow-lg`}>
                                                {service.stats}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-slate-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-400 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Duration */}
                                        <div className="flex items-center text-sm text-slate-500 mb-4">
                                            <Clock className="w-4 h-4 mr-2" />
                                            Durée moyenne: {service.duration}
                                        </div>

                                        {/* Key Results */}
                                        <div className="space-y-2 mb-6">
                                            {service.results.slice(0, 2).map((result, idx) => (
                                                <div key={idx} className="flex items-center text-sm">
                                                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                                                    <span className="text-slate-300">{result}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <button className="flex items-center space-x-2 text-sm font-semibold group/btn">
                                            <span className={`bg-linear-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                                Découvrir le programme
                                            </span>
                                            <ArrowRight className={`w-4 h-4 bg-linear-to-r ${service.gradient} bg-clip-text text-transparent group-hover/btn:translate-x-2 transition-transform`} />
                                        </button>

                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Detailed Service View */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="backdrop-blur-xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                {/* Service Details */}
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className={`w-14 h-14 bg-linear-to-br ${currentService.gradient} rounded-2xl flex items-center justify-center mr-4`}>
                                            <CurrentServiceIcon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-black text-white mb-2">
                                                {currentService.title}
                                            </h3>
                                            <div className={`px-3 py-1 bg-linear-to-r ${currentService.gradient} rounded-full text-sm font-bold text-white inline-block`}>
                                                {currentService.stats}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                        {currentService.fullDescription}
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <h4 className="text-xl font-bold text-white mb-4">Ce que comprend le programme :</h4>
                                        {currentService.details.map((detail, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <span className="text-slate-300">{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-xl font-bold text-white mb-2">Résultats attendus :</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {currentService.results.map((result, index) => (
                                                <div key={index} className={`px-4 py-2 bg-linear-to-r ${currentService.gradient} rounded-full text-sm font-semibold text-white`}>
                                                    {result}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                        Choisissez Votre Service
                                    </h4>
                                    {services.map((service, index) => {
                                        const ServiceIcon = service.icon;
                                        return (
                                            <button
                                                type="button"
                                                key={index}
                                                onClick={() => setActiveService(index)}
                                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activeService === index
                                                    ? `bg-linear-to-r ${service.gradient} border-transparent text-white shadow-2xl transform scale-105`
                                                    : 'backdrop-blur-xl bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/30'
                                                    }`}
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeService === index ? 'bg-white/20' : `bg-linear-to-br ${service.gradient}`
                                                        }`}>
                                                        <ServiceIcon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-lg mb-1">{service.title}</h5>
                                                        <p className="text-sm opacity-80">{service.stats}</p>
                                                    </div>
                                                    {activeService === index && (
                                                        <ArrowRight className="w-5 h-5 text-white" />
                                                    )}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-linear-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 rounded-full text-sm font-semibold text-pink-300">
                                    Notre Processus
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Votre Parcours de Soins
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((step, index) => (
                                <div
                                    key={index}
                                    className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4"
                                >
                                    <div className="text-6xl font-black bg-linear-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{step.description}</p>

                                    {/* Connecting Line */}
                                    {index < process.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-linear-to-r from-violet-500 to-pink-500 transform translate-x-full -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/20 via-pink-500/20 to-cyan-500/20 border border-white/20 rounded-[3rem] p-16 relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
                                    <Sparkles className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm font-semibold">Première Consultation -20% · Offre Limitée</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    <span className="bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                        Prêt à Commencer
                                    </span>
                                    <br />
                                    <span className="bg-linear-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                        Votre Récupération ?
                                    </span>
                                </h2>

                                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Rejoignez des centaines de patients qui ont retrouvé leur mobilité et leur qualité de vie grâce à nos programmes personnalisés.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <a
                                        href="/contact"
                                        className="group relative px-10 py-6 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105"
                                    >
                                        <span className="flex items-center space-x-2">
                                            <Calendar className="w-5 h-5" />
                                            <span>Réserver Maintenant</span>
                                        </span>
                                    </a>

                                    <a
                                        href="tel:+21612345678"
                                        className="px-10 py-6 backdrop-blur-xl bg-white/10 border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                                    >
                                        <span className="flex items-center space-x-2">
                                            <span>Appeler: +216 12 345 678</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}