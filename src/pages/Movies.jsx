import { useState } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";

function Movies() {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  return (
    <div className="container">
      {/* Page Header & Search */}
      {/* Filter Buttons */}
      {/* Movie Grid */}
    </div>
  );
}
export default Movies;
