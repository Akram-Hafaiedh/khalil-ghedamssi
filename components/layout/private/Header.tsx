'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Bell, Search, ChevronDown, LogOut, MessageSquare } from "lucide-react"

type NavigationItem =
    | { type: 'link'; name: string; href: string; destructive?: boolean }
    | { type: 'action'; name: string; action: () => void; destructive?: boolean }
    | { type: 'divider' }

interface HeaderProps {
    user: User
    logout: () => void
    setSidebarOpen: (open: boolean) => void
}

export default function Header({ user, logout, setSidebarOpen }: HeaderProps) {
    const [userDropdownOpen, setUserDropdownOpen] = useState(false)
    const [notificationsOpen, setNotificationsOpen] = useState(false)

    const userNavigation: NavigationItem[] = [
        { type: 'link', name: 'Your Profile', href: '/profile' },
        { type: 'link', name: 'Settings', href: '/account/settings' },
        { type: 'link', name: 'Security', href: '/account/security' },
        { type: 'link', name: 'Notifications', href: '/notifications' },
        { type: 'divider' },
        { type: 'action', name: 'Sign out', action: logout, destructive: true },
    ]

    // Mock notifications
    const notifications = [
        { id: 1, title: 'New appointment booked', description: 'John Doe booked a physiotherapy session', time: '10 min ago', read: false },
        { id: 2, title: 'Appointment reminder', description: 'Your appointment starts in 2 hours', time: '1 hour ago', read: true },
        { id: 3, title: 'Message received', description: 'New message from Dr. Smith', time: '2 hours ago', read: false },
    ]

    const unreadNotifications = notifications.filter(n => !n.read).length

    return (
        <div className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-4 sm:px-6 lg:px-8">
            {/* Mobile menu button */}
            <button
                type="button"
                className="lg:hidden -ml-2 p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Search */}
            <div className="flex-1">
                <div className="max-w-lg">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="search"
                            placeholder="Search appointments, patients, or settings..."
                            className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2">
                {/* Notifications */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setNotificationsOpen(!notificationsOpen)
                            setUserDropdownOpen(false)
                        }}
                        className="relative p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-100"
                    >
                        <Bell className="h-6 w-6" />
                        {unreadNotifications > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                                {unreadNotifications}
                            </span>
                        )}
                    </button>

                    {/* Notifications dropdown */}
                    {notificationsOpen && (
                        <div className="absolute right-0 mt-2 w-80 origin-top-right rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                            <div className="px-4 py-2 border-b border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                                {notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className={`px-4 py-3 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                                    >
                                        <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                        <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                                        <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-100 px-4 py-2">
                                <Link
                                    href="/notifications"
                                    className="text-sm font-medium text-violet-600 hover:text-violet-700"
                                    onClick={() => setNotificationsOpen(false)}
                                >
                                    View all notifications
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* Messages */}
                <button className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-100 relative">
                    <MessageSquare className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white">
                        3
                    </span>
                </button>

                {/* User dropdown */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setUserDropdownOpen(!userDropdownOpen)
                            setNotificationsOpen(false)
                        }}
                        className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-100"
                    >
                        <div className="hidden sm:flex flex-col items-end">
                            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{user?.role || 'patient'}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center overflow-hidden">
                            {user?.image ? (
                                <Image
                                    width={32}
                                    height={32}
                                    src={user.image}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-white text-sm font-medium">
                                    {user?.name?.charAt(0).toUpperCase()}
                                </span>
                            )}
                        </div>
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                    </button>

                    {/* User dropdown menu */}
                    {userDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                                <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                            </div>
                            <div className="py-2">
                                {userNavigation.map((item, index) => {
                                    if ('type' in item && item.type === 'divider') {
                                        return <div key="divider" className="h-px bg-gray-100 my-2" />
                                    }

                                    if ('href' in item) {
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setUserDropdownOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </Link>
                                        )
                                    }

                                    // It must be an action item
                                    return (
                                        <button
                                            key={item.name}
                                            onClick={() => {
                                                item.action()
                                                setUserDropdownOpen(false)
                                            }}
                                            className={`flex w-full items-center gap-3 px-4 py-2 text-sm ${item.destructive
                                                ? 'text-red-600 hover:bg-red-50'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <LogOut className="h-4 w-4" />
                                            {item.name}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}