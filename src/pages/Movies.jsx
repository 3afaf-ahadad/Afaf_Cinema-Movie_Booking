import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";
import { useEffect } from "react";
import MovieCard from "../components/common/MovieCard";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    if (searchParam) {
      setSearchTerm(searchParam);
      // Clear the URL parameter
      window.history.replaceState({}, "", "/movies");
    }
  }, []);

  const allGenres = useMemo(() => {
    const genres = new Set();
    movies.forEach((movie) => {
      movie.genre.split(", ").forEach((genre) => genres.add(genre.trim()));
    });
    return ["all", ...Array.from(genres)];
  }, []);

  // Filter movies based on selections
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      // Search filter
      const matchesSearch =
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Genre filter
      const matchesGenre =
        selectedGenre === "all" || movie.genre.includes(selectedGenre);

      // Status filter
      const matchesStatus =
        selectedStatus === "all" || movie.status === selectedStatus;

      return matchesSearch && matchesGenre && matchesStatus;
    });
  }, [searchTerm, selectedGenre, selectedStatus]);

  return (
    <div className="container">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-5 fw-bold">Browse All Movies</h1>
          <p className="lead">Discover our complete movie collection</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search movies by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="button">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="row mb-4">
        {/* Status Filter */}
        <div className="col-md-6 mb-3">
          <h6 className="mb-2">Filter by Status:</h6>
          <div className="d-flex flex-wrap gap-2">
            {["all", "now-showing", "coming-soon"].map((status) => (
              <button
                key={status}
                className={`btn btn-sm ${
                  selectedStatus === status
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setSelectedStatus(status)}
              >
                {status === "all"
                  ? "All Movies"
                  : status === "now-showing"
                  ? "Now Showing"
                  : "Coming Soon"}
              </button>
            ))}
          </div>
        </div>

        {/* Genre Filter */}
        <div className="col-md-6 mb-3">
          <h6 className="mb-2">Filter by Genre:</h6>
          <div className="d-flex flex-wrap gap-2">
            {allGenres.map((genre) => (
              <button
                key={genre}
                className={`btn btn-sm ${
                  selectedGenre === genre
                    ? "btn-secondary"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre === "all" ? "All Genres" : genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="row mb-3">
        <div className="col">
          <p className="text-muted">
            Showing {filteredMovies.length} of {movies.length} movies
            {selectedStatus !== "all" &&
              ` • ${selectedStatus.replace("-", " ")}`}
            {selectedGenre !== "all" && ` • ${selectedGenre}`}
            {searchTerm && ` • matching "${searchTerm}"`}
          </p>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="row">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4>No movies found</h4>
            <p className="text-muted">Try adjusting your search or filters</p>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setSearchTerm("");
                setSelectedGenre("all");
                setSelectedStatus("all");
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Movies;
