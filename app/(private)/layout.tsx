'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAuth } from "@/lib/auth-client"
import Sidebar from '@/components/layout/private/Sidebar'
import MobileSidebar from '@/components/layout/private/MobileSidebar'
import Header from '@/components/layout/private/Header'

export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user, logout } = useAuth()
    const pathname = usePathname()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    // User role checks
    const isAdmin = user?.role === 'admin'
    const isPhysiotherapist = user?.role === 'physiotherapist'

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Desktop Sidebar */}
            <Sidebar
                pathname={pathname}
                isAdmin={isAdmin}
                isPhysiotherapist={isPhysiotherapist}
            />

            {/* Mobile Sidebar */}
            <MobileSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                pathname={pathname}
                isAdmin={isAdmin}
                isPhysiotherapist={isPhysiotherapist}
            />

            {/* Main content */}
            <div className="lg:pl-64">
                {/* Header */}
                <Header
                    user={user}
                    logout={logout}
                    setSidebarOpen={setSidebarOpen}
                />

                {/* Main content area */}
                <main className="py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}