// app/blog/posts/[id]/page.tsx
'use client';

import { Calendar, Clock, User, ArrowLeft, Share2, Eye, Bookmark, Tag } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock data - in real app, you'd fetch this based on the ID
const getPostById = (id: string) => {
    return {
        id: 1,
        title: "Les Bienfaits de la Kinésithérapie Post-Opératoire",
        content: `
            <h2>Introduction</h2>
            <p>La kinésithérapie post-opératoire joue un rôle crucial dans le processus de récupération après une intervention chirurgicale. Elle permet non seulement d'accélérer la guérison, mais aussi de prévenir les complications et d'optimiser les résultats fonctionnels.</p>
            
            <h2>Les Objectifs de la Rééducation Post-Opératoire</h2>
            <p>Les principaux objectifs incluent la réduction de la douleur, la récupération de la mobilité articulaire, le renforcement musculaire et la rééducation à la marche.</p>
            
            <h2>Techniques Utilisées</h2>
            <p>Nous utilisons diverses techniques adaptées à chaque patient : mobilisations passives et actives, renforcement musculaire progressif, physiothérapie, et éducation thérapeutique.</p>
            
            <h2>Conclusion</h2>
            <p>Un programme de kinésithérapie bien structuré permet une récupération optimale et un retour rapide aux activités quotidiennes.</p>
        `,
        author: "Dr. Mohamed Ali",
        date: "2024-01-15",
        readTime: "5 min",
        category: "Rééducation",
        tags: ["Post-opératoire", "Récupération", "Chirurgie", "Rééducation", "Mobilité"],
        image: "/api/placeholder/800/400",
        views: 1247
    };
};

export default function SinglePostPage() {
    const params = useParams();
    const post = getPostById(params.id as string);

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-violet-950 via-slate-950 to-cyan-950" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            </div>

            <div className="relative z-10 mt-28">
                {/* Navigation */}
                <nav className="pt-8 px-4">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog/posts"
                            className="inline-flex items-center space-x-2 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Retour aux articles</span>
                        </Link>
                    </div>
                </nav>

                {/* Article Header */}
                <article className="py-12 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="backdrop-blur-xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12 mb-8">
                            {/* Category */}
                            <div className="inline-block mb-6">
                                <span className="px-3 py-1 bg-linear-to-r from-violet-500 to-purple-600 rounded-full text-sm font-semibold text-white">
                                    {post.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                {post.title}
                            </h1>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
                                <div className="flex items-center space-x-2">
                                    <User className="w-5 h-5" />
                                    <span className="font-medium">{post.author}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-5 h-5" />
                                    <span>{post.readTime} de lecture</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Eye className="w-5 h-5" />
                                    <span>{post.views} vues</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                                    <Share2 className="w-4 h-4" />
                                    <span>Partager</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                                    <Bookmark className="w-4 h-4" />
                                    <span>Sauvegarder</span>
                                </button>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="backdrop-blur-xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12">
                            <div
                                className="prose prose-invert prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Tag className="w-5 h-5 text-slate-400" />
                                    <span className="text-slate-400 font-medium">Mots-clés:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-2 bg-white/5 rounded-xl text-slate-300 hover:bg-white/10 transition-colors cursor-pointer"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Related Posts CTA */}
                        <div className="text-center mt-12">
                            <Link
                                href="/blog/posts"
                                className="inline-flex items-center space-x-3 px-8 py-4 bg-linear-to-r from-violet-600 to-cyan-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Découvrir Plus d&apos;Articles</span>
                                <ArrowLeft className="w-5 h-5 rotate-180" />
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}