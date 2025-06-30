import { Link, useLocation } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils" // assuming you use className utils from ShadCN

const navLinks = [
  { label: "Events Dashboard", to: "/admin/dashboard" },
  { label: "Add Event", to: "/admin/add-event" },
  { label: "Add Another Admin", to: "/admin/add-admin" },
  { label : "add Offer", to: "/admin/add-offer" },

]

export default function AdminSidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-black text-white min-h-screen px-5 py-6 border-r border-gray-800 shadow-md">
      <div className="text-3xl font-extrabold tracking-tight mb-8 text-white">
        Admin Panel
      </div>

      <nav className="space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={cn(
              "block px-4 py-2 rounded-md transition-all text-sm font-medium",
              location.pathname === link.to
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Separator className="my-6 bg-gray-700" />

      <div className="pt-4">
        &copy; Tamasha {new Date().getFullYear()}

      </div>
    </aside>
  )
}
