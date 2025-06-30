import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

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
    ticketPrice: 20,
    ticketTypes: [
      { id: "standard", name: "Standard Entry", price: 20 },
      { id: "early", name: "Early Bird", price: 15 },
      { id: "vip", name: "VIP Entry", price: 50 },
    ],
  }
}

export default function EventTickets() {
  const { slug } = useParams()
  const event = getEventBySlug(slug)
  const [ticketType, setTicketType] = useState("standard")
  const [quantity, setQuantity] = useState(1)

  const selectedTicket = event.ticketTypes.find((t) => t.id === ticketType)
  const totalPrice = selectedTicket ? selectedTicket.price * quantity : 0

  const formattedDate = event.date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically redirect to a payment processor
    alert(`Processing payment of £${totalPrice} for ${quantity} tickets`)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">BUY TICKETS</h1>
            <h2 className="text-xl mb-1">{event.title}</h2>
            <p>{formattedDate}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="aspect-video relative mb-4">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Event Details</h3>
                <p className="mb-2">
                  Join us for an unforgettable night at Tamasha Club featuring the best music, atmosphere, and crowd.
                </p>
                <Link to={`/event/${slug}`} className="text-blue-600 hover:underline">
                  View event details
                </Link>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="ticket-type">Ticket Type</Label>
                    <Select value={ticketType} onValueChange={setTicketType}>
                      <SelectTrigger id="ticket-type">
                        <SelectValue placeholder="Select ticket type" />
                      </SelectTrigger>
                      <SelectContent>
                        {event.ticketTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name} - £{type.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                      <SelectTrigger id="quantity">
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-bold">Total</div>
                    <div className="text-2xl font-bold">£{totalPrice}</div>
                  </div>

                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 text-lg py-6">
                    PROCEED TO CHECKOUT
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}