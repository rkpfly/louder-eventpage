import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import COUNTRY_CODES from "../lib/COUNTRY_CODES.json"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { useSelector } from "react-redux";

export default function TableRequestForm() {
  //const events = useSelector((state) => state.Events.events);

  const [formData, setFormData] = useState({
    event: "",
    guests: "",
    budget: "",
    name: "",
    surname: "",
    email: "",
    code: "+61",
    phone: "",
    date: "",
    comment: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/event/add-function-inquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${formData.name} ${formData.surname}`,
            email: formData.email,
            phone: `${formData.code}${formData.phone}`,
            eventType: formData.event,
            date: formData.date,
            guests: formData.guests,
            budget: formData.budget,
            message: formData.comment || '',
          }),
        }
      );

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          event: "",
          guests: "",
          budget: "",
          name: "",
          surname: "",
          email: "",
          code: "+61",
          phone: "",
          date: "",
          comment: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
      <div className="pb-16">
        <div className="container mx-auto px-4 pt-8">
          {/* Hero Image */}
          <img
            src="functions.jpg"
            alt="Function Background"
            className="inset-0 w-full h-full object-cover mb-12 rounded-lg"
          />

          {/* Headings */}
          <div className="text-center">
            <h1 className="text-4xl font-bold">FUNCTION BOOKING</h1>
            <h1 className="text-2xl font-bold mb-8">LET’S CELEBRATE</h1>
          </div>

          {/* Intro Content */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-800">
              Planning a private party, birthday bash, engagement, or any other celebration?
              We’ve got the perfect venue and vibes for your function.
            </p>
            <p className="mt-4 text-md text-gray-700">
              Fill out the form below and our team will get back to you with date availability,
              venue options, and everything you need to create an unforgettable event.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto p-8 bg-white">
        {/* Left Image - DO NOT CHANGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="VIP Party"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Form */}
        <div className="p-6 md:p-10 flex flex-col justify-between">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Request Your Function</h2>
            <span> Go big or go home! Book your function now!</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Event */}
            {/* <Select
              value={formData.event}
              onValueChange={(val) => handleSelectChange("event", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select event..." />
              </SelectTrigger>
              <SelectContent>
                {events.map(event => (
                  <SelectItem key={event.name} value={event.name}>
                    {event.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select> */}

            {/* Date */}
            <div className="flex gap-4">
              <span className="text-center rounded-lg border px-4 py-1">
                <p>Date</p>
              </span>

              <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            </div>
            

            {/* Guests + Budget */}
            <div className="grid grid-cols-2 gap-4">
              {/* <Select
                value={formData.guests}
                onValueChange={(val) => handleSelectChange("guests", val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Number of Guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-20">11-20</SelectItem>
                  <SelectItem value="21-50">21-50</SelectItem>
                  <SelectItem value="51+">51+</SelectItem>
                </SelectContent>
              </Select> */}

              <Input
                placeholder="Number of Guests"
                name="guests"
                type="number"
                value={formData.guests}
                onChange={handleChange}
                required
              />

              <Select
                value={formData.budget}
                onValueChange={(val) => handleSelectChange("budget", val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$100-$250">$500 +</SelectItem>
                  <SelectItem value="$251-$500">$2500 +</SelectItem>
                  <SelectItem value="$501-$1000">$5000 +</SelectItem>
                  <SelectItem value="$1000+">$10000 +</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name + Surname */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Code + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <Select
                value={formData.code}
                onValueChange={(val) => handleSelectChange("code", val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  <div className="max-h-64 overflow-y-auto">
                    {COUNTRY_CODES.map((country) => (
                      <SelectItem key={country.dial_code} value={country.dial_code}>
                        {country.dial_code} ({country.name})
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>

              <div className="col-span-2">
                <Input
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Comment */}
            <Textarea
              placeholder="Tell us more about your function..."
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows={3}
            />

            {/* Submit */}
            <div className="pt-4 pb-2">
              <Button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-800 rounded-full"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🎉 Submission Successful!</DialogTitle>
          </DialogHeader>
          <p>Your function request has been received. Our team will contact you shortly.</p>
          <DialogFooter className="mt-4">
            <Button onClick={() => setShowSuccessPopup(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
