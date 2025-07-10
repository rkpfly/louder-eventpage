import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const articlesData = [
  {
    id: 1,
    title: "The Roots of The Martinez Brothers",
    category: "Article",
    image: "../../tamasha_pic/pics.jpg",
    redirect_url: "https://tixmojo.com/",
  },
  {
    id: 2,
    title: "What’s On This Week",
    category: "Article",
    image: "../../tamasha_pic/pics2.jpg",
    redirect_url: "https://tixmojo.com/",
  },
  {
    id: 3,
    title: "The Roots of John Summit",
    category: "Article",
    image: "../../tamasha_pic/pics8.jpg",
    redirect_url: "https://tixmojo.com/",
  },
  {
    id: 4,
    title: "Dom Dolla Unleashes Fire Set",
    category: "Interview",
    image: "../../tamasha_pic/pics4.jpg",
    redirect_url: "https://tixmojo.com/",
  },
  {
    id: 5,
    title: "Experts Only: John Summit",
    category: "Interview",
    image: "../../tamasha_pic/pics5.jpg",
    redirect_url: "https://tixmojo.com/",
  },
];

export default function NewsSection() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filteredArticles =
    filter === "All"
      ? articlesData
      : articlesData.filter((article) => article.category === filter);

  const handleOnClick = () => {
    navigate("/newspage")
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-purple-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-4xl font-bold text-gray-900 ">News & Highlights</h2>
          <div className="space-x-2">
            {["All", "Interview", "Article"].map((cat) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="rounded-lg overflow-hidden shadow-md flex flex-col h-[420px]" // fixed height
            >
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover bg-gray-800"
                    
                />
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <p className="uppercase text-xs text-gray-400 mb-1">
                    {article.category}
                  </p>
                  <h3 className="font-semibold text-lg leading-tight mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                </div>
                <a
                    onClick={handleOnClick}
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
      </div>
    </section>
  );
}
