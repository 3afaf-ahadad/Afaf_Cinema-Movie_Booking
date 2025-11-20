import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/movies?search=${encodeURIComponent(
        searchQuery.trim()
      )}`;
      setSearchQuery("");
    }
  };

  // Hide search on Movies page
  const isMoviesPage = window.location.pathname === "/movies";
  return (
    <header className="border-bottom">
      <div className="container-fluid">
        <div className="d-flex align-items-center py-2">
          <span className="fs-3 fw-bold">Afaf Cinema</span>

          <nav className="d-none d-md-flex ms-4">
            <div className="d-flex gap-4">
              <Link to="/movies" className="text-decoration-none">
                Movies
              </Link>
              <Link to="/cinemas" className="text-decoration-none">
                Cinemas
              </Link>
            </div>
          </nav>

          <div className="ms-auto d-flex align-items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
              style={{ width: "200px" }}
            />
          </div>

          {!isMoviesPage && (
            <div className="ms-auto d-flex align-items-center gap-2">
              <form onSubmit={handleSearch} className="d-flex">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="form-control"
                  style={{ width: "200px" }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-outline-primary ms-2"
                  disabled={!searchQuery.trim()}
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
