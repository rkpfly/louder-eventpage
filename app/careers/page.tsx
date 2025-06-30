"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample job positions
const positions = [
  { id: "bartender", title: "Bartender" },
  { id: "server", title: "Server" },
  { id: "security", title: "Security Staff" },
  { id: "dj", title: "DJ" },
  { id: "manager", title: "Floor Manager" },
  { id: "marketing", title: "Marketing Specialist" },
  { id: "other", title: "Other" },
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Your application has been submitted. We'll review it and contact you if there's a match.")
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">CAREERS</h1>

          <div className="mb-12">
            <p className="text-lg mb-4">
              Join the Tamasha Club team and be part of creating unforgettable experiences for our guests. We're always
              looking for passionate, talented individuals who thrive in a dynamic environment and are committed to
              excellence.
            </p>
            <p className="text-lg">
              Whether you're an experienced hospitality professional or just starting your career, we offer exciting
              opportunities to grow and develop your skills in a vibrant setting.
            </p>
          </div>

          <div className="bg-black text-white p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">CURRENT OPENINGS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-white p-4">
                <h3 className="font-bold mb-2">Bartenders</h3>
                <p className="mb-2">Full-time & Part-time positions available</p>
                <p className="text-sm">Experience required</p>
              </div>

              <div className="border border-white p-4">
                <h3 className="font-bold mb-2">Security Staff</h3>
                <p className="mb-2">Full-time positions</p>
                <p className="text-sm">SIA license required</p>
              </div>

              <div className="border border-white p-4">
                <h3 className="font-bold mb-2">Floor Staff</h3>
                <p className="mb-2">Part-time positions</p>
                <p className="text-sm">No experience necessary, training provided</p>
              </div>

              <div className="border border-white p-4">
                <h3 className="font-bold mb-2">Marketing Assistant</h3>
                <p className="mb-2">Full-time position</p>
                <p className="text-sm">Experience in nightlife marketing preferred</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">APPLICATION FORM</h2>

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
                <Label htmlFor="position">Position</Label>
                <Select value={formData.position} onValueChange={(value) => handleSelectChange("position", value)}>
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((position) => (
                      <SelectItem key={position.id} value={position.id}>
                        {position.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Select value={formData.experience} onValueChange={(value) => handleSelectChange("experience", value)}>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Cover Letter / Additional Information</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} />
              </div>

              <div>
                <Label htmlFor="resume">Resume/CV (PDF format)</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                  SUBMIT APPLICATION
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
