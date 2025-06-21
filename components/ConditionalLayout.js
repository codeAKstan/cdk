"use client"

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ConditionalLayout({ children }) {
    const pathname = usePathname()
    // We don't want the main navbar or footer on admin pages or the login page
    const isAdminPage = pathname.startsWith('/admin')
    const isLoginPage = pathname === '/login'

    return (
        <>
            {!isAdminPage && !isLoginPage && <Navbar />}
            {children}
            {!isAdminPage && !isLoginPage && <Footer />}
        </>
    )
}
