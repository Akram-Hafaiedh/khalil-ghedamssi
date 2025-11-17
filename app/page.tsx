'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Award, Clock, Sparkles, Zap, Heart, Target, TrendingUp } from 'lucide-react';
import NewsLetter from '@/components/ui/NewsLetter';

export default function StunningHomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      title: 'Rééducation Fonctionnelle',
      description: 'Récupération complète après blessure ou chirurgie avec protocoles personnalisés',
      icon: Target,
      linear: 'from-violet-500 to-purple-600',
      stats: '95% succès'
    },
    {
      title: 'Kinésithérapie Sportive',
      description: 'Optimisation des performances et prévention des blessures sportives',
      icon: Zap,
      linear: 'from-cyan-500 to-blue-600',
      stats: '300+ athlètes'
    },
    {
      title: 'Thérapie Manuelle',
      description: 'Techniques avancées pour soulagement immédiat et mobilité optimale',
      icon: Heart,
      linear: 'from-pink-500 to-rose-600',
      stats: 'Résultats rapides'
    }
  ];

  const testimonials = [
    {
      name: 'Mohamed S.',
      text: 'Transformation complète après mon opération. L\'approche personnalisée a fait toute la différence.',
      rating: 5,
      treatment: 'Rééducation post-opératoire',
      avatar: 'MS'
    },
    {
      name: 'Sophie L.',
      text: 'Expertise exceptionnelle et résultats au-delà de mes attentes. Je me sens revivre !',
      rating: 5,
      treatment: 'Thérapie manuelle',
      avatar: 'SL'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Patients Transformés', color: 'text-violet-400' },
    { icon: Award, value: '10+', label: 'Années d\'Excellence', color: 'text-cyan-400' },
    { icon: TrendingUp, value: '95%', label: 'Taux de Satisfaction', color: 'text-pink-400' },
    { icon: Sparkles, value: '15+', label: 'Certifications', color: 'text-amber-400' }
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
        {/* Hero Section */}
        <section className="mt-28 relative min-h-screen flex items-center justify-center px-4 py-20">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500" />

          <div className="max-w-7xl mx-auto text-center relative">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/10 shadow-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold bg-linear-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
                Disponible aujourd&apos;hui · Réponse en 1h
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent animate-linear">
                Votre Santé,
              </span>
              <span className="block mt-2 bg-linear-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Redéfinie
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300">
              Expérience de kinésithérapie premium à Tunis.
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400 font-semibold"> Technologie avancée</span>,
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-pink-400 font-semibold"> résultats prouvés</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                type="button"
                className="group relative px-8 py-5 bg-linear-to-r from-violet-600 to-cyan-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Réserver Maintenant</span>
                </span>
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity blur" />
              </button>

              <button
                type="button"
                className="group px-8 py-5 backdrop-blur-xl bg-white/5 border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2">
                <span>Découvrir Plus</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="animate-fadeInUp backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto`} />
                  <div className="text-3xl font-black mb-1 bg-linear-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
              <div className="w-1 h-3 bg-linear-to-b from-violet-400 to-cyan-400 rounded-full mx-auto animate-pulse" />
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-linear-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 rounded-full text-sm font-semibold text-violet-300">
                  Services Premium
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Excellence en Rééducation
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Des protocoles innovants adaptés à vos objectifs de récupération
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="animate-fadeInUp group relative backdrop-blur-xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* linear Overlay */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.linear} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`relative w-16 h-16 bg-linear-to-br ${service.linear} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 bg-linear-to-r ${service.linear} rounded-full text-xs font-bold text-white shadow-lg`}>
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

                  {/* CTA */}
                  <button className="flex items-center space-x-2 text-sm font-semibold group/btn">
                    <span className={`bg-linear-to-r ${service.linear} bg-clip-text text-transparent`}>
                      Découvrir
                    </span>
                    <ArrowRight className={`w-4 h-4 bg-linear-to-r ${service.linear} bg-clip-text text-transparent group-hover/btn:translate-x-2 transition-transform`} />
                  </button>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Split Design */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Features */}
              <div>
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-linear-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 rounded-full text-sm font-semibold text-pink-300">
                    Pourquoi Nous Choisir
                  </span>
                </div>
                <h2 className="text-5xl font-black mb-8 leading-tight">
                  <span className="bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    L&apos;Excellence en
                  </span>
                  <br />
                  <span className="bg-linear-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                    Kinésithérapie
                  </span>
                </h2>

                <div className="space-y-6">
                  {[
                    { text: 'Expertise certifiée avec 10+ ans d\'expérience', icon: Award },
                    { text: 'Équipement médical de dernière génération', icon: Zap },
                    { text: 'Protocoles personnalisés basés sur vos objectifs', icon: Target },
                    { text: 'Suivi continu et ajustements en temps réel', icon: TrendingUp }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-start space-x-4 backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="shrink-0 w-12 h-12 bg-linear-to-br from-violet-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-slate-200">{item.text}</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Decorative Stats */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/50">
                    <div className="text-6xl font-black bg-linear-to-br from-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      500+
                    </div>
                    <div className="text-slate-300 font-semibold">Patients Traités</div>
                    <div className="text-xs text-slate-500 mt-2">Avec succès en 2024</div>
                  </div>

                  <div className="backdrop-blur-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 mt-12">
                    <div className="text-6xl font-black bg-linear-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                      95%
                    </div>
                    <div className="text-slate-300 font-semibold">Satisfaction</div>
                    <div className="text-xs text-slate-500 mt-2">Taux de recommandation</div>
                  </div>

                  <div className="backdrop-blur-xl bg-linear-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50">
                    <div className="text-6xl font-black bg-linear-to-br from-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">
                      10+
                    </div>
                    <div className="text-slate-300 font-semibold">Années d&apos;Excellence</div>
                    <div className="text-xs text-slate-500 mt-2">D&apos;expérience clinique</div>
                  </div>

                  <div className="backdrop-blur-xl bg-linear-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 mt-12">
                    <div className="text-6xl font-black bg-linear-to-br from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
                      15+
                    </div>
                    <div className="text-slate-300 font-semibold">Certifications</div>
                    <div className="text-xs text-slate-500 mt-2">Spécialisations avancées</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-linear-to-r from-amber-500/20 to-pink-500/20 border border-amber-500/30 rounded-full text-sm font-semibold text-amber-300">
                  Témoignages
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Ce Que Disent Nos Patients
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative backdrop-blur-xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* linear Glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Quote Mark */}
                  <div className="absolute top-6 right-6 text-6xl text-white/5 font-serif">&quot;</div>

                  {/* Stars */}
                  <div className="flex mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed relative z-10">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="w-14 h-14 bg-linear-to-br from-violet-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-sm text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-pink-400">
                        {testimonial.treatment}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NewsLetter />

        {/* Final CTA */}
        <section className="py-32 px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/20 via-pink-500/20 to-cyan-500/20 border border-white/20 rounded-[3rem] p-16 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse" />

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-semibold">Offre Limitée · Première Consultation -20%</span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                  <span className="bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                    Commencez Votre
                  </span>
                  <br />
                  <span className="bg-linear-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h2>

                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Rejoignez des centaines de patients qui ont retrouvé leur mobilité et leur qualité de vie
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative px-10 py-6 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center space-x-2">
                      <span>Réserver Maintenant</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>

                  <button className="px-10 py-6 backdrop-blur-xl bg-white/10 border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                    <span className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>Appeler: +216 12 345 678</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </div>
  );
}