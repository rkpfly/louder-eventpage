import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Sample offers data - in a real app, this would come from an API
const offers = [
  {
    id: 1,
    title: "EARLY BIRD TICKETS",
    description: "Get 20% off when you purchase tickets at least 2 weeks in advance.",
    image: "/placeholder.svg",
    link: "/events",
  },
  {
    id: 2,
    title: "STUDENT NIGHTS",
    description: "Show your student ID for discounted entry every Thursday.",
    image: "/placeholder.svg",
    link: "/events",
  },
  {
    id: 3,
    title: "BIRTHDAY PACKAGE",
    description: "Celebrate your birthday with us and receive a complimentary bottle of champagne.",
    image: "/placeholder.svg",
    link: "/functions",
  },
  {
    id: 4,
    title: "GROUP DISCOUNTS",
    description: "Special rates for groups of 10 or more. Contact us for details.",
    image: "/placeholder.svg",
    link: "/vip-tables",
  },
]

export default function OffersPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">OFFERS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
                <p className="mb-4">{offer.description}</p>
                <Link href={offer.link}>
                  <Button className="bg-black text-white hover:bg-gray-800">FIND OUT MORE</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
