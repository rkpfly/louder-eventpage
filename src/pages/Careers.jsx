import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";

const roles = [
  { value: "bartender", label: "Bartender" },
  { value: "server", label: "Server" },
  { value: "dj", label: "DJ" },
  { value: "security", label: "Security Staff" },
  { value: "hostess", label: "Hostess" },
  { value: "other", label: "Other" },
];

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    social: "",
    role: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccessPopup(true);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center ">CAREER</h1>
      <div className="grid md:grid-cols-2 rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto p-8 mt-8 bg-white">
        {/* Left Image */}
        <div>
          <img
            src="../../career-img.jpg"
            alt="Join Us"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Form */}
        <div className="p-6 md:p-10 flex flex-col justify-between">
          <h1 className="text-4xl md:text-2xl font-semibold ">Join the Team</h1>
          <h2 className="text-xl md:text-1xl mb-6">Be part of an energetic, passionate team that lives for unforgettable nights.</h2>


          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name + Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="grid grid-cols-3 gap-4">
              <Input value="+91" readOnly className="bg-gray-100 cursor-not-allowed" />
              <div className="col-span-2">
                <Input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

        

            {/* Social Link */}
            <Input
              name="social"
              placeholder="Facebook/Instagram Link"
              value={formData.social}
              onChange={handleChange}
            />

            {/* Role */}
            <Select value={formData.role} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Submit */}
            <div className="pt-4 pb-2 flex flex-row gap-2">
              <Button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-800 rounded-full"
              >
                Submit Application
              </Button>

              <Button
                type="button"
                className="w-full text-white bg-black hover:bg-gray-800 rounded-full"
                onClick={() => window.location.href = "/"}
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🎉 Application Submitted!</DialogTitle>
          </DialogHeader>
          <p>We’ve received your details. Our team will be in touch if there's a match.</p>
          <DialogFooter className="mt-4">
            <Button onClick={() => setShowSuccessPopup(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
