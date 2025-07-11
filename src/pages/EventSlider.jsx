// EventSliderSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "../components/ui/button"; // Optional: Replace or remove based on your project
import { Link } from "react-router-dom";

export default function EventSliderSection({ events = [] }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">EVENTS</h2>
          <Link to="/events">
            <Button variant="outline" className="border-black hover:bg-black hover:text-white">
              SHOW ALL
            </Button>
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12 text-2xl font-semibold">
            No events right now! Stay tuned!
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={12}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="eventSwiper pb-4"
          >
            {events.map((event) => (
              <SwiperSlide key={event._id}>
                <div className="rounded-lg shadow-lg group p-4 border">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/${event.imgsrc}` || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-black bg-opacity-50 hidden sm:flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-2">
                      <a href={event.redirection_url}>
                        <Button className="bg-blue-600 hover:bg-blue-700 w-32 text-white">
                          Buy Now!
                        </Button>
                      </a>
                      <Link to="/vip-tables">
                        <Button variant="secondary" className="w-32">
                          Book Table
                        </Button>
                      </Link>
                      <a href={event.redirection_url}>
                        <Button className="w-32">More Info</Button>
                      </a>
                    </div>

                    <a
                      href={event.redirection_url}
                      className="absolute inset-0 sm:hidden z-10"
                    />
                  </div>
                  <div className="p-4 text-center ">
                    <h3 className="md:text-xl font-bold whitespace-nowrap">{event.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
