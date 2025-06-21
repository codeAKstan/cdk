"use client"

import Link from "next/link"
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation"

export default function AdminNavbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Dashboard", path: "/admin/dashboard" },
        { name: "Add Project", path: "/admin/add-project" },
    ]

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link href="/admin/dashboard" className="text-xl font-bold text-blue-500">
                        Admin Panel
                    </Link>
                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                             <Link key={link.path} href={link.path} className={`hidden md:block text-gray-700 hover:text-blue-500 ${pathname === link.path ? "font-bold" : ""}`}>
                                {link.name}
                            </Link>
                        ))}
                        <button onClick={() => signOut({ callbackUrl: '/' })} className="btn-secondary">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
