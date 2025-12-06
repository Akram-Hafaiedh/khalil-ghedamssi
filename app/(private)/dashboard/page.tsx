// app/(private)/dashboard/page.tsx
'use client'

import { useState } from 'react'
import { useAuth } from "@/lib/auth-client"
import {
    Calendar,
    Clock,
    Users,
    TrendingUp,
    AlertCircle,
    Download,
    Filter,
    MoreVertical,
    CheckCircle,
    XCircle,
    Clock as ClockIcon,
    Calendar as CalendarIcon
} from "lucide-react"

export default function DashboardPage() {
    const { user } = useAuth()
    const [dateRange, setDateRange] = useState('today')

    // Mock data
    const stats = [
        { name: 'Total Appointments', value: '24', change: '+12%', icon: Calendar, color: 'bg-blue-500' },
        { name: 'Upcoming Today', value: '8', change: '+2', icon: Clock, color: 'bg-emerald-500' },
        { name: 'Active Patients', value: '42', change: '+5%', icon: Users, color: 'bg-violet-500' },
        { name: 'Cancellation Rate', value: '8%', change: '-2%', icon: TrendingUp, color: 'bg-amber-500' },
    ]

    const recentAppointments = [
        { id: 1, patient: 'John Doe', time: '09:30 AM', duration: '60min', type: 'Initial Consultation', status: 'confirmed' },
        { id: 2, patient: 'Jane Smith', time: '11:00 AM', duration: '30min', type: 'Follow-up', status: 'pending' },
        { id: 3, patient: 'Robert Johnson', time: '02:15 PM', duration: '45min', type: 'Rehabilitation', status: 'confirmed' },
        { id: 4, patient: 'Sarah Williams', time: '04:00 PM', duration: '60min', type: 'Therapeutic Massage', status: 'cancelled' },
        { id: 5, patient: 'Michael Brown', time: '05:30 PM', duration: '30min', type: 'Follow-up', status: 'confirmed' },
    ]

    const quickActions = [
        { title: 'Schedule Appointment', description: 'Book a new appointment', icon: CalendarIcon, href: '/appointments/new' },
        { title: 'View Calendar', description: 'See all scheduled sessions', icon: Calendar, href: '/appointments' },
        { title: 'Patient Records', description: 'Access patient history', icon: Users, href: '/patients' },
        { title: 'Generate Report', description: 'Create activity report', icon: TrendingUp, href: '/reports' },
    ]

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'confirmed':
                return <CheckCircle className="h-5 w-5 text-emerald-500" />
            case 'pending':
                return <ClockIcon className="h-5 w-5 text-amber-500" />
            case 'cancelled':
                return <XCircle className="h-5 w-5 text-red-500" />
            default:
                return <AlertCircle className="h-5 w-5 text-gray-500" />
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed':
                return 'bg-emerald-100 text-emerald-800'
            case 'pending':
                return 'bg-amber-100 text-amber-800'
            case 'cancelled':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <div className="space-y-8">
            {/* Welcome header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome back, {user?.name?.split(' ')[0]} 👋
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Here's what's happening with your practice today.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm focus:border-violet-500 focus:ring-violet-500"
                    >
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="quarter">This Quarter</option>
                    </select>
                    <button className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">
                        <Download className="h-4 w-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.name} className="bg-white rounded-xl border border-gray-200 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                    <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                                        {stat.change}
                                    </p>
                                </div>
                                <div className={`${stat.color} p-3 rounded-lg`}>
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Appointments */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">Recent Appointments</h2>
                                <div className="flex items-center gap-3">
                                    <button className="p-2 text-gray-400 hover:text-gray-600">
                                        <Filter className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-gray-600">
                                        <MoreVertical className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Patient
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Time & Duration
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {recentAppointments.map((appointment) => (
                                        <tr key={appointment.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-medium">
                                                        {appointment.patient.charAt(0)}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{appointment.patient}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{appointment.time}</div>
                                                <div className="text-sm text-gray-500">{appointment.duration}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {appointment.type}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    {getStatusIcon(appointment.status)}
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                                                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-violet-600 hover:text-violet-900 mr-4">
                                                    View
                                                </button>
                                                <button className="text-gray-600 hover:text-gray-900">
                                                    Reschedule
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-200">
                            <a href="/appointments" className="text-sm font-medium text-violet-600 hover:text-violet-700">
                                View all appointments →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Actions & Availability */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            {quickActions.map((action) => {
                                const Icon = action.icon
                                return (
                                    <a
                                        key={action.title}
                                        href={action.href}
                                        className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors group"
                                    >
                                        <div className="p-2 rounded-lg bg-violet-100 group-hover:bg-violet-200">
                                            <Icon className="h-5 w-5 text-violet-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900">{action.title}</h3>
                                            <p className="text-sm text-gray-600">{action.description}</p>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Today's Availability */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Availability</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-900">Morning Session</p>
                                    <p className="text-sm text-gray-600">09:00 AM - 12:00 PM</p>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                                    4 slots left
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-900">Afternoon Session</p>
                                    <p className="text-sm text-gray-600">02:00 PM - 06:00 PM</p>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                                    2 slots left
                                </span>
                            </div>
                        </div>
                        <button className="w-full mt-6 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 text-sm transition-colors">
                            Manage Availability
                        </button>
                    </div>

                    {/* Upcoming Holidays/Closures */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Closures</h2>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                                <div className="p-2 bg-red-100 rounded-lg">
                                    <Calendar className="h-5 w-5 text-red-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-red-900">Public Holiday</p>
                                    <p className="text-sm text-red-700">December 25, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                                <div className="p-2 bg-amber-100 rounded-lg">
                                    <Clock className="h-5 w-5 text-amber-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-amber-900">Reduced Hours</p>
                                    <p className="text-sm text-amber-700">December 24, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity Timeline */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <Users className="h-5 w-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-900">
                                <span className="font-medium">John Doe</span> booked a new appointment for <span className="font-medium">Initial Consultation</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-1">10 minutes ago</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Confirmed
                        </span>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                                <AlertCircle className="h-5 w-5 text-amber-600" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-900">
                                Appointment with <span className="font-medium">Sarah Williams</span> was cancelled
                            </p>
                            <p className="text-sm text-gray-500 mt-1">1 hour ago</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Cancelled
                        </span>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                <CheckCircle className="h-5 w-5 text-emerald-600" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-900">
                                Appointment with <span className="font-medium">Michael Brown</span> was marked as completed
                            </p>
                            <p className="text-sm text-gray-500 mt-1">2 hours ago</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Completed
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}