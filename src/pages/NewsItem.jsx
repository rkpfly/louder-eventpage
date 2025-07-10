import React from 'react';

const newsData = {
  title: "Hi Ibiza: Your Ultimate Guide to July 2025",
  date: "July 9, 2025",
  image: "../../tamasha_pic/pics.jpg",
  description:
    "Explore the hottest parties, must-see DJs, and insider tips to make the most of your July at Hi Ibiza. From opening sets to sunrise moments—don’t miss a beat.",
  author: "Ibiza Editorial Team",
};

export default function NewsItem() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 mt-4">
      <img
        src={newsData.image}
        alt={newsData.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <div className="p-6">
        <p className="text-sm text-gray-500">{newsData.date}</p>
        <h2 className="text-2xl font-bold mt-2 mb-4 text-gray-900">
          {newsData.title}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {newsData.description}
        </p>
        <p className="text-sm text-gray-600">By {newsData.author}</p>
      </div>
    </div>
  );
}
