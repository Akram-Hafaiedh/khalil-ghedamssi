// app/about/page.tsx
'use client';

import { Award, BookOpen, Target, Users, ChevronDown, ChevronUp, Sparkles, Heart, Zap, Shield, ArrowRight, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function AboutPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const stats = [
        { icon: Users, number: '500+', label: 'Patients Satisfaits', gradient: 'from-violet-500 to-purple-600' },
        { icon: Award, number: '10+', label: 'Ans d\'Expérience', gradient: 'from-cyan-500 to-blue-600' },
        { icon: Target, number: '95%', label: 'Taux de Satisfaction', gradient: 'from-pink-500 to-rose-600' },
        { icon: BookOpen, number: '15+', label: 'Formations Spécialisées', gradient: 'from-amber-500 to-orange-600' }
    ];

    const qualifications = [
        'Diplôme d\'État en Kinésithérapie',
        'Master en Rééducation Fonctionnelle',
        'Formation en Thérapie Manuelle Orthopédique',
        'Spécialisation en Kinésithérapie Sportive',
        'Certificat en Rééducation Neurologique',
        'Formation Continue en Posturologie',
        'Expert en Rééducation Posturale',
        'Certification en Dry Needling'
    ];

    const faqs = [
        {
            question: "Combien de temps dure une séance de kinésithérapie ?",
            answer: "Une séance dure généralement entre 45 et 60 minutes, selon vos besoins spécifiques et le protocole de traitement établi."
        },
        {
            question: "Faut-il une prescription médicale pour consulter ?",
            answer: "Oui, une prescription médicale est nécessaire pour que les séances soient prises en charge par la sécurité sociale et votre mutuelle."
        },
        {
            question: "Quand peut-on voir les premiers résultats ?",
            answer: "Les premiers résultats sont souvent perceptibles après 3 à 5 séances, mais cela varie selon la pathologie et l'engagement du patient."
        },
        {
            question: "Quelles sont les méthodes de paiement acceptées ?",
            answer: "Nous acceptons les espèces, cartes bancaires, chèques et virements. Le tiers payant est possible avec certaines mutuelles."
        },
        {
            question: "Comment se déroule la première séance ?",
            answer: "La première séance comprend un bilan complet, l'établissement du diagnostic kinésithérapique et la mise en place du plan de traitement personnalisé."
        },
        {
            question: "Proposez-vous des séances à domicile ?",
            answer: "Oui, nous proposons des séances à domicile selon les besoins médicaux et dans le respect du parcours de soins."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-violet-950 via-slate-950 to-cyan-950" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="mt-6 relative min-h-screen flex items-center justify-center px-4 py-20">
                    {/* <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500" /> */}
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/10">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-semibold bg-linear-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
                                Excellence en Kinésithérapie depuis 2014
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            <span className="block bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                Votre Expert en
                            </span>
                            <span className="block mt-2 bg-linear-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                Rééducation
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300">
                            Fort de plus de 10 ans d&apos;expérience, je m&apos;engage à vous offrir des soins de qualité
                            adaptés à vos besoins dans un environnement moderne et accueillant à Tunis.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className={`w-16 h-16 bg-linear-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl font-black mb-2 bg-linear-to-br from-white to-slate-400 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Mission */}
                            <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-8">
                                <div className="w-14 h-14 bg-linear-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Heart className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="text-3xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                    Notre Mission
                                </h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Accompagner chaque patient dans sa rééducation avec des techniques modernes
                                    et une approche personnalisée, en visant toujours l&apos;excellence thérapeutique.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Nous croyons en une kinésithérapie qui respecte le rythme de chaque patient
                                    tout en utilisant les méthodes les plus efficaces pour une récupération optimale.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="backdrop-blur-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8">
                                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Zap className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="text-3xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                    Notre Vision
                                </h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Devenir la référence en kinésithérapie à Tunis en offrant des soins
                                    innovants et accessibles à tous, dans un cadre professionnel et bienveillant.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Nous nous engageons à continuellement nous former aux dernières techniques
                                    pour garantir à nos patients les meilleurs soins possibles.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Qualifications */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Qualifications & Expertise
                            </h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Une formation continue pour des soins d&apos;excellence
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {qualifications.map((qualification, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                    <div className="w-3 h-3 bg-linear-to-r from-violet-500 to-cyan-500 rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                                    <span className="text-slate-300 font-medium">{qualification}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Google Maps Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-black mb-3 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                    Notre Localisation
                                </h2>
                                <p className="text-slate-400">
                                    Retrouvez-nous facilement au cœur de Tunis pour vos séances de kinésithérapie
                                </p>
                            </div>

                            <div className="relative bg-linear-to-br from-violet-500/10 to-cyan-500/10 h-80 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden group cursor-pointer">
                                {/* Grid Pattern Background */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkMikiLz48L3N2Zz4=')] opacity-50" />

                                {/* Map Content */}
                                <div className="relative text-center p-8">
                                    <MapPin className="w-16 h-16 mx-auto mb-4 text-violet-400 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold text-white mb-2">123 Avenue Habib Bourguiba</h3>
                                    <p className="text-slate-300 mb-4">1001 Tunis, Tunisia</p>
                                    <p className="text-slate-400 text-sm mb-6">Au cœur de Tunis, facile d&apos;accès</p>

                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-violet-600 to-cyan-600 rounded-xl font-semibold hover:shadow-violet-500/50 transition-all duration-300 group/btn"
                                    >
                                        <span>Ouvrir dans Google Maps</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>

                            {/* Additional Info */}
                            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                                    <Clock className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                                    <div className="text-sm font-semibold text-white">Lun-Ven: 8h-18h</div>
                                    <div className="text-xs text-slate-400">Sam: 9h-13h</div>
                                </div>
                                <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                                    <MapPin className="w-6 h-6 mx-auto mb-2 text-violet-400" />
                                    <div className="text-sm font-semibold text-white">Stationnement</div>
                                    <div className="text-xs text-slate-400">Parking public à proximité</div>
                                </div>
                                <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                                    <Zap className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                                    <div className="text-sm font-semibold text-white">Accès</div>
                                    <div className="text-xs text-slate-400">Bus • Métro • Taxi</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>


                {/* FAQ Section */}
                <section id="faq" className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-white/10">
                                <span className="text-sm font-semibold bg-linear-to-r from-amber-200 to-pink-200 bg-clip-text text-transparent">
                                    Questions Fréquentes
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Vos Questions
                            </h2>
                            <p className="text-xl text-slate-400">
                                Trouvez rapidement les réponses à vos interrogations
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-lg font-semibold text-white pr-4">
                                            {faq.question}
                                        </span>
                                        {openFaq === index ? (
                                            <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                                        )}
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-6 py-4 border-t border-white/10">
                                            <p className="text-slate-300 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>


                        {/* Additional Help */}
                        <div className="text-center mt-12">
                            <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/10 to-cyan-500/10 border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
                                <Shield className="w-12 h-12 mx-auto mb-4 text-violet-400" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Besoin d&apos;une réponse personnalisée ?
                                </h3>
                                <p className="text-slate-400 mb-6">
                                    Notre équipe est disponible pour répondre à toutes vos questions spécifiques
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-violet-600 to-cyan-600 rounded-xl font-semibold hover:shadow-violet-500/50 transition-all duration-300"
                                >
                                    <span>Nous Contacter</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}