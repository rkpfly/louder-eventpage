"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample event data - expanded with more events
const events = [
  {
    id: 1,
    title: "SATURDAY NIGHT FEVER",
    date: "SAT 15 JUNE",
    image: "/placeholder.svg?height=800&width=600",
    link: "/event/saturday-night-fever-2025-06-15",
  },
  {
    id: 2,
    title: "BOLLYWOOD BASH",
    date: "SAT 22 JUNE",
    image: "/placeholder.svg?height=800&width=600",
    link: "/event/bollywood-bash-2025-06-22",
  },
  {
    id: 3,
    title: "RETRO CLASSICS",
    date: "SAT 29 JUNE",
    image: "/placeholder.svg?height=800&width=600",
    link: "/event/retro-classics-2025-06-29",
  },
  {
    id: 4,
    title: "SUMMER VIBES",
    date: "SAT 06 JULY",
    image: "/placeholder.svg?height=800&width=600",
    link: "/event/summer-vibes-2025-07-06",
  },
  {
    id: 5,
    title: "HOUSE MUSIC NIGHT",
    date: "SAT 13 JULY",
    image: "/placeholder.svg?height=800&width=600",
    link: "/event/house-music-night-2025-07-13",
  },
  {
    id: 6,
    title: "HIP HOP TAKEOVER",
    date: "SAT 20 JULY",
    image: "/placeholder.svg?height=800&width=600",
    link: "/event/hip-hop-takeover-2025-07-20",
  },
  {
    id: 7,
    title: "LATIN FUSION",
    date: "SAT 27 JULY",
    image: "/placeholder.svg?height=800&width=600",
    link: "/event/latin-fusion-2025-07-27",
  },
  {
    id: 8,
    title: "TECHNO UNDERGROUND",
    date: "SAT 03 AUG",
    image: "/placeholder.svg?height=800&width=600",
    link: "/event/techno-underground-2025-08-03",
  },
]

// Sample residents data - expanded
const residents = [
  { id: 1, name: "DJ SMITH", image: "/placeholder.svg?height=400&width=400", genre: "House" },
  { id: 2, name: "DJ RODRIGUEZ", image: "/placeholder.svg?height=400&width=400", genre: "Hip Hop" },
  { id: 3, name: "DJ PATEL", image: "/placeholder.svg?height=400&width=400", genre: "Bollywood" },
  { id: 4, name: "DJ WILLIAMS", image: "/placeholder.svg?height=400&width=400", genre: "R&B" },
  { id: 5, name: "DJ CHEN", image: "/placeholder.svg?height=400&width=400", genre: "Electronic" },
  { id: 6, name: "DJ GARCIA", image: "/placeholder.svg?height=400&width=400", genre: "Latin" },
  { id: 7, name: "DJ JOHNSON", image: "/placeholder.svg?height=400&width=400", genre: "Techno" },
  { id: 8, name: "DJ BROWN", image: "/placeholder.svg?height=400&width=400", genre: "Commercial" },
]

// Sample special events - expanded
const specialEvents = [
  {
    id: 1,
    title: "NEW YEAR'S EVE",
    date: "31 DEC",
    image: "/placeholder.svg?height=600&width=800",
    link: "/event/new-years-eve-2025-12-31",
  },
  {
    id: 2,
    title: "VALENTINE'S SPECIAL",
    date: "14 FEB",
    image: "/placeholder.svg?height=600&width=800",
    link: "/event/valentines-special-2026-02-14",
  },
  {
    id: 3,
    title: "HALLOWEEN HORROR",
    date: "31 OCT",
    image: "/placeholder.svg?height=600&width=800",
    link: "/event/halloween-horror-2025-10-31",
  },
  {
    id: 4,
    title: "SUMMER FESTIVAL",
    date: "15 AUG",
    image: "/placeholder.svg?height=600&width=800",
    link: "/event/summer-festival-2025-08-15",
  },
]

// Music playlists - expanded
const musicPlaylists = [
  {
    id: 1,
    title: "House Classics",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX32NsLKyzScr",
  },
  {
    id: 2,
    title: "Hip Hop Hits",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd",
  },
  {
    id: 3,
    title: "Electronic Vibes",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n",
  },
  {
    id: 4,
    title: "Bollywood Beats",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1vKzOTZ7jRm",
  },
  {
    id: 5,
    title: "Latin Rhythms",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX10zKzsJ2jva",
  },
  {
    id: 6,
    title: "R&B Classics",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYmmr74INdgF",
  },
]

