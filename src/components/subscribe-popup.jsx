import React, { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useSelector } from "react-redux"

export default function SubscribePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const offline = useSelector(state => state.Events.offline)

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSubscribed = localStorage.getItem("subscribed")
      if (!hasSubscribed && !offline) {
        setIsOpen(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [offline])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Subscribed with email:", email)
    localStorage.setItem("subscribed", "true")
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 max-w-md w-full relative">
        <Button variant="ghost" size="icon" onClick={handleClose} className="absolute top-2 right-2">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">SUBSCRIBE</h2>
          <p className="text-gray-600">Sign up to our newsletter to stay up to date with the latest news and events.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
            SUBSCRIBE
          </Button>
        </form>
      </div>
    </div>
  )
}