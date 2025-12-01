export const movies = [
  // NOW SHOWING (First 8 movies)
  {
    id: 1,
    title: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    rating: 7.5,
    genre: "Comedy, Adventure",
    duration: "1h 54m",
    description: "Barbie suffers a crisis that leads her to question her world and her existence.",
    showtimes: ["13:45", "16:20", "19:00", "21:45"],
    status: "now-showing"
  },
  {
    id: 3,
    title: "John Wick: Chapter 4",
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
    rating: 6.5,
    genre: "Action, Adventure",
    duration: "1h 45m",
    description: "Carol Danvers teams up with two other superheroes to save the universe.",
    showtimes: ["14:30", "17:00", "19:45"],
    status: "now-showing"
  },
  {
    id: 5,
    title: "Mission: Impossible - Dead Reckoning Part One",
    poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 9.1,
    genre: "Sci-Fi, Adventure",
    duration: "2h 46m",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 10,
    title: "The Batman - Part II",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    rating: 8.9,
    genre: "Sci-Fi, Adventure",
    duration: "3h 12m",
    description: "The next chapter in the epic Avatar saga continues the story of the Sully family.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 12,
    title: "Black Panther: Wakanda Forever",
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    rating: 8.5,
    genre: "Action, Adventure",
    duration: "2h 38m",
    description: "The kingdom of Wakanda faces new challenges and threats from within and beyond.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 13,
    title: "Spider-Man: Across the Spider-Verse",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    rating: 8.8,
    genre: "Animation, Action",
    duration: "2h 20m",
    description: "Miles Morales continues his journey as Spider-Man across the multiverse.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 14,
    title: "Indiana Jones and the Dial of Destiny",
    poster: "https://image.tmdb.org/t/p/w500/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    rating: 7.9,
    genre: "Adventure, Action",
    duration: "2h 32m",
    description: "The legendary archaeologist returns for one final epic adventure.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 15,
    title: "Frozen",
    poster: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    rating: 8.2,
    genre: "Animation, Musical",
    duration: "1h 58m",
    description: "Elsa and Anna return for another magical adventure in Arendelle.",
    showtimes: [],
    status: "coming-soon"
  },
  {
    id: 16,
    title: "Star Wars: The Rise of Skywalker",
    poster: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    rating: 8.4,
    genre: "Sci-Fi, Adventure",
    duration: "2h 45m",
    description: "A new generation of Jedi rise to face emerging threats in the galaxy.",
    showtimes: [],
    status: "coming-soon"
  }
];