export default function Home() {
  const [scrollText, setScrollText] = useState(
    "TAMASHA CLUB - THE ULTIMATE NIGHTLIFE EXPERIENCE - EVERY SATURDAY NIGHT - ",
  )
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const [currentResidentIndex, setCurrentResidentIndex] = useState(0)
  const [currentSpecialEventIndex, setCurrentSpecialEventIndex] = useState(0)
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
  const ticketsRef = useRef<HTMLDivElement>(null)

  // Scrolling text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollText((prev) => prev.substring(1) + prev.charAt(0))
    }, 150)

    return () => clearInterval(interval)
  }, [])

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  const nextResident = () => {
    setCurrentResidentIndex((prev) => (prev + 1) % Math.ceil(residents.length / 4))
  }

  const prevResident = () => {
    setCurrentResidentIndex((prev) => (prev - 1 + Math.ceil(residents.length / 4)) % Math.ceil(residents.length / 4))
  }

  const nextSpecialEvent = () => {
    setCurrentSpecialEventIndex((prev) => (prev + 1) % Math.ceil(specialEvents.length / 2))
  }

  const prevSpecialEvent = () => {
    setCurrentSpecialEventIndex(
      (prev) => (prev - 1 + Math.ceil(specialEvents.length / 2)) % Math.ceil(specialEvents.length / 2),
    )
  }

  const nextMusic = () => {
    setCurrentMusicIndex((prev) => (prev + 1) % Math.ceil(musicPlaylists.length / 3))
  }

  const prevMusic = () => {
    setCurrentMusicIndex(
      (prev) => (prev - 1 + Math.ceil(musicPlaylists.length / 3)) % Math.ceil(musicPlaylists.length / 3),
    )
  }

  const scrollToTickets = () => {
    ticketsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const openReadMore = () => {
    window.open("/about-club", "_blank")
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[15vw] font-bold tracking-tighter">THE</h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">TICKETS</h2>
            <div className="flex justify-center space-x-4">
              <Button onClick={openReadMore} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                Read More
              </Button>
              <Link href="/vip-tables">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8"
                >
                  VIP Tables
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Text */}
      <section className="py-4 overflow-hidden border-y border-black">
        <div className="whitespace-nowrap text-2xl font-bold">{scrollText.repeat(3)}</div>
      </section>

      {/* Ticket Carousel */}
      <section ref={ticketsRef} className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">UPCOMING EVENTS</h2>

          <div className="relative">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">{events[currentEventIndex].date}</h3>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevEvent}
                  className="rounded-full border-white text-white hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextEvent}
                  className="rounded-full border-white text-white hover:bg-white hover:text-black"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  src={events[currentEventIndex].image || "/placeholder.svg"}
                  alt={events[currentEventIndex].title}
                  width={600}
                  height={800}
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{events[currentEventIndex].title}</h3>
                  <p className="mb-6">
                    Experience the ultimate nightlife at Tamasha Club with our signature Saturday night event. Featuring
                    the best DJs, incredible sound system, and an atmosphere like no other.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link href={events[currentEventIndex].link}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">BUY TICKETS</Button>
                  </Link>
                  <Link href="/vip-tables">
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-black"
                    >
                      VIP TABLES
                    </Button>
                  </Link>
                  <Link href={events[currentEventIndex].link}>
                    <Button variant="ghost" className="w-full text-white hover:bg-white hover:text-black">
                      FIND OUT MORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">RESIDENTS</h2>
            <div className="flex items-center space-x-4">
              <Link href="/residents">
                <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                  SHOW ALL
                </Button>
              </Link>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevResident}
                  className="rounded-full border-black hover:bg-black hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextResident}
                  className="rounded-full border-black hover:bg-black hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {residents.slice(currentResidentIndex * 4, (currentResidentIndex + 1) * 4).map((resident) => (
                <div key={resident.id} className="text-center">
                  <div className="mb-4 aspect-square relative overflow-hidden">
                    <Image
                      src={resident.image || "/placeholder.svg"}
                      alt={resident.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{resident.name}</h3>
                  <p className="text-sm text-gray-600">{resident.genre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">SPECIAL EVENTS</h2>
            <div className="flex items-center space-x-4">
              <Link href="/special-events">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  SHOW ALL
                </Button>
              </Link>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSpecialEvent}
                  className="rounded-full border-white text-white hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSpecialEvent}
                  className="rounded-full border-white text-white hover:bg-white hover:text-black"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialEvents.slice(currentSpecialEventIndex * 2, (currentSpecialEventIndex + 1) * 2).map((event) => (
                <Link href={event.link} key={event.id} className="group">
                  <div className="relative aspect-video overflow-hidden mb-4">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                      <div>
                        <div className="text-sm font-medium mb-1">{event.date}</div>
                        <h3 className="text-2xl font-bold">{event.title}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">MUSIC</h2>
            <div className="flex items-center space-x-4">
              <Link href="/music">
                <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                  SHOW ALL
                </Button>
              </Link>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevMusic}
                  className="rounded-full border-black hover:bg-black hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextMusic}
                  className="rounded-full border-black hover:bg-black hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {musicPlaylists.slice(currentMusicIndex * 3, (currentMusicIndex + 1) * 3).map((playlist) => (
                <div key={playlist.id} className="aspect-square bg-gray-100 flex flex-col">
                  <div className="p-4 bg-black text-white">
                    <h3 className="font-bold">{playlist.title}</h3>
                  </div>
                  <div className="flex-1">
                    <iframe
                      src={playlist.embedUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
