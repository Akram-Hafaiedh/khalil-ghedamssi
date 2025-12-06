'use client'

import Link from 'next/link'
import { X, Calendar, Settings, Home, Users, HelpCircle, Shield, BarChart, FileText } from "lucide-react"

interface MobileSidebarProps {
    sidebarOpen: boolean
    setSidebarOpen: (open: boolean) => void
    pathname: string
    isAdmin: boolean
    isPhysiotherapist: boolean
}

export default function MobileSidebar({
    sidebarOpen,
    setSidebarOpen,
    pathname,
    isAdmin,
    isPhysiotherapist
}: MobileSidebarProps) {
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
        <>
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}>
                    <div className="fixed inset-0 bg-gray-600/75" aria-hidden="true" />
                </div>
            )}

            {/* Mobile sidebar */}
            <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
                <div className="relative flex h-full w-64 flex-col bg-white shadow-xl">
                    {/* Close button */}
                    <div className="absolute top-0 right-0 -mr-12 pt-4">
                        <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <X className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    {/* Mobile sidebar content */}
                    <div className="h-16 flex items-center px-6 border-b border-gray-200">
                        <Link href="/dashboard" className="flex items-center space-x-3" onClick={() => setSidebarOpen(false)}>
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center">
                                <span className="text-white font-bold">K</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Kinésithérapeute
                            </span>
                        </Link>
                    </div>

                    <nav className="flex-1 overflow-y-auto py-6 px-4">
                        <div className="space-y-1">
                            {navigation.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setSidebarOpen(false)}
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
                    </nav>
                </div>
            </div>
        </>
    )
}