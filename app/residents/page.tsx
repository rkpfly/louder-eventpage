import Image from "next/image"

// Expanded residents data
const allResidents = [
  {
    id: 1,
    name: "DJ SMITH",
    image: "/placeholder.svg?height=400&width=400",
    genre: "House",
    bio: "Resident DJ specializing in deep house and progressive beats.",
  },
  {
    id: 2,
    name: "DJ RODRIGUEZ",
    image: "/placeholder.svg?height=400&width=400",
    genre: "Hip Hop",
    bio: "Master of hip hop and R&B with over 10 years of experience.",
  },
  {
    id: 3,
    name: "DJ PATEL",
    image: "/placeholder.svg?height=400&width=400",
    genre: "Bollywood",
    bio: "Bringing the best of Bollywood and Indian fusion to the dance floor.",
  },
  {
    id: 4,
    name: "DJ WILLIAMS",
    image: "/placeholder.svg?height=400&width=400",
    genre: "R&B",
    bio: "Smooth R&B vibes and soulful classics that get everyone moving.",
  },
  {
    id: 5,
    name: "DJ CHEN",
    image: "/placeholder.svg?height=400&width=400",
    genre: "Electronic",
    bio: "Electronic music pioneer with cutting-edge beats and drops.",
  },
  {
    id: 6,
    name: "DJ GARCIA",
    image: "/placeholder.svg?height=400&width=400",
    genre: "Latin",
    bio: "Latin rhythms and reggaeton that bring the heat to every set.",
  },
  {
    id: 7,
    name: "DJ JOHNSON",
    image: "/placeholder.svg?height=400&width=400",
    genre: "Techno",
    bio: "Underground techno and industrial sounds for the true music lovers.",
  },
  {
    id: 8,
    name: "DJ BROWN",
    image: "/placeholder.svg?height=400&width=400",
    genre: "Commercial",
    bio: "Chart-topping hits and crowd favorites that keep the energy high.",
  },
]

export default function ResidentsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">RESIDENT DJS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allResidents.map((resident) => (
            <div key={resident.id} className="text-center">
              <div className="mb-4 aspect-square relative overflow-hidden">
                <Image src={resident.image || "/placeholder.svg"} alt={resident.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">{resident.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{resident.genre}</p>
              <p className="text-sm">{resident.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
