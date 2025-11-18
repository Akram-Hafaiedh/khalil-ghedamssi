// app/blog/posts/page.tsx
'use client';

import { Calendar, Clock, User, ArrowRight, Search, Tag, Eye, Filter, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';

// Extended mock data for more posts
const allPosts = [
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
    },
    {
        id: 5,
        title: "10 Exercices pour Prévenir les Douleurs Lombales",
        excerpt: "Des exercices simples et efficaces à faire chez soi pour maintenir une colonne vertébrale en bonne santé.",
        content: "Contenu détaillé de l'article...",
        author: "Dr. Mohamed Ali",
        date: "2023-12-25",
        readTime: "4 min",
        category: "Prévention",
        tags: ["Lombes", "Exercices", "Prévention"],
        image: "/api/placeholder/400/250",
        views: 471
    },
    {
        id: 6,
        title: "La Rééducation Respiratoire : Techniques et Bienfaits",
        excerpt: "Comment améliorer la fonction respiratoire grâce à des techniques spécifiques de kinésithérapie.",
        content: "Contenu détaillé...",
        author: "Dr. Sophie Martin",
        date: "2023-12-20",
        readTime: "6 min",
        category: "Respiratoire",
        tags: ["Respiration", "Poumons", "Rééducation"],
        image: "/api/placeholder/400/250",
        views: 534
    }
];

const categories = ["Tous", "Rééducation", "Prévention", "Neurologie", "Sport", "Posturologie", "Respiratoire", "Thérapie Manuelle"];

export default function PostsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [sortBy, setSortBy] = useState('newest');

    const filteredPosts = useMemo(() => {
        let filtered = allPosts;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Filter by category
        if (selectedCategory !== 'Tous') {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        // Sort posts
        if (sortBy === 'newest') {
            filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else if (sortBy === 'views') {
            filtered.sort((a, b) => b.views - a.views);
        }

        return filtered;
    }, [searchTerm, selectedCategory, sortBy]);

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('Tous');
        setSortBy('newest');
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-violet-950 via-slate-950 to-cyan-950" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            </div>

            <div className="relative z-10 pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Tous les Articles
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Explorez notre collection complète d&apos;articles sur la kinésithérapie et la rééducation
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {/* Search Input */}
                            <div className="lg:col-span-2">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Rechercher des articles..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div>
                                <select
                                    title="Filtrer par categorie"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category} className="bg-slate-900">
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort Filter */}
                            <div>
                                <select
                                    title="Trier par"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-pink-500 transition-colors"
                                >
                                    <option value="newest" className="bg-slate-900">Plus récent</option>
                                    <option value="views" className="bg-slate-900">Plus vus</option>
                                </select>
                            </div>
                        </div>

                        {/* Active Filters */}
                        {(searchTerm || selectedCategory !== 'Tous') && (
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                                <div className="flex items-center space-x-2 text-sm text-slate-400">
                                    <Filter className="w-4 h-4" />
                                    <span>Filtres actifs:</span>
                                    {searchTerm && (
                                        <span className="px-2 py-1 bg-violet-500/20 rounded-full text-violet-300">
                                            &quot;{searchTerm}&quot;
                                        </span>
                                    )}
                                    {selectedCategory !== 'Tous' && (
                                        <span className="px-2 py-1 bg-cyan-500/20 rounded-full text-cyan-300">
                                            {selectedCategory}
                                        </span>
                                    )}
                                </div>
                                <button
                                    onClick={clearFilters}
                                    className="flex items-center space-x-1 text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                    <span>Effacer</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="mb-8">
                        <p className="text-slate-400">
                            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} trouvé{filteredPosts.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/posts/${post.id}`}
                                className="group relative backdrop-blur-xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Meta Information */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-xs text-slate-500">
                                        <div className="flex items-center space-x-1">
                                            <User className="w-3 h-3" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Eye className="w-3 h-3" />
                                            <span>{post.views}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-slate-500">
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

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 mt-4">
                                    {post.tags.slice(0, 2).map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-white/5 rounded-full text-xs text-slate-400"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </Link>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-16">
                            <Search className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                            <h3 className="text-2xl font-bold text-white mb-2">Aucun article trouvé</h3>
                            <p className="text-slate-400 mb-6">
                                Essayez de modifier vos critères de recherche
                            </p>
                            <button
                                onClick={clearFilters}
                                className="px-6 py-3 bg-linear-to-r from-violet-600 to-cyan-600 rounded-xl font-semibold hover:shadow-violet-500/50 transition-all"
                            >
                                Effacer les filtres
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}