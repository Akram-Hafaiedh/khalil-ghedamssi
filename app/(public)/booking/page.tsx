// app/booking/page.tsx
'use client';

import { useState } from 'react';
import { Clock, User, Phone, Mail, MapPin, CheckCircle, Shield, Sparkles, ArrowRight, Star, Zap, Heart, Target, Footprints, Brain } from 'lucide-react';

export default function BookingPage() {
    const [selectedService, setSelectedService] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const services = [
        {
            id: 'reeducation',
            title: 'Rééducation Fonctionnelle',
            duration: '45-60 min',
            price: '120 TND',
            description: 'Récupération après blessure ou chirurgie',
            icon: Target,
            gradient: 'from-violet-500 to-purple-600'
        },
        {
            id: 'sport',
            title: 'Kinésithérapie Sportive',
            duration: '60 min',
            price: '140 TND',
            description: 'Optimisation performance et prévention',
            icon: Zap,
            gradient: 'from-cyan-500 to-blue-600'
        },
        {
            id: 'manual',
            title: 'Thérapie Manuelle',
            duration: '45 min',
            price: '110 TND',
            description: 'Soulagement des douleurs musculo-squelettiques',
            icon: Heart,
            gradient: 'from-pink-500 to-rose-600'
        },
        {
            id: 'respiratory',
            title: 'Rééducation Respiratoire',
            duration: '50 min',
            price: '100 TND',
            description: 'Amélioration fonction respiratoire',
            icon: User,
            gradient: 'from-emerald-500 to-green-600'
        },
        {
            id: 'neurological',
            title: 'Rééducation Neurologique',
            duration: '60 min',
            price: '130 TND',
            description: 'Accompagnement troubles neurologiques',
            icon: Brain,
            gradient: 'from-amber-500 to-orange-600'
        },
        {
            id: 'posture',
            title: 'Posturologie',
            duration: '55 min',
            price: '125 TND',
            description: 'Analyse et correction posturale',
            icon: Footprints,
            gradient: 'from-indigo-500 to-blue-600'
        }
    ];

    const availability = [
        { day: 'Lundi', slots: ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00'] },
        { day: 'Mardi', slots: ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00'] },
        { day: 'Mercredi', slots: ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00'] },
        { day: 'Jeudi', slots: ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00'] },
        { day: 'Vendredi', slots: ['08:00', '09:30', '11:00', '14:00', '15:30'] },
        { day: 'Samedi', slots: ['09:00', '10:30', '12:00'] }
    ];

    const steps = [
        { number: 1, title: 'Choisir le Service', description: 'Sélectionnez le type de consultation' },
        { number: 2, title: 'Sélectionner le Créneau', description: 'Choisissez date et heure' },
        { number: 3, title: 'Informations Personnelles', description: 'Renseignez vos coordonnées' },
        { number: 4, title: 'Confirmation', description: 'Validation du rendez-vous' }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-violet-950 via-slate-950 to-cyan-950" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 relative">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/10">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-semibold bg-linear-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
                                Réservation en Ligne · Confirmation Immédiate
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            <span className="block bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                Prendre Rendez-vous
                            </span>
                            <span className="block mt-2 bg-linear-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                en 2 Minutes
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300">
                            Réservez votre consultation de kinésithérapie en ligne et
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400 font-semibold"> recevez une confirmation instantanée</span>.
                        </p>
                    </div>
                </section>

                {/* Main Booking Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Booking Form */}
                            <div className="lg:col-span-2">
                                <div className="backdrop-blur-xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
                                    {/* Progress Steps */}
                                    <div className="mb-12">
                                        <div className="grid grid-cols-4 gap-4">
                                            {steps.map((step, index) => (
                                                <div key={step.number} className="text-center">
                                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${currentStep >= step.number
                                                            ? `bg-linear-to-r from-violet-600 to-cyan-600 text-white shadow-lg`
                                                            : 'bg-white/5 border border-white/10 text-slate-400'
                                                        }`}>
                                                        {currentStep > step.number ? (
                                                            <CheckCircle className="w-6 h-6" />
                                                        ) : (
                                                            <span className="font-bold">{step.number}</span>
                                                        )}
                                                    </div>
                                                    <div className="text-sm">
                                                        <div className={`font-semibold ${currentStep >= step.number ? 'text-white' : 'text-slate-400'
                                                            }`}>
                                                            {step.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Step 1: Service Selection */}
                                    {currentStep === 1 && (
                                        <div className="space-y-8">
                                            <div className="text-center mb-8">
                                                <h2 className="text-3xl font-black mb-4 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                                    Choisissez Votre Service
                                                </h2>
                                                <p className="text-slate-400">Sélectionnez le type de consultation qui correspond à vos besoins</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {services.map((service) => {
                                                    const ServiceIcon = service.icon;
                                                    return (
                                                        <button
                                                            key={service.id}
                                                            onClick={() => setSelectedService(service.id)}
                                                            className={`group relative text-left backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${selectedService === service.id
                                                                    ? `bg-linear-to-r ${service.gradient} border-transparent text-white shadow-2xl scale-105`
                                                                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/30'
                                                                }`}
                                                        >
                                                            <div className="flex items-start space-x-4">
                                                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${selectedService === service.id ? 'bg-white/20' : `bg-linear-to-br ${service.gradient}`
                                                                    }`}>
                                                                    <ServiceIcon className="w-7 h-7 text-white" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                                                                    <p className="text-sm opacity-80 mb-3">{service.description}</p>
                                                                    <div className="flex items-center justify-between text-sm">
                                                                        <span className="flex items-center space-x-1">
                                                                            <Clock className="w-4 h-4" />
                                                                            <span>{service.duration}</span>
                                                                        </span>
                                                                        <span className="font-bold">{service.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            <div className="text-center pt-8">
                                                <button
                                                    onClick={() => setCurrentStep(2)}
                                                    disabled={!selectedService}
                                                    className="group relative px-10 py-4 bg-linear-to-r from-violet-600 to-cyan-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                                >
                                                    <span className="flex items-center space-x-2">
                                                        <span>Continuer</span>
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 2: Date & Time Selection */}
                                    {currentStep === 2 && (
                                        <div className="space-y-8">
                                            <div className="text-center mb-8">
                                                <h2 className="text-3xl font-black mb-4 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                                    Choisissez Date et Heure
                                                </h2>
                                                <p className="text-slate-400">Sélectionnez un créneau disponible cette semaine</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {availability.map((day, index) => (
                                                    <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                                                        <h3 className="font-bold text-white mb-4 text-center">{day.day}</h3>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {day.slots.map((slot, slotIndex) => (
                                                                <button
                                                                    key={slotIndex}
                                                                    className="py-2 px-3 bg-white/5 hover:bg-linear-to-r hover:from-violet-500/20 hover:to-cyan-500/20 border border-white/10 rounded-xl text-sm transition-all duration-300 hover:scale-105"
                                                                >
                                                                    {slot}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex justify-between pt-8">
                                                <button
                                                    onClick={() => setCurrentStep(1)}
                                                    className="px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
                                                >
                                                    Retour
                                                </button>
                                                <button
                                                    onClick={() => setCurrentStep(3)}
                                                    className="group relative px-10 py-4 bg-linear-to-r from-violet-600 to-cyan-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105"
                                                >
                                                    <span className="flex items-center space-x-2">
                                                        <span>Continuer</span>
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 3: Personal Information */}
                                    {currentStep === 3 && (
                                        <div className="space-y-8">
                                            <div className="text-center mb-8">
                                                <h2 className="text-3xl font-black mb-4 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                                    Vos Informations
                                                </h2>
                                                <p className="text-slate-400">Renseignez vos coordonnées pour finaliser la réservation</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                        Nom Complet *
                                                    </label>
                                                    <input
                                                        type="text"
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
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                                                        placeholder="+216 XX XXX XXX"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                        Motif de Consultation
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                                                        placeholder="Décrivez brièvement votre situation"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                                                <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <p className="text-sm text-slate-300">
                                                    Vos informations sont sécurisées et ne seront utilisées que pour la gestion de votre rendez-vous.
                                                    Nous respectons votre vie privée.
                                                </p>
                                            </div>

                                            <div className="flex justify-between pt-8">
                                                <button
                                                    onClick={() => setCurrentStep(2)}
                                                    className="px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
                                                >
                                                    Retour
                                                </button>
                                                <button
                                                    onClick={() => setCurrentStep(4)}
                                                    className="group relative px-10 py-4 bg-linear-to-r from-violet-600 to-cyan-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105"
                                                >
                                                    <span className="flex items-center space-x-2">
                                                        <span>Confirmer la Réservation</span>
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 4: Confirmation */}
                                    {currentStep === 4 && (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                                <CheckCircle className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-3xl font-black text-white mb-4">Réservation Confirmée !</h3>
                                            <p className="text-slate-400 mb-8 max-w-md mx-auto">
                                                Votre rendez-vous a été réservé avec succès. Vous recevrez un email de confirmation dans les prochaines minutes.
                                            </p>

                                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 max-w-md mx-auto mb-8">
                                                <h4 className="font-bold text-white mb-4">Détails du Rendez-vous</h4>
                                                <div className="space-y-3 text-left">
                                                    <div className="flex justify-between">
                                                        <span className="text-slate-400">Service:</span>
                                                        <span className="text-white font-semibold">Rééducation Fonctionnelle</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-slate-400">Date:</span>
                                                        <span className="text-white font-semibold">Lundi 15 Janvier 2024</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-slate-400">Heure:</span>
                                                        <span className="text-white font-semibold">09:30</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-slate-400">Durée:</span>
                                                        <span className="text-white font-semibold">45-60 minutes</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <button className="w-full px-8 py-4 bg-linear-to-r from-violet-600 to-cyan-600 rounded-2xl font-bold hover:shadow-violet-500/50 transition-all duration-300">
                                                    Ajouter au Calendrier
                                                </button>
                                                <button className="w-full px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300">
                                                    Retour à l&apos;Accueil
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Sidebar - Benefits & Information */}
                            <div className="space-y-8">
                                {/* Selected Service Summary */}
                                <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/10 to-cyan-500/10 border border-white/20 rounded-3xl p-8">
                                    <h3 className="text-2xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                        Votre Réservation
                                    </h3>

                                    {selectedService ? (
                                        <div className="space-y-4">
                                            {services.filter(s => s.id === selectedService).map(service => {
                                                const ServiceIcon = service.icon;
                                                return (
                                                    <div key={service.id} className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                                                        <div className={`w-12 h-12 bg-linear-to-br ${service.gradient} rounded-xl flex items-center justify-center`}>
                                                            <ServiceIcon className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-white">{service.title}</div>
                                                            <div className="text-sm text-slate-400">{service.duration} • {service.price}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <p className="text-slate-400 text-center py-4">Aucun service sélectionné</p>
                                    )}
                                </div>

                                {/* Benefits */}
                                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                                    <h3 className="text-xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                        Pourquoi Réserver en Ligne ?
                                    </h3>

                                    <div className="space-y-4">
                                        {[
                                            { icon: Clock, text: 'Confirmation immédiate', color: 'text-cyan-400' },
                                            { icon: Shield, text: 'Données sécurisées', color: 'text-emerald-400' },
                                            { icon: Star, text: 'Meilleur créneau garanti', color: 'text-amber-400' },
                                            { icon: Zap, text: 'Rappel SMS inclus', color: 'text-violet-400' }
                                        ].map((benefit, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                                                <span className="text-slate-300">{benefit.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                                    <h3 className="text-xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                        Besoin d&apos;Aide ?
                                    </h3>

                                    <div className="space-y-4">
                                        <a href="tel:+21612345678" className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                                            <Phone className="w-5 h-5 text-cyan-400" />
                                            <span>+216 12 345 678</span>
                                        </a>
                                        <a href="mailto:contact@physioexpert.tn" className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                                            <Mail className="w-5 h-5 text-violet-400" />
                                            <span>contact@physioexpert.tn</span>
                                        </a>
                                        <div className="flex items-center space-x-3 text-slate-300">
                                            <MapPin className="w-5 h-5 text-pink-400" />
                                            <span>123 Avenue Habib Bourguiba, Tunis</span>
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