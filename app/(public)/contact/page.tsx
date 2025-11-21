'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, MessageCircle, Calendar, CheckCircle, ArrowRight, Zap, Lock, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Visitez-nous',
            content: '123 Avenue Habib Bourguiba',
            subContent: '1001 Tunis, Tunisia',
            gradient: 'from-violet-500 to-purple-600',
            link: 'https://maps.google.com'
        },
        {
            icon: Phone,
            title: 'Appelez-nous',
            content: '+216 12 345 678',
            subContent: 'Lun-Ven: 8h-18h',
            gradient: 'from-cyan-500 to-blue-600',
            link: 'tel:+21612345678'
        },
        {
            icon: Mail,
            title: 'Écrivez-nous',
            content: 'contact@physioexpert.tn',
            subContent: 'Réponse en 24h',
            gradient: 'from-pink-500 to-rose-600',
            link: 'mailto:contact@physioexpert.tn'
        },
        {
            icon: Clock,
            title: 'Horaires',
            content: 'Lun-Ven: 8h-18h',
            subContent: 'Sam: 9h-13h',
            gradient: 'from-amber-500 to-orange-600',
            link: null
        }
    ];

    const quickActions = [
        {
            icon: Calendar,
            title: 'Rendez-vous Express',
            description: 'Réservation en ligne en 2 minutes',
            action: 'Réserver',
            gradient: 'from-violet-600 to-purple-600',
            link: '/booking'
        },
        {
            icon: MessageCircle,
            title: 'Questions Fréquentes',
            description: 'Trouvez rapidement des réponses',
            action: 'Consulter',
            gradient: 'from-cyan-600 to-blue-600',
            link: '/about#faq'
        },
        {
            icon: Zap,
            title: 'Urgence Médicale',
            description: 'Contactez-nous immédiatement',
            action: 'Appeler',
            gradient: 'from-pink-600 to-rose-600',
            link: 'tel:+21612345678'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-linear(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 50%)`
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-violet-950 via-slate-950 to-cyan-950" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            </div>

            <div className="relative z-10">
                <section className="mt-28 relative min-h-screen flex items-center justify-center px-4 py-20">
                    {/* <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500" /> */}


                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        {/* Header */}
                        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/10">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm font-semibold bg-linear-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
                                Disponible maintenant · Réponse rapide
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            <span className="block bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                Contactez-Nous
                            </span>
                            <span className="block mt-2 bg-linear-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                Aujourd&apos;hui
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Notre équipe est à votre écoute pour répondre à toutes vos questions et
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400 font-semibold"> planifier votre premier rendez-vous</span>.
                        </p>

                        {/* Quick Actions Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {quickActions.map((action, index) => (
                                <Link
                                    key={index}
                                    href={action.link}
                                    className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer block"
                                >
                                    <div className={`absolute inset-0 bg-linear-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    <div className={`w-14 h-14 bg-linear-to-br ${action.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <action.icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-white">{action.title}</h3>
                                    <p className="text-slate-400 mb-6">{action.description}</p>

                                    <div className="flex items-center space-x-2 text-sm font-semibold group/btn">
                                        <span className={`bg-linear-to-r ${action.gradient} bg-clip-text text-transparent`}>
                                            {action.action}
                                        </span>
                                        <ArrowRight className={`w-4 h-4 bg-linear-to-r ${action.gradient} bg-clip-text text-transparent group-hover/btn:translate-x-2 transition-transform`} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>



            {/* Rest of the content without background effects */}
            <section className="relative py-32 px-4">
                <div className="container mx-auto max-w-7xl px-4 py-20">
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-black mb-8 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Informations de Contact
                            </h2>

                            <div className="space-y-6 mb-12">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link || '#'}
                                        target={info.link?.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="group block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className={`shrink-0 w-14 h-14 bg-linear-to-br ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                                                <info.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-white mb-1 text-lg">{info.title}</h3>
                                                <p className="text-slate-300 font-medium">{info.content}</p>
                                                <p className="text-slate-500 text-sm mt-1">{info.subContent}</p>
                                            </div>
                                            {info.link && (
                                                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                                            )}
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Map */}
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden">
                                <h3 className="font-bold text-white mb-4 text-lg">Notre Localisation</h3>
                                <div className="relative bg-linear-to-br from-violet-500/10 to-cyan-500/10 h-64 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkMikiLz48L3N2Zz4=')] opacity-50" />
                                    <div className="relative text-center">
                                        <MapPin className="w-12 h-12 mx-auto mb-3 text-violet-400 group-hover:scale-110 transition-transform" />
                                        <p className="text-slate-400 font-medium">Carte interactive Google Maps</p>
                                        <p className="text-slate-600 text-sm mt-2">Cliquez pour ouvrir</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="backdrop-blur-xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
                            <div className="mb-8">
                                <h2 className="text-3xl font-black mb-3 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                    Envoyez un Message
                                </h2>
                                <p className="text-slate-400">Remplissez le formulaire et nous vous contacterons rapidement</p>
                            </div>

                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Message Envoyé !</h3>
                                    <p className="text-slate-400">Nous vous contacterons dans les plus brefs délais.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                Nom Complet *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                Téléphone *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                                                placeholder="+216 XX XXX XXX"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-300 mb-2">
                                            Sujet *
                                        </label>
                                        <select
                                            title='Sujet'
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all text-white"
                                        >
                                            <option value="" className="bg-slate-900">Sélectionnez un sujet</option>
                                            <option value="appointment" className="bg-slate-900">Prise de rendez-vous</option>
                                            <option value="information" className="bg-slate-900">Demande d&apos;information</option>
                                            <option value="emergency" className="bg-slate-900">Urgence</option>
                                            <option value="other" className="bg-slate-900">Autre</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-300 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all text-white placeholder-slate-500 resize-none"
                                            placeholder="Décrivez votre situation ou posez vos questions..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="group relative w-full px-8 py-4 bg-linear-to-r from-violet-600 to-cyan-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center space-x-2">
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    <span>Envoi en cours...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Envoyer le Message</span>
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>

                                    <div className="border-t border-white/10 pt-6 mt-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Security & Trust Badges */}
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-linear-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                                                        <Lock className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-white text-sm">Données cryptées</div>
                                                        <div className="text-xs text-slate-400">100% sécurisé</div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-linear-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                                                        <Clock className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-white text-sm">Réponse rapide</div>
                                                        <div className="text-xs text-slate-400">Sous 3 heures</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Rating & Stats */}
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-linear-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                                                        <Star className="w-5 h-5 text-white fill-current" />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-1">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star key={star} className="w-3 h-3 text-amber-400 fill-current" />
                                                            ))}
                                                            <span className="text-sm font-bold text-white ml-1">4.86</span>
                                                        </div>
                                                        <div className="text-xs text-slate-400">500+ patients satisfaits</div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                                                        <ShieldCheck className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-white text-sm">Confidentialité</div>
                                                        <div className="text-xs text-slate-400">Données protégées</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Additional Trust Note */}
                                        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                                            <div className="flex items-start space-x-3">
                                                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-sm text-slate-300">
                                                        En soumettant ce formulaire, vous acceptez d&apos;être contacté par notre équipe médicale.
                                                        Vos informations sont traitées avec la plus stricte confidentialité.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/20 via-pink-500/20 to-cyan-500/20 border border-white/20 rounded-3xl p-12 text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-semibold">Réponse Garantie Sous 24h</span>
                        </div>

                        <h3 className="text-4xl font-black mb-4 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Besoin d&apos;une Réponse Immédiate ?
                        </h3>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                            Notre équipe est disponible par téléphone pour répondre à vos urgences
                        </p>

                        <a
                            href="tel:+21612345678"
                            className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105"
                        >
                            <Phone className="w-6 h-6" />
                            <span>+216 12 345 678</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}