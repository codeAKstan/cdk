import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import AdminNavbar from "@/components/AdminNavbar"

export default async function AdminLayout({ children }) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminNavbar />
            <main className="p-4 sm:p-6 lg:p-8">
                {children}
            </main>
        </div>
    )
}
