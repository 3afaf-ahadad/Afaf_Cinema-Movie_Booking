
export const movies = [
  // NOW SHOWING (First 8 movies)
  {
    id: 1,
    title: "Oppenheimer",
    poster: "https://via.placeholder.com/300x450/007bff/ffffff?text=Oppenheimer",
    rating: 8.6,
    genre: "Drama, History",
    duration: "3h 1m",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    showtimes: ["14:00", "17:30", "21:00"],
    status: "now-showing"
  },
  {
    id: 2,
    title: "Barbie",
    poster: "https://via.placeholder.com/300x450/ff69b4/ffffff?text=Barbie",
    rating: 7.5,
    genre: "Comedy, Adventure",
    duration: "1h 54m",
    description: "Barbie suffers a crisis that leads her to question her world and her existence.",
    showtimes: ["13:45", "16:20", "19:00", "21:45"],
    status: "now-showing"
  },
  {
    id: 3,
    title: "John Wick 4",
    poster: "https://via.placeholder.com/300x450/333333/ffffff?text=John+Wick+4",
    rating: 8.2,
    genre: "Action, Thriller",
    duration: "2h 49m",
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom.",
    showtimes: ["15:00", "18:15", "21:30"],
    status: "now-showing"
  },
  {
    id: 4,
    title: "The Marvels",
    poster: "https://via.placeholder.com/300x450/ff0000/ffffff?text=The+Marvels",
    rating: 6.5,
    genre: "Action, Adventure",
    duration: "1h 45m",
    description: "Carol Danvers teams up with two other superheroes to save the universe.",
    showtimes: ["14:30", "17:00", "19:45"],
    status: "now-showing"
  },
  {
    id: 5,
    title: "Mission: Impossible 7",
    poster: "https://via.placeholder.com/300x450/000080/ffffff?text=Mission+Impossible",
    rating: 8.1,
    genre: "Action, Adventure",
    duration: "2h 43m",
    description: "Ethan Hunt and his IMF team must track down a terrifying new weapon.",
    showtimes: ["16:00", "19:15", "22:30"],
    status: "now-showing"
  },
  {
    id: 6,
    title: "Elemental",
    poster: "https://via.placeholder.com/300x450/00ff00/000000?text=Elemental",
    rating: 7.3,
    genre: "Animation, Comedy",
    duration: "1h 42m",
    description: "In a city where fire, water, land and air residents live together.",
    showtimes: ["13:00", "15:30", "18:00"],
    status: "now-showing"
  },
  {
    id: 7,
    title: "Fast X",
    poster: "https://via.placeholder.com/300x450/ffa500/000000?text=Fast+X",
    rating: 6.8,
    genre: "Action, Crime",
    duration: "2h 21m",
    description: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin.",
    showtimes: ["14:15", "17:00", "20:00", "23:00"],
    status: "now-showing"
  },
  {
    id: 8,
    title: "The Little Mermaid",
    poster: "https://via.placeholder.com/300x450/00ffff/000000?text=Little+Mermaid",
    rating: 7.4,
    genre: "Adventure, Family",
    duration: "2h 15m",
    description: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs.",
    showtimes: ["12:30", "15:00", "17:30", "20:00"],
    status: "now-showing"
  },

  // COMING SOON (Next 8 movies)
  {
    id: 9,
    title: "Dune: Part Two",
    poster: "https://via.placeholder.com/300x450/8b4513/ffffff?text=Dune+Part+2",
    rating: 9.1,
    genre: "Sci-Fi, Adventure",
    duration: "2h 46m",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 10,
    title: "The Batman 2",
    poster: "https://via.placeholder.com/300x450/000000/ffffff?text=Batman+2",
    rating: 8.7,
    genre: "Action, Crime",
    duration: "2h 55m",
    description: "Bruce Wayne returns as Batman to face new threats in Gotham City.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 11,
    title: "Avatar 3",
    poster: "https://via.placeholder.com/300x450/0000ff/ffffff?text=Avatar+3",
    rating: 8.9,
    genre: "Sci-Fi, Adventure",
    duration: "3h 12m",
    description: "The next chapter in the epic Avatar saga continues the story of the Sully family.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 12,
    title: "Black Panther 3",
    poster: "https://via.placeholder.com/300x450/800080/ffffff?text=Black+Panther+3",
    rating: 8.5,
    genre: "Action, Adventure",
    duration: "2h 38m",
    description: "The kingdom of Wakanda faces new challenges and threats from within and beyond.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 13,
    title: "Spider-Man: Beyond",
    poster: "https://via.placeholder.com/300x450/ff0000/ffffff?text=Spider-Man+Beyond",
    rating: 8.8,
    genre: "Animation, Action",
    duration: "2h 20m",
    description: "Miles Morales continues his journey as Spider-Man across the multiverse.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 14,
    title: "Indiana Jones 5",
    poster: "https://via.placeholder.com/300x450/daa520/000000?text=Indiana+Jones+5",
    rating: 7.9,
    genre: "Adventure, Action",
    duration: "2h 32m",
    description: "The legendary archaeologist returns for one final epic adventure.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 15,
    title: "Frozen 3",
    poster: "https://via.placeholder.com/300x450/00bfff/000000?text=Frozen+3",
    rating: 8.2,
    genre: "Animation, Musical",
    duration: "1h 58m",
    description: "Elsa and Anna return for another magical adventure in Arendelle.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 16,
    title: "Star Wars: New Jedi",
    poster: "https://via.placeholder.com/300x450/ffff00/000000?text=Star+Wars+Jedi",
    rating: 8.4,
    genre: "Sci-Fi, Adventure",
    duration: "2h 45m",
    description: "A new generation of Jedi rise to face emerging threats in the galaxy.",
    showtimes: [],
    status: "coming-soon"
  }
];