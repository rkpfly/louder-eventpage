export default function AboutClubPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">ABOUT TAMASHA CLUB</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">THE EXPERIENCE</h2>
              <p className="text-lg mb-4">
                Tamasha Club is the ultimate nightlife destination, offering an unparalleled experience in the heart of
                the city. Our state-of-the-art sound system, mesmerizing lighting, and world-class DJs create an
                atmosphere that keeps our guests coming back weekend after weekend.
              </p>
              <p className="text-lg">
                With multiple areas to explore, each with its own unique vibe, Tamasha Club caters to all tastes and
                preferences. Whether you're looking to dance the night away on our main floor, enjoy a more relaxed
                atmosphere in our lounge area, or experience VIP treatment in our exclusive section, we have something
                for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">MUSIC & ENTERTAINMENT</h2>
              <p className="text-lg mb-4">
                Our music policy spans across multiple genres, ensuring there's something for every taste. From
                commercial hits and R&B classics to house music and Bollywood beats, our resident DJs and special guests
                deliver unforgettable sets that keep the dance floor packed all night long.
              </p>
              <p className="text-lg">
                We regularly host special events featuring international DJs, themed nights, and exclusive parties that
                you won't find anywhere else in the city.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">VENUE FEATURES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Main Floor</h3>
                  <ul className="space-y-2">
                    <li>• Spacious dance floor</li>
                    <li>• State-of-the-art sound system</li>
                    <li>• Professional lighting setup</li>
                    <li>• Multiple bars</li>
                    <li>• VIP viewing areas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">VIP Experience</h3>
                  <ul className="space-y-2">
                    <li>• Private seating areas</li>
                    <li>• Dedicated bottle service</li>
                    <li>• Personal waitstaff</li>
                    <li>• Premium location</li>
                    <li>• Express entry</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">DRESS CODE & ENTRY</h2>
              <p className="text-lg mb-4">
                We maintain a smart casual dress code to ensure all our guests feel comfortable and the atmosphere
                remains upscale. Please note:
              </p>
              <ul className="space-y-2 mb-4">
                <li>• Smart jeans and designer trainers are acceptable</li>
                <li>• No sportswear, ripped clothing, or flip-flops</li>
                <li>• Collared shirts recommended for men</li>
                <li>• Smart casual attire for ladies</li>
              </ul>
              <p className="text-lg">
                Entry is strictly 18+ and valid photo ID is required. Management reserves the right to refuse entry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">OPENING HOURS</h2>
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Regular Hours</h3>
                <p className="mb-4">Saturday: 10:00 PM - 4:00 AM</p>
                <h3 className="text-xl font-bold mb-2">Special Events</h3>
                <p>Check our events calendar for special opening times during holidays and exclusive events.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">LOCATION & CONTACT</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p>
                    123 Nightlife Street
                    <br />
                    City Center
                    <br />
                    London, EC1A 1BB
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact</h3>
                  <p>
                    Phone: +44 20 1234 5678
                    <br />
                    Email: info@tamashaclub.com
                    <br />
                    VIP Bookings: vip@tamashaclub.com
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">SAFETY & SECURITY</h2>
              <p className="text-lg mb-4">
                The safety and security of our guests is our top priority. We have professional security staff on-site
                at all times, CCTV monitoring throughout the venue, and strict policies regarding responsible drinking.
              </p>
              <p className="text-lg">
                We work closely with local authorities and transport services to ensure our guests can enjoy their night
                safely and get home securely.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
