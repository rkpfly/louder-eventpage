// Expanded music playlists
const allMusicPlaylists = [
  {
    id: 1,
    title: "House Classics",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX32NsLKyzScr",
    description: "The best house music tracks that define the genre",
  },
  {
    id: 2,
    title: "Hip Hop Hits",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd",
    description: "Current and classic hip hop bangers",
  },
  {
    id: 3,
    title: "Electronic Vibes",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n",
    description: "Electronic music for the dance floor",
  },
  {
    id: 4,
    title: "Bollywood Beats",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1vKzOTZ7jRm",
    description: "The hottest Bollywood tracks and remixes",
  },
  {
    id: 5,
    title: "Latin Rhythms",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX10zKzsJ2jva",
    description: "Reggaeton, salsa, and Latin fusion",
  },
  {
    id: 6,
    title: "R&B Classics",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYmmr74INdgF",
    description: "Smooth R&B and soul music",
  },
  {
    id: 7,
    title: "Techno Underground",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX6J5NfMJS675",
    description: "Underground techno and industrial beats",
  },
  {
    id: 8,
    title: "Commercial Hits",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M",
    description: "Chart-topping hits everyone knows",
  },
  {
    id: 9,
    title: "Deep House",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX83CqZsPFNDr",
    description: "Deep, progressive house music",
  },
]

export default function MusicPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">MUSIC</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allMusicPlaylists.map((playlist) => (
            <div key={playlist.id} className="bg-white border rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-square">
                <iframe
                  src={playlist.embedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{playlist.title}</h3>
                <p className="text-sm text-gray-600">{playlist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
