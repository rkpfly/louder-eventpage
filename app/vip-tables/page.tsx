"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample events data - in a real app, this would come from an API
const events = [
  { id: "1", name: "SATURDAY NIGHT FEVER - SAT 15 JUNE" },
  { id: "2", name: "BOLLYWOOD BASH - SAT 22 JUNE" },
  { id: "3", name: "RETRO CLASSICS - SAT 29 JUNE" },
  { id: "4", name: "SUMMER VIBES - SAT 06 JULY" },
]

export default function VIPTablesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    guests: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Your VIP table request has been submitted. We'll contact you shortly.")
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">VIP TABLES</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Experience Tamasha Club in style with our VIP table service. Enjoy premium seating, bottle service, and
              dedicated waitstaff for an unforgettable night.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">VIP EXPERIENCE</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Premium Location</h3>
                  <p>
                    Our VIP tables are located in the best areas of the club, offering excellent views of the dance
                    floor and stage.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Bottle Service</h3>
                  <p>
                    Enjoy premium spirits and champagne delivered directly to your table, with a selection of mixers and
                    garnishes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Service</h3>
                  <p>
                    Your personal server will ensure your glasses are never empty and your experience is seamless
                    throughout the night.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Express Entry</h3>
                  <p>Skip the line with priority access to the club for you and your guests.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">BOOK YOUR TABLE</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="event">Event</Label>
                  <Select value={formData.event} onValueChange={(value) => handleSelectChange("event", value)}>
                    <SelectTrigger id="event">
                      <SelectValue placeholder="Select event" />
                    </SelectTrigger>
                    <SelectContent>
                      {events.map((event) => (
                        <SelectItem key={event.id} value={event.id}>
                          {event.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select value={formData.guests} onValueChange={(value) => handleSelectChange("guests", value)}>
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[2, 4, 6, 8, 10, 12].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} guests
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Special Requests</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} />
                </div>

                <div className="pt-2">
                  <p className="text-sm mb-4">
                    By submitting this form, you agree to our terms and conditions. We'll contact you to confirm your
                    reservation and discuss payment details.
                  </p>

                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    SUBMIT REQUEST
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
