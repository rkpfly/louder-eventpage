import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

// Expanded special events data
const allSpecialEvents = [
  {
    id: 1,
    title: "NEW YEAR'S EVE asasasa",
    date: "31 DEC",
    image: "/placeholder.svg?height=600&width=800",
    slug: "new-years-eve-2025-12-31",
    description:
      "Ring in the new year with the biggest party of the year featuring special guests and champagne service.",
  },
  {
    id: 2,
    title: "VALENTINE'S SPECIAL",
    date: "14 FEB",
    image: "/placeholder.svg?height=600&width=800",
    slug: "valentines-special-2026-02-14",
    description: "A romantic night filled with love songs, couples' specials, and an intimate atmosphere.",
  },
  {
    id: 3,
    title: "HALLOWEEN HORROR",
    date: "31 OCT",
    image: "/placeholder.svg?height=600&width=800",
    slug: "halloween-horror-2025-10-31",
    description: "Dress up in your scariest costume for a night of thrills, chills, and killer beats.",
  },
  {
    id: 4,
    title: "SUMMER FESTIVAL",
    date: "15 AUG",
    image: "/placeholder.svg?height=600&width=800",
    slug: "summer-festival-2025-08-15",
    description: "Celebrate summer with outdoor vibes, tropical cocktails, and the hottest DJs.",
  },
  {
    id: 5,
    title: "CHRISTMAS PARTY",
    date: "24 DEC",
    image: "/placeholder.svg?height=600&width=800",
    slug: "christmas-party-2025-12-24",
    description: "Festive celebrations with holiday music, special decorations, and seasonal cocktails.",
  },
  {
    id: 6,
    title: "ANNIVERSARY BASH",
    date: "15 MAR",
    image: "/placeholder.svg?height=600&width=800",
    slug: "anniversary-bash-2026-03-15",
    description: "Celebrating another year of incredible nights with special performances and surprises.",
  },
]

export default function SpecialEvents() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">SPECIAL EVENTS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allSpecialEvents.map((event) => (
            <div key={event.id} className="group">
              <div className="relative aspect-video overflow-hidden mb-4">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <div className="text-sm font-medium mb-1 text-white">{event.date}</div>
                    <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                  </div>
                </div>
              </div>
              <p className="mb-4">{event.description}</p>
              <div className="space-y-2">
                <Link to={`/event/tickets/${event.slug}`}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">BUY TICKETS</Button>
                </Link>
                <Link to="/vip-tables">
                  <Button variant="outline" className="w-full border-black hover:bg-black hover:text-white">
                    VIP TABLES
                  </Button>
                </Link>
                <Link to={`/event/${event.slug}`}>
                  <Button variant="ghost" className="w-full hover:bg-gray-100">
                    FIND OUT MORE
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}