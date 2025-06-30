import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button"; // adjust path if needed

const offers = [
  { id: 1, title: "50% Off Drinks", description: "Valid this weekend only!", image: "/images/offer1.jpg" },
  { id: 2, title: "Free Entry Before 10PM", description: "Join us early!", image: "/images/offer2.jpg" },
  { id: 3, title: "VIP Package Special", description: "Book now & save big!", image: "/images/offer3.jpg" },
  { id: 4, title: "2-for-1 Cocktails", description: "Every Friday night.", image: "/images/offer4.jpg" },
  { id: 5, title: "Group Discounts", description: "Bring your friends!", image: "/images/offer5.jpg" },
  { id: 6, title: "Ladies Night", description: "Free entry for ladies till 11 PM!", image: "/images/offer6.jpg" },
  { id: 7, title: "Birthday Bash", description: "Celebrate with a VIP booth!", image: "/images/offer7.jpg" },
  { id: 8, title: "Happy Hour", description: "Discounted cocktails from 8-10 PM!", image: "/images/offer8.jpg" },
];

export default function Offers() {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const itemsPerPage = 4;

  const nextOffer = () => {
    setCurrentOfferIndex((prev) => (prev + 1) % Math.ceil(offers.length / itemsPerPage));
  };

  const prevOffer = () => {
    setCurrentOfferIndex(
      (prev) => (prev - 1 + Math.ceil(offers.length / itemsPerPage)) % Math.ceil(offers.length / itemsPerPage)
    );
  };

  const paginatedOffers = offers.slice(
    currentOfferIndex * itemsPerPage,
    (currentOfferIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        {/* Header + Buttons */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Exclusive Club Offers</h2>
          <div className="flex items-center space-x-4">
            <Link to="/offers">
              <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                SHOW ALL
              </Button>
            </Link>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevOffer}
                className="rounded-full border-black hover:bg-black hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextOffer}
                className="rounded-full border-black hover:bg-black hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {paginatedOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-gradient-to-br from-purple-100 via-pink-100 to-white rounded-xl shadow-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
              <p className="text-gray-600 text-sm">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
