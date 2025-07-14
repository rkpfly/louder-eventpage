import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function NewsItem() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/news/${id}`);
        const data = await response.json();
        setNewsItem(data);
      } catch (error) {
        console.error('Error fetching news item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!newsItem) return <p className="text-center mt-10">News article not found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 mt-4">
      <img
        src={import.meta.env.VITE_API_URL + '/' +newsItem.image}
        alt={newsItem.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <div className="p-6">
        <p className="text-sm text-gray-500">
          {new Date(newsItem.date).toLocaleDateString()}
        </p>
        <h2 className="text-2xl font-bold mt-2 mb-4 text-gray-900">
          {newsItem.title}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {newsItem.long_description}
        </p>
        <p className="text-sm text-gray-600">By {newsItem.author || "Tamasha Editorial Team"}</p>
      </div>
    </div>
  );
}
