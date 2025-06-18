import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";

export default function SignupPromo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+61",
    email: "",
    number: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (val) => {
    setFormData((prev) => ({ ...prev, countryCode: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/api/event/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          countryCode: "+61",
          email: "",
          number: "",
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error submitting form.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 rounded-lg ">
      <div className="flex">
        <div className="flex mx-auto items-center justify-center bg-white rounded-xl overflow-hidden shadow-xl border">
          {/* Left Image */}
          <div className=" md:h-auto md:w-1/2 overflow-hidden">
            <img
              src="../../sub-img.png"
              alt="Join Now"
              className="rounded-lg w-auto "
              
            />
          </div>

          {/* Right Form */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe Now</h2>
            <p className="mb-6 text-gray-600">Get exclusive discounts and offers directly in your inbox.</p>

            {success && <p className="text-green-600 mb-4">🎉 Subscription successful!</p>}
            {error && <p className="text-red-600 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  
                />
              </div>

              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="grid grid-cols-3 gap-4">
                <Select value={formData.countryCode} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+61">+61 (AU)</SelectItem>
                    <SelectItem value="+91">+91 (IN)</SelectItem>
                    <SelectItem value="+1">+1 (US)</SelectItem>
                    <SelectItem value="+65">+65 (SG)</SelectItem>
                    <SelectItem value="+44">+44 (UK)</SelectItem>
                  </SelectContent>
                </Select>

                <div className="col-span-2">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-800 rounded-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Optional Success Popup */}
      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You're In! 🎉</DialogTitle>
          </DialogHeader>
          <p>Thanks for subscribing. Watch your inbox for exclusive perks and updates.</p>
          <DialogFooter className="mt-4">
            <Button onClick={() => setSuccess(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
