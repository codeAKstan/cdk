"use client"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Dashboard() {
    const { data: session } = useSession()

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <p className="mb-8">Welcome, {session?.user?.email}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <Link href="/admin/add-project" className="card hover:bg-blue-50 transition-colors">
                    <h2 className="text-xl font-bold mb-2">Add New Project</h2>
                    <p>Add a new project to your portfolio.</p>
                </Link>
                {/* Add more links to other admin functionalities here */}
            </div>
        </div>
    )
}
