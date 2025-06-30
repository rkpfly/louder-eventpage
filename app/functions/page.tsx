"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FunctionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    date: "",
    guests: "",
    budget: "",
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
    alert("Your function inquiry has been submitted. We'll contact you shortly.")
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">FUNCTIONS</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Host your next corporate event, birthday celebration, or private party at Tamasha Club. Our versatile
              venue can accommodate a variety of functions with customizable packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">OUR OFFERINGS</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
                  <p>
                    From team building to client entertainment, our venue provides the perfect backdrop for your
                    corporate function with state-of-the-art AV equipment and catering options.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Birthday Celebrations</h3>
                  <p>
                    Make your birthday unforgettable with a private area, personalized service, and custom drink
                    packages tailored to your preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Private Parties</h3>
                  <p>
                    Whether it's an engagement party, reunion, or just a night out with friends, we can create a bespoke
                    experience that meets your needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Full Venue Hire</h3>
                  <p>
                    For larger events, consider exclusive use of our entire venue, complete with our resident DJs,
                    lighting technicians, and full staff.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">INQUIRY FORM</h2>

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
                  <Label htmlFor="company">Company (if applicable)</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="eventType">Event Type</Label>
                  <Select value={formData.eventType} onValueChange={(value) => handleSelectChange("eventType", value)}>
                    <SelectTrigger id="eventType">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="birthday">Birthday Celebration</SelectItem>
                      <SelectItem value="private">Private Party</SelectItem>
                      <SelectItem value="full">Full Venue Hire</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select value={formData.guests} onValueChange={(value) => handleSelectChange("guests", value)}>
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-20">1-20</SelectItem>
                      <SelectItem value="21-50">21-50</SelectItem>
                      <SelectItem value="51-100">51-100</SelectItem>
                      <SelectItem value="101-200">101-200</SelectItem>
                      <SelectItem value="200+">200+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Budget</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="£500-£1000">£500-£1000</SelectItem>
                      <SelectItem value="£1001-£2500">£1001-£2500</SelectItem>
                      <SelectItem value="£2501-£5000">£2501-£5000</SelectItem>
                      <SelectItem value="£5001+">£5001+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} />
                </div>

                <div className="pt-2">
                  <p className="text-sm mb-4">
                    By submitting this form, you agree to our terms and conditions. We'll contact you to discuss your
                    requirements and provide a customized quote.
                  </p>

                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    SUBMIT INQUIRY
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
