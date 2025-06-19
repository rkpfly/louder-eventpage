import { ChevronLeft, ChevronRight, Link } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Offerlist() {
    const offers = useSelector((state) => state.Offers.offers);
    const [currentAllEventIndex, setCurrentAlleventIndex] = useState(0);

    const nextResident = () => {
      setCurrentAlleventIndex((prev) => (prev + 1) % Math.ceil(offers.length / 4))
    }

    const prevResident = () => {
      setCurrentAlleventIndex((prev) => (prev - 1 + Math.ceil(offers.length / 4)) % Math.ceil(offers.length / 4))
    }

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold">OFFERS</h2>
                <div className="flex items-center space-x-4">
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevResident}
                      className="rounded-full border-black hover:bg-black hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextResident}
                      className="rounded-full border-black hover:bg-black hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Event slider */}
              {offers.length === 0 ? (
              
              <div className="text-center py-12 text-2xl font-semibold">
                No offers right now. Stay tuned!
              </div>
            ) :
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {offers.slice(currentAllEventIndex * 4, (currentAllEventIndex + 1) * 4).map((event) => (
                  <div key={event._id} className="text-center group shadow-lg rounded-lg p-4">
                    <div className="mb-4 aspect-square relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={`${import.meta.env.VITE_API_URL}/${event.imgsrc}` || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay with buttons */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-2">
                        <a href= {`/offers/${event._id}`} >
                          <Button variant="secondary" className="w-32">
                            More Info
                          </Button>
                        </a>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                ))}
              </div>
              }
            </div>
          </section>
    );
}