import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-4">SOCIAL</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://tiktok.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8h.01" />
                  <path d="M11 16.01V8.5c0-1.5 1.5-2.5 3-2.5h4" />
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">X</span>
              </a>
              <a href="https://facebook.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://pinterest.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
                  <path d="M12 4v4" />
                  <path d="M12 16v4" />
                  <path d="M8.5 8.5l3-3" />
                  <path d="M12.5 12.5l3 3" />
                </svg>
                <span className="sr-only">Pinterest</span>
              </a>
              <a href="https://snapchat.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2c-3 0-5 2-5 5v3c0 1-1 2-2 2 0 0 0 1.5 2 2 0 0 0 1 1 1 0 0 0 1 2 1h4c2 0 2-1 2-1 1 0 1-1 1-1 2-.5 2-2 2-2-1 0-2-1-2-2V7c0-3-2-5-5-5Z" />
                  <path d="M10 18.5c.5 1 1.5 1.5 2 1.5s1.5-.5 2-1.5" />
                </svg>
                <span className="sr-only">Snapchat</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-and-conditions" className="hover:text-gray-400">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">COMMUNITY</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faqs" className="hover:text-gray-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/vip-tables" className="hover:text-gray-400">
                  VIP Tables
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-gray-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Tamasha Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}