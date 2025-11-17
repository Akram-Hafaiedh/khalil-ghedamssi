// components/layout/public/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Menu, X, Calendar, Heart } from 'lucide-react';

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
        <div className="backdrop-blur-xl bg-linear-to-r from-violet-600/20 to-cyan-600/20 border-b border-white/10">
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
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                <MapPin size={14} className="text-pink-400" />
                <span className="text-xs font-semibold text-slate-300">Tunis, Tunisia</span>
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
              <div className="absolute inset-0 bg-linear-to-br from-violet-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-12 h-12 bg-linear-to-br from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Heart className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                PhysioExpert
              </h1>
              <p className="text-xs font-semibold bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence en Kinésithérapie
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-slate-300 hover:text-white font-medium transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="/contact"
              className="group relative px-6 py-3 bg-linear-to-r from-violet-600 to-cyan-600 rounded-xl font-bold shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Calendar size={18} />
                <span>Rendez-vous</span>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
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
              <a
                href="/contact"
                className="bg-linear-to-r from-violet-600 to-cyan-600 text-white px-6 py-4 rounded-xl hover:from-violet-700 hover:to-cyan-700 transition-all text-center font-bold shadow-lg mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Prendre Rendez-vous
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}