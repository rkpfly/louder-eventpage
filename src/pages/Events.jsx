import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useSelector } from "react-redux";

// Month name mapping
const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUNE",
  "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"
];

// Helper to get next 4 months from today
const getNext4Months = () => {
  const today = new Date();
  const currentMonthIndex = today.getMonth(); // 0-based
  const next4 = [];

  for (let i = 0; i < 4; i++) {
    const monthIndex = (currentMonthIndex + i) % 12;
    next4.push(MONTHS[monthIndex]);
  }

  return next4;
};

// Helper to extract month from start_date (ISO format)
const getMonthFromDate = (dateStr) => {
  const date = new Date(dateStr);
  const monthIndex = date.getMonth(); // 0-based index
  return MONTHS[monthIndex];
};

export default function Events() {
  const [filter, setFilter] = useState("ALL");
  const events = useSelector((state) => state.Events.events).filter(event => event.status);
  const next4Months = getNext4Months();

  const filteredEvents = events.filter((event) => {
    const eventMonth = getMonthFromDate(event.start_date);

    if (filter === "ALL"){
      return true;
    }

    if (filter === "UP NEXT") {
      const today = new Date();
      const eventDate = new Date(event.start_date);
      
      return eventDate >= today;
    }
    
    if(filter === "PAST EVENTS"){
      const today = new Date();
      const eventDate = new Date(event.start_date);
      return eventDate < today;
    }

    return eventMonth === filter;
  });

  return (
    <div className="pb-16">
      <div className="container mx-auto px-4">
        

        <img
          src="/events-hero.jpg"
          alt="Hero Background"
          className="inset-0 w-full h-full object-cover mb-12 rounded-lg"
        />
        <div className="">
          <h1 className="text-4xl font-bold text-center">EVENTS CALENDAR</h1>
          <h1 className="text-2xl font-bold mb-8 text-center">SEASON 2025</h1>
        </div>

        <div className="flex flex-col">
            {/* Filter Bar */}
            <div className="mx-auto p-4 flex justify-center mb-12 flex-wrap gap-4">
              {["UP NEXT", ...next4Months, "ALL", "PAST EVENTS"].map((item) => (
                <Button
                  key={item}
                  variant={filter === item ? "default" : "outline"}
                  className={`border-black ${
                    filter === item ? "bg-black text-white" : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </Button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event._id}
                  className="group transform transition duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl bg-white rounded-xl p-4 border-2 rounded-lg shadow-md"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-4 rounded-lg">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/${event.imgsrc}` || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mb-2 text-sm font-medium">
                    {new Date(event.start_date).toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>

                  <h3 className="text-xl font-bold mb-4">{event.name}</h3>

                  <div className="flex flex-row flex-wrap gap-4">
                    <a href={event.redirection_url} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-black text-white hover:bg-gray-800">
                        BUY TICKETS
                      </Button>
                    </a>

                    <Link to="/vip-tables">
                      <Button
                        variant="outline"
                        className="w-full border-black hover:bg-black hover:text-white"
                      >
                        VIP TABLES
                      </Button>
                    </Link>

                    {/* <a href={event.redirection_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="w-full hover:bg-gray-100">
                        FIND OUT MORE
                      </Button>
                    </a> */}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
