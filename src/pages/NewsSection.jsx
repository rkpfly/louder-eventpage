import { useState, useEffect } from "react";

export default function NewsSection() {
  const [filter, setFilter] = useState("All");
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/news`); 
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredItems =
    filter === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === filter); // if category field is re-added later

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-purple-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-4xl font-bold text-gray-900">News & Highlights</h2>
          <div className="space-x-2">
            {["All"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  filter === cat
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="rounded-lg overflow-hidden shadow-md flex flex-col h-[480px]"
              >
                <img
                  src={import.meta.env.VITE_API_URL + '/' + item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover bg-gray-800"
                />
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                    <h3 className="font-semibold text-lg leading-tight mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 line-clamp-3">{item.short_description}</p>
                  </div>

                    <a
                      href={`/news/${item._id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center py-2 rounded-lg border font-medium bg-blue-500 hover:bg-black hover:text-white transition mt-4"
                    >
                      Read More
                    </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
