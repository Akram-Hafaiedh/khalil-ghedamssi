'use client'

import Link from 'next/link'
import {
    Calendar,
    Settings,
    Home,
    Users,
    HelpCircle,
    Shield,
    BarChart,
    FileText
} from "lucide-react"

interface SidebarProps {
    pathname: string
    isAdmin: boolean
    isPhysiotherapist: boolean
}

export default function Sidebar({ pathname, isAdmin, isPhysiotherapist }: SidebarProps) {
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: Home, current: pathname === '/dashboard' },
        { name: 'Appointments', href: '/appointments', icon: Calendar, current: pathname.startsWith('/appointments') },
        { name: 'Settings', href: '/account/settings', icon: Settings, current: pathname.startsWith('/account') },
        ...(isAdmin || isPhysiotherapist ? [
            { name: 'Patients', href: '/patients', icon: Users, current: pathname.startsWith('/patients') },
            { name: 'Reports', href: '/reports', icon: BarChart, current: pathname.startsWith('/reports') },
        ] : []),
        ...(isAdmin ? [
            { name: 'Admin Panel', href: '/admin', icon: Shield, current: pathname.startsWith('/admin') },
            { name: 'Blog', href: '/admin/blog', icon: FileText, current: pathname.startsWith('/admin/blog') },
        ] : []),
        { name: 'Help & Support', href: '/support', icon: HelpCircle, current: pathname.startsWith('/support') },
    ]

    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-white">
            {/* Sidebar header */}
            <div className="flex h-16 shrink-0 items-center px-6 border-b border-gray-200">
                <Link href="/dashboard" className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center">
                        <span className="text-white font-bold">K</span>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        Kinésithérapeute
                    </span>
                </Link>
            </div>

            {/* Sidebar navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-4">
                <div className="space-y-1">
                    {navigation.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current
                                        ? 'bg-violet-50 text-violet-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        )
                    })}
                </div>

                {/* Quick stats for admin/physio */}
                {(isAdmin || isPhysiotherapist) && (
                    <div className="mt-8 px-4">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                            Today's Overview
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-blue-50 rounded-lg p-3">
                                <p className="text-sm text-blue-700 font-medium">Appointments</p>
                                <p className="text-2xl font-bold text-blue-900">8</p>
                                <p className="text-xs text-blue-600">Scheduled today</p>
                            </div>
                            <div className="bg-emerald-50 rounded-lg p-3">
                                <p className="text-sm text-emerald-700 font-medium">Patients</p>
                                <p className="text-2xl font-bold text-emerald-900">24</p>
                                <p className="text-xs text-emerald-600">Active this week</p>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}