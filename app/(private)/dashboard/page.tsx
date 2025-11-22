// app/dashboard/page.tsx
'use client'

import { useAuth } from "@/lib/auth-client"
import { LogOut, User, Mail, Calendar, Shield } from "lucide-react";

export default function DashboardPage() {
    const { user, logout, isLoading } = useAuth()

    if (isLoading) {
        return <div className="p-8">Loading...</div>;
    }

    if (!user) {
        return <div className="p-8">Unauthorized</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Dashboard
                    </h1>
                    <button
                        onClick={logout}
                        className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>

                {/* User Card */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">User Profile</h2>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center">
                                {user?.image ? (
                                    <img
                                        src={user.image}
                                        alt={user.name || "User"}
                                        className="w-16 h-16 rounded-full"
                                    />
                                ) : (
                                    <User className="w-8 h-8 text-white" />
                                )}
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm">Bienvenue</p>
                                <p className="text-2xl font-bold text-white">{user?.name}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-violet-400 mt-1" />
                                <div>
                                    <p className="text-slate-400 text-sm">Email</p>
                                    <p className="text-white font-medium">{user?.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Shield className="w-5 h-5 text-cyan-400 mt-1" />
                                <div>
                                    <p className="text-slate-400 text-sm">Authentication</p>
                                    <p className="text-white font-medium capitalize">
                                        {user?.provider || "Credentials"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6">
                        <p className="text-slate-400 text-sm mb-2">Account Status</p>
                        <p className="text-2xl font-bold text-emerald-400">Active</p>
                    </div>
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6">
                        <p className="text-slate-400 text-sm mb-2">Login Provider</p>
                        <p className="text-2xl font-bold text-violet-400 capitalize">
                            {user?.provider || "Email"}
                        </p>
                    </div>
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6">
                        <p className="text-slate-400 text-sm mb-2">Security</p>
                        <p className="text-2xl font-bold text-cyan-400">Verified</p>
                    </div>
                </div>
            </div>
        </div>
    );
}