// app/blog/page.tsx
'use client';

import { Calendar, Clock, User, ArrowRight, Search, Tag, Sparkles, BookOpen, TrendingUp, Eye } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for blog posts
const blogPosts = [
    {
        id: 1,
        title: "Les Bienfaits de la Kinésithérapie Post-Opératoire",
        excerpt: "Découvrez comment la kinésithérapie accélère la récupération après une intervention chirurgicale et quelles techniques sont les plus efficaces.",
        content: "Contenu détaillé de l'article...",
        author: "Dr. Mohamed Ali",
        date: "2024-01-15",
        readTime: "5 min",
        category: "Rééducation",
        tags: ["Post-opératoire", "Récupération", "Chirurgie"],
        image: "/api/placeholder/400/250",
        featured: true,
        views: 1247
    },
    {
        id: 2,
        title: "10 Exercices pour Prévenir les Douleurs Dorsales",
        excerpt: "Des exercices simples et efficaces à faire chez soi pour maintenir une colonne vertébrale en bonne santé.",
        content: "Contenu détaillé de l'article...",
        author: "Dr. Sophie Martin",
        date: "2024-01-12",
        readTime: "4 min",
        category: "Prévention",
        tags: ["Dos", "Exercices", "Prévention"],
        image: "/api/placeholder/400/250",
        featured: true,
        views: 893
    },
    {
        id: 3,
        title: "Comprendre la Rééducation Neurologique",
        excerpt: "Tout savoir sur les techniques modernes de rééducation pour les patients atteints de troubles neurologiques.",
        content: "Contenu détaillé de l'article...",
        author: "Dr. Mohamed Ali",
        date: "2024-01-08",
        readTime: "6 min",
        category: "Neurologie",
        tags: ["Neurologie", "AVC", "Rééducation"],
        image: "/api/placeholder/400/250",
        featured: false,
        views: 756
    },
    {
        id: 4,
        title: "L'Importance de la Posturologie en Kinésithérapie",
        excerpt: "Comment l'analyse posturale peut résoudre des douleurs chroniques et améliorer la qualité de vie.",
        content: "Contenu détaillé de l'article...",
        author: "Dr. Sophie Martin",
        date: "2024-01-05",
        readTime: "5 min",
        category: "Posturologie",
        tags: ["Posture", "Analyse", "Douleurs chroniques"],
        image: "/api/placeholder/400/250",
        featured: false,
        views: 642
    }
];

const categories = [
    { name: "Rééducation", count: 12, gradient: "from-violet-500 to-purple-600" },
    { name: "Prévention", count: 8, gradient: "from-cyan-500 to-blue-600" },
    { name: "Neurologie", count: 5, gradient: "from-pink-500 to-rose-600" },
    { name: "Sport", count: 7, gradient: "from-emerald-500 to-green-600" },
    { name: "Posturologie", count: 4, gradient: "from-amber-500 to-orange-600" },
    { name: "Thérapie Manuelle", count: 6, gradient: "from-indigo-500 to-blue-600" }
];

export default function BlogHomePage() {
    const featuredPosts = blogPosts.filter(post => post.featured);
    const recentPosts = blogPosts.slice(0, 4);

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
                            <BookOpen className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-semibold bg-linear-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
                                Blog Médical · Conseils Experts
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            <span className="block bg-linear-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                Notre Blog
                            </span>
                            <span className="block mt-2 bg-linear-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                Kinésithérapie
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300">
                            Découvrez nos articles experts, conseils pratiques et dernières actualités
                            en <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400 font-semibold">kinésithérapie et rééducation</span>.
                        </p>

                        {/* Search CTA */}
                        <Link
                            href="/blog/posts"
                            className="inline-flex items-center space-x-3 px-8 py-4 bg-linear-to-r from-violet-600 to-cyan-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105"
                        >
                            <Search className="w-5 h-5" />
                            <span>Explorer Tous les Articles</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

                {/* Featured Posts */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-linear-to-r from-amber-500/20 to-pink-500/20 border border-amber-500/30 rounded-full text-sm font-semibold text-amber-300">
                                    Articles à la Une
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Contenu Sélectionné
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                            {featuredPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/posts/${post.id}`}
                                    className="group relative backdrop-blur-xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                                >
                                    {/* Featured Badge */}
                                    <div className="absolute top-6 right-6 z-10">
                                        <span className="px-3 py-1 bg-linear-to-r from-amber-500 to-orange-600 rounded-full text-xs font-bold text-white shadow-lg">
                                            À la Une
                                        </span>
                                    </div>

                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-linear-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all">
                                                {post.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-slate-500">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <User className="w-4 h-4" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Eye className="w-4 h-4" />
                                            <span>{post.views} vues</span>
                                        </div>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Par Catégorie
                            </h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Explorez nos articles par domaine de spécialité
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categories.map((category, index) => (
                                <Link
                                    key={index}
                                    href={`/blog/posts?category=${category.name}`}
                                    className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    <div className={`w-14 h-14 bg-linear-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <Tag className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                                    <p className="text-slate-400 text-sm">{category.count} articles</p>

                                    <div className="absolute bottom-6 right-6">
                                        <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recent Posts */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm font-semibold text-cyan-300">
                                    Publications Récentes
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Derniers Articles
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {recentPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/posts/${post.id}`}
                                    className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-16 h-16 bg-linear-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <BookOpen className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-violet-400 group-hover:to-cyan-400">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center space-x-4 text-xs text-slate-500">
                                                <div className="flex items-center space-x-1">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Clock className="w-3 h-3" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-6 right-6">
                                        <span className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">
                                            {post.category}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="text-center mt-12">
                            <Link
                                href="/blog/posts"
                                className="inline-flex items-center space-x-2 px-8 py-4 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                            >
                                <span>Voir Tous les Articles</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}