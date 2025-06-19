import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";

export default function OfferDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const offer = useSelector((state) =>
    state.Offers.offers.find((o) => o._id === id)
  ) || getStaticOffer(id); // fallback for static offers

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    dob: "",
    celebrateDate: "",
    instagram: "",
    guestName: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/event/birthday-pass`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          dob: "",
          celebrateDate: "",
          instagram: "",
          guestName: "",
        });
      } else {
        const error = await response.json();
        console.error("Submission error:", error);
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please try again.");
    }
  };

  // ✅ Fallback content if offer ID is invalid
  if (!offer) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Offer Not Found</h1>
        <p className="text-gray-600 text-lg mb-4">
          The offer you're looking for doesn't exist or is no longer available.
        </p>
        <Button onClick={() => navigate("/")} className="bg-black text-white hover:bg-gray-800">
          Go Back to Offers
        </Button>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-4xl text-center font-bold mt-8 mb-2">{offer?.title || "Special Offer"}</h1>
      <h2 className="text-2xl text-center mb-6">
        Fill the form to claim your offer! We’ll contact you ASAP.
      </h2>

      <div className="grid md:grid-cols-2 rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto p-8 bg-white">
        {/* Left Image */}
        <div>
          <img
            src={offer?.imgsrc?.includes("http") ? offer.imgsrc : `${import.meta.env.VITE_API_URL}/${offer?.imgsrc}` || "/placeholder.jpg"}
            alt={offer?.title || "Offer Image"}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Form */}
        <div className="p-6 md:p-10 flex flex-col justify-between">
          <div className="mb-4 text-sm text-gray-600">
            <span className="text-red-600 font-medium">* Valid ID & birthdate proof required</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                placeholder="Mobile"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* DOB & Date of Celebration */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <Input
                type="date"
                name="celebrateDate"
                value={formData.celebrateDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Instagram */}
            <Input
              type="text"
              placeholder="Instagram Handle (optional)"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
            />

            {/* Guest Name */}
            <Textarea
              name="guestName"
              placeholder="Message (Your Plus One Guest Name)"
              value={formData.guestName}
              onChange={handleChange}
              rows={3}
              required
            />

            <div className="pt-4 pb-2 flex flex-row gap-2">
              <Button type="submit" className="w-full text-white bg-black hover:bg-gray-800 rounded-full">
                Claim!
              </Button>
              <Button type="button" onClick={() => navigate("/")} className="w-full text-white bg-black hover:bg-gray-800 rounded-full">
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
            <DialogTitle>🎁 You're In!</DialogTitle>
          </DialogHeader>
          <p className="text-gray-700">
            Your request has been received. Our team will be in touch shortly!
          </p>
          <DialogFooter className="mt-4">
            <Button onClick={() => setShowSuccessPopup(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

// ✅ Fallback if static offers are needed (optional)
function getStaticOffer(id) {
  const staticOffers = [
    {
      _id: "static-birthday",
      title: "Free Birthday Pass + 1 Guest",
      imgsrc: "/bday.jpg",
    },
    {
      _id: "static-henparty",
      title: "Free Pass for Hen + 1 Guest",
      imgsrc: "/hen.jpg",
    },
  ];
  return staticOffers.find((offer) => offer._id === id);
}
