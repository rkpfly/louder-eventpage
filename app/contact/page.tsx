"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Your message has been sent. We'll get back to you soon.")
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">CONTACT US</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                SEND MESSAGE
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">INFORMATION</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>
                    123 Nightlife Street
                    <br />
                    City Center
                    <br />
                    London, EC1A 1BB
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>+44 20 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>info@tamashaclub.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Opening Hours</h3>
                  <p>
                    Saturday: 10:00 PM - 4:00 AM
                    <br />
                    Other days: Closed (except for special events)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 aspect-video relative">
              {/* This would be replaced with an actual Google Maps embed */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p>Google Maps Embed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
