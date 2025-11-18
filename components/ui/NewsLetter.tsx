'use client';
import { Sparkles, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
export default function NewsLetter() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
        setIsSubscribed(true);
        setEmail('');
        // Reset after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <section className="container max-w-7xl mx-auto px-4">
            <div className="mb-16">
                <div className="backdrop-blur-xl bg-linear-to-br from-violet-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full mb-4 border border-white/10">
                                <Sparkles className="w-4 h-4 text-amber-400" />
                                <span className="text-sm font-semibold">Newsletter</span>
                            </div>
                            <h3 className="text-3xl font-black mb-3 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Restez Informé
                            </h3>
                            <p className="text-slate-400">
                                Recevez nos conseils santé et nos dernières actualités
                            </p>
                        </div>
                        {!isSubscribed ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="votre@email.com"
                                        className="flex-1 w-full pl-12 px-6 py-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-violet-500 transition-colors text-white placeholder-slate-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-linear-to-r from-violet-600 to-cyan-600 rounded-xl font-bold hover:from-violet-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-violet-500/50 transform hover:scale-105">
                                    S&apos;abonner
                                </button>
                            </form>
                        ) : (
                            <div className="flex justify-center">
                                <div className="inline-flex items-center space-x-3 bg-emerald-500/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-emerald-500/30">
                                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                                    <div>
                                        <div className="font-bold text-emerald-400">Merci de votre inscription !</div>
                                        <div className="text-sm text-emerald-300">Vous recevrez bientôt nos conseils.</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}