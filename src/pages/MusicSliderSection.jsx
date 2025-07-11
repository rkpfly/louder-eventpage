import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Button } from "../components/ui/button"; // Update this path based on your setup
import { Link } from "react-router-dom";

export default function MusicSliderSection({ musicPlaylists = [] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">MUSIC</h2>
          <Link to="/music">
            <Button variant="outline" className="border-black hover:bg-black hover:text-white">
              SHOW ALL
            </Button>
          </Link>
        </div>

        {musicPlaylists.length === 0 ? (
          <div className="text-center text-xl font-semibold">No playlists available!</div>
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
            className="musicSwiper"
          >
            {musicPlaylists.map((playlist) => (
              <SwiperSlide key={playlist.id}>
                <div className="rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 group transition-all duration-300 p-4">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={playlist.image}
                      alt={playlist.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 "
                    />
                  </div>
                  <div className="p-4 flex flex-col items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {playlist.title}
                    </h3>
                    <a
                      href={playlist.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full"
                    >
                      Listen
                    </a>
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
