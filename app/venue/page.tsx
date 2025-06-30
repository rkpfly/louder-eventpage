import Image from "next/image"

export default function VenuePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8 text-center">TAMASHA CLUB</h1>

          <div className="aspect-video relative mb-8">
            <Image src="/placeholder.svg" alt="Tamasha Club Main Area" fill className="object-cover" />
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Tamasha Club is the ultimate nightlife destination, offering an unparalleled experience in the heart of
              the city. Our state-of-the-art sound system, mesmerizing lighting, and world-class DJs create an
              atmosphere that keeps our guests coming back weekend after weekend.
            </p>
            <p className="text-lg">
              With multiple areas to explore, each with its own unique vibe, Tamasha Club caters to all tastes and
              preferences. Whether you're looking to dance the night away on our main floor, enjoy a more relaxed
              atmosphere in our lounge area, or experience VIP treatment in our exclusive section, we have something for
              everyone.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">MAIN FLOOR</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="aspect-square relative">
              <Image src="/placeholder.svg" alt="Main Floor View 1" fill className="object-cover" />
            </div>
            <div className="aspect-square relative">
              <Image src="/placeholder.svg" alt="Main Floor View 2" fill className="object-cover" />
            </div>
            <div className="aspect-square relative">
              <Image src="/placeholder.svg" alt="Main Floor View 3" fill className="object-cover" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg">
              Our main floor is the heart of Tamasha Club, featuring a spacious dance floor, powerful sound system, and
              spectacular lighting effects. This is where our resident DJs and special guests showcase their talents,
              playing the best in commercial, house, and hip-hop music. The main bar spans the length of one wall,
              ensuring you never have to wait long for a drink.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">VIP LOUNGE</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="aspect-square relative">
              <Image src="/placeholder.svg" alt="VIP Lounge View 1" fill className="object-cover" />
            </div>
            <div className="aspect-square relative">
              <Image src="/placeholder.svg" alt="VIP Lounge View 2" fill className="object-cover" />
            </div>
            <div className="aspect-square relative">
              <Image src="/placeholder.svg" alt="VIP Lounge View 3" fill className="object-cover" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg">
              For those seeking a more exclusive experience, our VIP lounge offers premium seating, bottle service, and
              a dedicated bar. Located on an elevated level overlooking the main floor, the VIP area provides the
              perfect balance of privacy and immersion in the club atmosphere. Our attentive staff ensures that your
              glasses are never empty and your experience is nothing short of exceptional.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
