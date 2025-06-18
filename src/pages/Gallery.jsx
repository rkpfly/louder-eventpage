// Sample gallery images - in a real app, these would come from an API or CMS
const galleryImages = [
  { id: 1, src: "../tamasha_pic/pics.jpg", alt: "Club interior" },
  { id: 2, src: "../tamasha_pic/pics2.jpg", alt: "DJ booth" },
  { id: 3, src: "../tamasha_pic/pics3.jpg", alt: "Dance floor" },
  { id: 4, src: "../tamasha_pic/pics4.jpg", alt: "VIP area" },
  { id: 5, src: "../tamasha_pic/pics5.jpg", alt: "Bar area" },
  { id: 6, src: "../tamasha_pic/pics6.jpg", alt: "Crowd enjoying the night" },
  { id: 7, src: "../tamasha_pic/pics7.jpg", alt: "Light show" },
  { id: 8, src: "../tamasha_pic/pics8.jpg", alt: "Special event" },
  { id: 9, src: "../tamasha_pic/pics9.jpg", alt: "Club entrance" },
  { id: 10, src: "../tamasha_pic/pics10.jpg", alt: "Bottle service" },
  ,
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">GALLERY</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square relative overflow-hidden group rounded-lg"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
