  import { useState, useEffect, useRef } from "react"
  import { Link } from "react-router-dom"
  import { Button } from "../components/ui/button"
  import { ChevronLeft, ChevronRight } from "lucide-react"
  import { useSelector, useDispatch } from "react-redux"
  import SignupPromo from "../components/SignupPromo"
  import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import VipTableModern from "./VipTablesForm"
import Offerlist from "./Offerlist"



const musicPlaylists = [
  {
    id: 1,
    title: "Official Tamasha Playlist",
    image: "../../music4.jpg",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX32NsLKyzScr",
  },
  {
    id: 2,
    title: "Hip Hop Hits",
    image: "../../music2.jpg",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
  },
  {
    id: 3,
    title: "Electronic Vibes",
    image: "../../music3.jpg",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n",
  },
  {
    id: 4,
    title: "Bollywood Beats",
    image: "../../music4.jpg",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX1vKzOTZ7jRm",
  },
  {
    id: 5,
    title: "Latin Rhythms",
    image: "../../music5.jpg",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX10zKzsJ2jva",
  },
  {
    id: 6,
    title: "R&B Classics",
    image: "../../music6.jpg",
    link: "https://open.spotify.com/playlist/37i9dQZF1DWYmmr74INdgF",
  },
];



  export default function Home() {
    const [showVipModal, setShowVipModal] = useState(false);
    const [scrollText, setScrollText] = useState(
      "TAMASHA CLUB - THE ULTIMATE NIGHTLIFE EXPERIENCE - EVERY SATURDAY NIGHT - ",
    )
    const [currentEventIndex, setCurrentEventIndex] = useState(0)
    const [currentAllEventIndex, setCurrentAlleventIndex] = useState(0)
    const [currentSpecialEventIndex, setCurrentSpecialEventIndex] = useState(0)
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
    const ticketsRef = useRef(null)
    const events = useSelector(state => state.Events.events).filter(event => event.status);
    const offline = useSelector(state => state.Events.offline);
    const loading = useSelector(state => state.Events.loading);
    const error = useSelector(state => state.Events.error);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
      const interval = setInterval(() => {
        setScrollText((prev) => prev.substring(1) + prev.charAt(0))
      }, 150)

      return () => clearInterval(interval)
    }, [])


    // useEffect(() => {
    //   dispatch(fetchEvents());
    // }, [dispatch])

    // Animation for SVG letters
    useEffect(() => {
      if(!loading)
      {
      const words = ["TAMASHA", "HOME", "AWAY", "FROM", "HOME"];
      const container = document.getElementById("animator");

      let currentWordIndex = 0;
      let phase = "reveal"; // reveal → hold → hide
      let visibleLetters = [];

      function showNextFrame() {
        const word = words[currentWordIndex];
        if (phase === "reveal") {
          if (visibleLetters.length < word.length) {
            visibleLetters.push(word[visibleLetters.length]);
            updateDisplay();
            setTimeout(showNextFrame, 100);
          } else {
            phase = "hold";
            setTimeout(showNextFrame, 800);
          }
        } else if (phase === "hold") {
          phase = "hide";
          setTimeout(showNextFrame, 400);
        } else if (phase === "hide") {
          if (visibleLetters.length > 0) {
            visibleLetters.pop();
            updateDisplay();
            setTimeout(showNextFrame, 60);
          } else {
            phase = "reveal";
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(showNextFrame, 200);
          }
        }
      }

      function updateDisplay() {
        container.innerHTML = "";
        visibleLetters.forEach((char, i) => {
          const span = document.createElement("span");
          span.classList.add("letter", "show");
          span.textContent = char;
          container.appendChild(span);
        });
      }

      // Start the loop
      showNextFrame()
    };
    }, []);


    const nextEvent = () => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length)
    }

    const prevEvent = () => {
      setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
    }

    const nextResident = () => {
      setCurrentAlleventIndex((prev) => (prev + 1) % Math.ceil(events.length / 4))
    }

    const prevResident = () => {
      setCurrentAlleventIndex((prev) => (prev - 1 + Math.ceil(events.length / 4)) % Math.ceil(events.length / 4))
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
      window.open("/events", "_blank")
    }

    return (
      <>
        <div className="pt-12">
          <div>

            {/* <section className="h-screen flex flex-col justify-center items-center relative">

              <div class="word-animator" id="animator"></div>
              
              <div className=" bottom-0 left-0 right-0 text-black py-2 px-4">
                <div className="flex justify-center items-center px-4">
                <p className="text-lg text-center max-w-9xl text-black">
                  Welcome to the future of clubbing. Officially the World's #1 Club, Tamasha is a 360 nightlife experience featuring the world's best DJs, incredible production, plus so much more.
                  As a multi-room venue, every element has been precision-engineered to deliver a new excellence in clubbing.
                  Our pioneering music program encompasses three state-of-the-art rooms, with cutting-edge artists, surprise special guests and impromptu B2Bs.
                </p>
              </div>
              <br /> <br />
                <div className="container mx-auto">
                  <h2 className="text-4xl font-bold mb-6 text-center">TICKETS</h2>
                  <div className="flex justify-center space-x-4">
                    <Button onClick={openReadMore} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                      Read More
                    </Button>
                    <Link to="/vip-tables">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                      >
                        VIP Tables
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </section> */ }

          {/* hero page section */}
            <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">

              {/* Word Animator */}
              <div className="relative z-10 word-animator" id="animator"></div>

              {/* Tickets Section */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12 z-10">
                <div className="text-white px-6 py-6 w-full max-w-2xl mb-12">
                  <h2 className="text-4xl font-bold mb-6 text-center p-2">TICKETS</h2>
                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={openReadMore}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                    >
                      Get Tickets!
                    </Button>

                    <Button
                      onClick={() => setShowVipModal(true)}
                      className="sm:hidden bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 mob-button"
                    >
                      VIP Tables
                    </Button>

                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* <section className="py-4 overflow-hidden border-y border-black">
            <div className="whitespace-nowrap text-2xl font-bold">{scrollText.repeat(3)}</div>
          </section> */}

          {/* UPCOMING events */}
          {/* <section ref={ticketsRef} className="py-12 text-black">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 ">UPCOMING EVENTS</h2>

              <div className="relative bg-black border border-white text-white p-8 rounded-lg">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold">{events[currentEventIndex].date}</h3>
                  <div className="flex space-x-2">
                    <Button
                      
                      size="icon"
                      onClick={prevEvent}
                      className="rounded-full border-white text-white hover:bg-white hover:text-black"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      
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
                    <img
                      src={events[currentEventIndex].image || "/placeholder.svg"}
                      alt={events[currentEventIndex].title}
                      className="max-w-sm h-auto aspect-[3/4] object-cover flex justify-center items-center mx-auto mb-6 rounded-lg shadow-lg"
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
                      <Link to={events[currentEventIndex].link}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">BUY TICKETS</Button>
                      </Link>
                      <Link to="/vip-tables">
                        <Button
                        variant="ghost"
                          className="w-full text-white hover:bg-white hover:text-black"
                        >
                          VIP TABLES
                        </Button>
                      </Link>
                      <Link to={events[currentEventIndex].link}>
                        <Button variant="ghost" className="w-full text-white hover:bg-white hover:text-black">
                          FIND OUT MORE
                        </Button>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>  */}

          {/* Upcoming events */}
          {/* <section ref={ticketsRef} className="py-12 text-black">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12">UPCOMING EVENTS</h2>

              {events.length === 0 ? (
                // Show this if there are no events
                <div className="text-center py-12 text-2xl font-semibold">
                  No events right now! Stay tuned!
                </div>
              ) : (
                // Else show the full slider
                <div className="relative bg-black border border-white text-white p-8 rounded-lg">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold">
                      {new Date(events[currentEventIndex].start_date).toLocaleDateString("en-GB", {
                        weekday: "short",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour : "numeric",
                        minute : "numeric",
                        hour12 : true,
                      })}
                    </h3>
                    <div className="flex space-x-2">
                      <Button
                        size="icon"
                        onClick={prevEvent}
                        className="rounded-full border-white text-white hover:bg-white hover:text-black"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
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
                      <img
                        src={`${import.meta.env.VITE_API_URL}/${events[currentEventIndex].imgsrc}` || "/placeholder.svg"}
                        alt={events[currentEventIndex].name}
                        className="max-w-sm h-[300px] aspect-[3/4] object-cover flex justify-center items-center mx-auto mb-6 rounded-lg shadow-lg"
                      />
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-4">{events[currentEventIndex].name}</h3>
                        <p className="mb-6">{events[currentEventIndex].description}</p>
                      </div>

                      <div className="space-y-4">
                        <a href={events[currentEventIndex].redirection_url} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">BUY TICKETS</Button>
                        </a>
                        <Link to="/vip-tables">
                          <Button variant="ghost" className="w-full text-white hover:bg-white hover:text-black">
                            VIP TABLES
                          </Button>
                        </Link>
                        <a href={events[currentEventIndex].redirection_url} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" className="w-full text-white hover:bg-white hover:text-black">
                            FIND OUT MORE
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section> */}



          {/* Events section */}
          <section className="py-12 ">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between items-center mb-12">
                <h2 className="text-4xl font-bold">EVENTS</h2>
                <div className="flex items-center space-x-4">
                  <Link to="/events">
                    <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                      SHOW ALL
                    </Button>
                  </Link>
                  <div className="flex space-x-2 mob-button">
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
              </div>

              
              
              {/* Event slider */}
              {events.length === 0 ? (
              
              <div className="text-center py-12 text-2xl font-semibold">
                No events right now! Stay tuned!
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {events.slice(currentAllEventIndex * 4, (currentAllEventIndex + 1) * 4).map((event) => (
                  <div key={event._id} className="text-center group shadow-lg rounded-lg p-4">
                    <div className="mb-4 aspect-square relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={`${import.meta.env.VITE_API_URL}/${event.imgsrc}` || "/placeholder.svg"}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay with buttons */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 hidden sm:flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-2">
                        <a href={event.redirection_url}>
                          <Button variant="default" className="px-5 w-32 bg-blue-600 hover:bg-blue-700 text-white">
                            Buy Now!
                          </Button>
                        </a>

                        <Link to="/vip-tables">
                          <Button variant="secondary" className="w-32">
                            Book Table
                          </Button>
                        </Link>

                        <a href={event.redirection_url}>
                          <Button variant="default" className="w-32 px-5">
                            More Info
                          </Button>
                        </a>
                      </div>

                      {/* Mobile-only: full clickable area that redirects to Buy Now */}
                      <a
                        href={event.redirection_url}
                        className="absolute inset-0 block sm:hidden z-10"
                      />
                    </div>
                    <h3 className="md:text-xl font-bold">{event.name}</h3>
                  </div>
                ))}
              </div>

                


              )}
            </div>
          </section>

          {/* <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold">SPECIAL EVENTS</h2>
              
                <div className="flex items-center space-x-4">
                  <Link to="/special-events">
                    <Button className="border-white text-white hover:bg-white hover:text-black">
                      SHOW ALL
                    </Button>
                  </Link>
                  <div className="flex space-x-2">
                    <Button
                      
                      size="icon"
                      onClick={prevSpecialEvent}
                      className="rounded-full border-white text-white hover:bg-white hover:text-black"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                    
                      size="icon"
                      onClick={nextSpecialEvent}
                      className="rounded-full border-white text-white hover:bg-white hover:text-black"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                {specialEvents.slice(currentSpecialEventIndex * 2, (currentSpecialEventIndex + 1) * 2).map((event) => (
                  <Link to={event.link} key={event.id} className="group">
                    <div className="p-8 bg-black rounded-lg relative aspect-video overflow-hidden mb-4">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
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
          </section> */}

          {/* <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold">MUSIC</h2>
                <div className="flex items-center space-x-4">
                  <Link to="/music">
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
          </section>  */}

         <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center mb-12">
              <h2 className="text-4xl font-bold">MUSIC</h2>
              <div className="flex items-center space-x-4">
                <Link to="/music">
                  <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                    SHOW ALL
                  </Button>
                </Link>
                <div className="flex space-x-2 mob-button">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {musicPlaylists
                .slice(currentMusicIndex * 3, (currentMusicIndex + 1) * 3)
                .map((playlist) => (
                  <div
                    key={playlist.id}
                    className="rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={playlist.image}
                        alt={playlist.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="p-4 flex flex-col items-center justify-between">
                      <h3 className="text-xl font-bold text-center mb-4">{playlist.title}</h3>
                      <a
                        href={playlist.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full"
                      >
                        Listen
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

          <Offerlist />

          <section className="w-full flex flex-col justify-center items-center px-6 py-12">
            <div className="max-w-4xl">
              {/* Main Title */}
              <h1 className="text-3xl font-bold mb-8  text-center">TAMASHA</h1>

              {/* Subheading */}
              <h2 className="text-2xl font-bold mb-6  text-center">Welcome to the future of nightlife.</h2>

              {/* Paragraphs */}
              <p className="text-lg text-gray-700 mb-4">
                Tamasha is redefining nightlife experiences across the globe — an immersive world of music, dance, and culture where every night is unforgettable.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Our multi-room venues are designed to deliver the ultimate sensory experience, with cutting-edge sound, spectacular visuals, and top-tier DJs bringing the energy to life.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                At Tamasha, every event is curated to perfection — from exclusive VIP experiences to vibrant dance floors that keep you moving all night long.
              </p>

              <p className="text-lg text-gray-700">
                Discover your new favorite party, indulge in luxury, and lose yourself in the rhythm. Welcome to Tamasha — where the night comes alive.
              </p>
            </div>
          </section>

          
          <SignupPromo />

          <Dialog open={showVipModal} onOpenChange={setShowVipModal}>
            <DialogContent className="bg-white shadow-none max-w-4xl p-0 overflow: scroll">
              <div className="">
                <VipTableModern />
              </div>
            </DialogContent>
          </Dialog>

        </div>
      
      </>
    )
  }