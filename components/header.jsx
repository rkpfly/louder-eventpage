import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="z-50">
          <h1 className="text-2xl font-bold tracking-wider">TAMASHA</h1>
        </Link>

        <Button variant="ghost" size="sm" onClick={toggleMenu} className="rounded-full bg-muted px-6 py-2 z-50">
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <>
              <span className="mr-2">Menu</span>
              <Menu className="h-5 w-5" />
            </>
          )}
        </Button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white transition-transform duration-500 ease-in-out flex flex-col justify-center items-center",
          isMenuOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <nav className="flex flex-col items-center space-y-8 text-2xl font-bold">
          <Link to="/events" className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            EVENTS
          </Link>
          <Link
            to="/vip-tables"
            className="hover:text-gray-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            VIP TABLES
          </Link>
          <Link
            to="/functions"
            className="hover:text-gray-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FUNCTIONS
          </Link>
          <Link to="/venue" className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            VENUE
          </Link>
          <Link to="/gallery" className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            GALLERY
          </Link>
          <Link to="/offers" className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            OFFERS
          </Link>
        </nav>
      </div>
    </header>
  )
}