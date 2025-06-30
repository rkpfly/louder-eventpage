import { useParams, Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Calendar, Clock, MapPin, Music } from "lucide-react"

// This would come from an API in a real application
const getEventBySlug = (slug) => {
  // Extract date from slug
  const dateMatch = slug.match(/(\d{4})-(\d{2})-(\d{2})$/)
  const date = dateMatch ? new Date(`${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`) : new Date()

  // Extract title from slug
  const titlePart = slug.replace(/-\d{4}-\d{2}-\d{2}$/, "")
  const title = titlePart
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    id: slug,
    title,
    date,
    image: "/placeholder.svg",
    description:
      "Join us for an unforgettable night at Tamasha Club featuring the best music, atmosphere, and crowd. Our world-class sound system and lighting will take your nightlife experience to the next level.",
    lineup: ["DJ Smith", "DJ Rodriguez", "DJ Patel"],
    openingTime: "22:00",
    closingTime: "04:00",
    ticketPrice: "£20",
    vipPrice: "£300",
  }
}

export default function EventDetails() {
  const { slug } = useParams()
  const event = getEventBySlug(slug)

  const formattedDate = event.date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
              <p className="text-xl">{formattedDate}</p>
            </div>

            <div className="aspect-[3/4] relative mb-6">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 mb-8">
              <Link to={`/event/tickets/${slug}`}>
                <Button className="w-full bg-black text-white hover:bg-gray-800 text-lg py-6">BUY TICKETS</Button>
              </Link>
              <Link to="/vip-tables">
                <Button variant="outline" className="w-full border-black hover:bg-black hover:text-white text-lg py-6">
                  VIP TABLES
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">EVENT DETAILS</h2>
              <p className="text-lg mb-6">{event.description}</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold">Date</h3>
                    <p>{formattedDate}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold">Time</h3>
                    <p>
                      {event.openingTime} - {event.closingTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p>Tamasha Club</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Music className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold">Line Up</h3>
                    <ul>
                      {event.lineup.map((artist, index) => (
                        <li key={index}>{artist}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">TICKETS</h2>

              <div className="border-t border-b py-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">Standard Entry</h3>
                    <p className="text-sm">Valid for one person</p>
                  </div>
                  <div className="text-xl font-bold">{event.ticketPrice}</div>
                </div>
              </div>

              <div className="border-b py-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">VIP Table</h3>
                    <p className="text-sm">For up to 6 people, includes bottle service</p>
                  </div>
                  <div className="text-xl font-bold">From {event.vipPrice}</div>
                </div>
              </div>

              <Link to={`/event/tickets/${slug}`}>
                <Button className="w-full bg-black text-white hover:bg-gray-800">BUY TICKETS</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}