// components/layout/public/Footer.tsx

import Newsletter from "@/components/ui/NewsLetter";
import { ArrowRight, Clock, Facebook, Heart, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function PublicFooter() {
    const currentYear = new Date().getFullYear();

    const services = [
        'Rééducation fonctionnelle',
        'Kinésithérapie sportive',
        'Thérapie manuelle',
        'Rééducation post-opératoire',
        'Traitement douleurs chroniques'
    ];

    const quickLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'À Propos', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <footer className="relative bg-slate-950 text-white overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10" />

            <div className="relative container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="group flex items-center space-x-3 mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-linear-to-br from-violet-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative w-14 h-14 bg-linear-to-br from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                    <Heart className="text-white" size={28} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                    PhysioExpert
                                </h3>
                                <p className="text-sm font-semibold bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                    Excellence en Kinésithérapie
                                </p>
                            </div>
                        </Link>

                        <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
                            Votre partenaire premium en rééducation et kinésithérapie à Tunis.
                            Des soins innovants et personnalisés pour une récupération optimale.
                        </p>

                        <div className="space-y-4">
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="group flex items-start space-x-3 text-slate-400 hover:text-white transition-colors">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-violet-500/20 transition-colors border border-white/10">
                                    <MapPin size={18} className="text-violet-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-slate-500 mb-1">Adresse</div>
                                    <div className="font-medium">123 Avenue Habib Bourguiba, Tunis</div>
                                </div>
                            </a>

                            <a href="tel:+21612345678" className="group flex items-start space-x-3 text-slate-400 hover:text-white transition-colors">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors border border-white/10">
                                    <Phone size={18} className="text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-slate-500 mb-1">Téléphone</div>
                                    <div className="font-medium">+216 12 345 678</div>
                                </div>
                            </a>

                            <a href="mailto:contact@physioexpert.tn" className="group flex items-start space-x-3 text-slate-400 hover:text-white transition-colors">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-pink-500/20 transition-colors border border-white/10">
                                    <Mail size={18} className="text-pink-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-slate-500 mb-1">Email</div>
                                    <div className="font-medium">contact@physioexpert.tn</div>
                                </div>
                            </a>

                            <div className="flex items-start space-x-3 text-slate-400">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                    <Clock size={18} className="text-amber-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-slate-500 mb-1">Horaires</div>
                                    <div className="font-medium">Lun - Ven: 8h00 - 18h00</div>
                                    <div className="text-sm text-slate-500">Sam: 9h00 - 13h00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Navigation Rapide
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="group flex items-center space-x-3 text-slate-400 hover:text-white transition-all"
                                    >
                                        <ArrowRight size={16} className="text-violet-400 group-hover:translate-x-1 transition-transform" />
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Nos Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="/services"
                                        className="group flex items-center space-x-3 text-slate-400 hover:text-white transition-all"
                                    >
                                        <div className="w-1.5 h-1.5 bg-linear-to-r from-cyan-400 to-pink-400 rounded-full group-hover:scale-150 transition-transform" />
                                        <span className="text-sm">{service}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-slate-400 text-sm">
                            © {currentYear} PhysioExpert. Tous droits réservés. Conçu avec{' '}
                            <Heart className="inline w-4 h-4 text-pink-500" /> à Tunis
                        </p>

                        <div className="flex items-center space-x-3">
                            <Link
                                href="#"
                                className="group w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-linear-to-br hover:from-violet-600 hover:to-purple-600 transition-all hover:border-transparent hover:shadow-lg hover:shadow-violet-500/50"
                            >
                                <Facebook size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                            </Link>
                            <Link
                                href="#"
                                className="group w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-linear-to-br hover:from-pink-600 hover:to-rose-600 transition-all hover:border-transparent hover:shadow-lg hover:shadow-pink-500/50"
                            >
                                <Instagram size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                            </Link>
                            <Link
                                href="#"
                                className="group w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-linear-to-br hover:from-cyan-600 hover:to-blue-600 transition-all hover:border-transparent hover:shadow-lg hover:shadow-cyan-500/50"
                            >
                                <Twitter size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}