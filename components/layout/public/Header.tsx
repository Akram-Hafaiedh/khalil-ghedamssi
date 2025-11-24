// components/layout/public/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Menu, X, Calendar, Heart, LogIn, UserPlus } from 'lucide-react';

export default function PublicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À Propos', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'backdrop-blur-xl bg-slate-950/80 border-b border-white/10 shadow-2xl'
        : 'bg-transparent'
      }`}>
      {/* Top Bar - Only show when not scrolled */}
      <div className={`transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
        }`}>
        <div className="backdrop-blur-xl bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border-b border-white/10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
              <div className="flex flex-wrap items-center gap-6">
                <a href="tel:+21612345678" className="group flex items-center space-x-2 hover:text-violet-400 transition-colors">
                  <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center group-hover:bg-violet-500/30 transition-colors">
                    <Phone size={14} className="text-violet-400" />
                  </div>
                  <span className="font-medium text-slate-300">+216 12 345 678</span>
                </a>
                <a href="mailto:contact@physioexpert.tn" className="group flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <Mail size={14} className="text-cyan-400" />
                  </div>
                  <span className="font-medium text-slate-300">contact@physioexpert.tn</span>
                </a>
              </div>

              {/* Modern Auth Buttons in Top Bar */}
              <div className="flex items-center gap-3">
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                  <MapPin size={14} className="text-pink-400" />
                  <span className="text-xs font-semibold text-slate-300">Tunis, Tunisia</span>
                </div>

                <div className="h-4 w-px bg-white/20"></div>

                {/* Login Button - Subtle Glass Style */}
                <Link
                  href="/login"
                  className="group relative flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-400/50 transition-all duration-300"
                >
                  <LogIn size={14} className="text-violet-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    Connexion
                  </span>
                </Link>

                {/* Register Button - Gradient Style */}
                <Link
                  href="/register"
                  className="group relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600/80 to-cyan-600/80 hover:from-violet-600 hover:to-cyan-600 border border-violet-400/30 shadow-lg hover:shadow-violet-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <UserPlus size={14} className="relative z-10 text-white group-hover:scale-110 transition-transform" />
                  <span className="relative z-10 text-sm font-bold text-white">
                    S'inscrire
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Heart className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                PhysioExpert
              </h1>
              <p className="text-xs font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence en Kinésithérapie
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-slate-300 hover:text-white font-medium transition-colors group px-3 py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Auth Buttons - Desktop Only (when scrolled) */}
            {isScrolled && (
              <>
                <Link
                  href="/login"
                  className="group relative flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-400/50 transition-all duration-300"
                >
                  <LogIn size={16} className="text-violet-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    Connexion
                  </span>
                </Link>

                <Link
                  href="/register"
                  className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600/80 to-cyan-600/80 hover:from-violet-600 hover:to-cyan-600 border border-violet-400/30 shadow-lg hover:shadow-violet-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <UserPlus size={16} className="relative z-10 text-white group-hover:scale-110 transition-transform" />
                  <span className="relative z-10 text-sm font-bold text-white">
                    S'inscrire
                  </span>
                </Link>
              </>
            )}

            <Link
              href="/booking"
              className="group relative px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-bold shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden ml-2"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Calendar size={18} />
                <span>Rendez-vous</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Auth Buttons in Mobile Menu */}
              <div className="border-t border-white/10 pt-4 mt-2 space-y-3">
                <Link
                  href="/login"
                  className="group flex items-center justify-center gap-2 py-3 px-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-400/50 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn size={18} className="text-violet-400" />
                  <span className="font-semibold text-slate-300 group-hover:text-white">
                    Se connecter
                  </span>
                </Link>

                <Link
                  href="/register"
                  className="group relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 border border-violet-400/30 shadow-lg transition-all overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <UserPlus size={18} className="relative z-10 text-white" />
                  <span className="relative z-10 font-bold text-white">
                    S'inscrire
                  </span>
                </Link>
              </div>

              <Link
                href="/booking"
                className="bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-6 py-4 rounded-xl hover:from-violet-700 hover:to-cyan-700 transition-all text-center font-bold shadow-lg mt-4 flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar size={20} />
                <span>Prendre Rendez-vous</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}