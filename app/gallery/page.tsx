import Image from "next/image"

// Sample gallery images - in a real app, these would come from an API or CMS
const galleryImages = [
  { id: 1, src: "/placeholder.svg", alt: "Club interior" },
  { id: 2, src: "/placeholder.svg", alt: "DJ booth" },
  { id: 3, src: "/placeholder.svg", alt: "Dance floor" },
  { id: 4, src: "/placeholder.svg", alt: "VIP area" },
  { id: 5, src: "/placeholder.svg", alt: "Bar area" },
  { id: 6, src: "/placeholder.svg", alt: "Crowd enjoying the night" },
  { id: 7, src: "/placeholder.svg", alt: "Light show" },
  { id: 8, src: "/placeholder.svg", alt: "Special event" },
  { id: 9, src: "/placeholder.svg", alt: "Club entrance" },
  { id: 10, src: "/placeholder.svg", alt: "Bottle service" },
  { id: 11, src: "/placeholder.svg", alt: "DJ performing" },
  { id: 12, src: "/placeholder.svg", alt: "Club atmosphere" },
]

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">GALLERY</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="aspect-square relative overflow-hidden group">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
