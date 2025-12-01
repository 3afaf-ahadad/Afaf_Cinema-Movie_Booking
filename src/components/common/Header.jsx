import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useAuth } from '../../context/AuthContext'; 
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const { user } = useAuth();
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

  // Hiding search on Movies page
  const isMoviesPage = window.location.pathname === "/movies";
  return (
    <header className="border-bottom">
      <div className="container-fluid">
        <div className="d-flex align-items-center .logo py-2">
          <Link className="text-decoration-none" to={"/"}>
            <span className="fs-3 fw-bold .logo text-decoration-none">
              Afaf Cinema
            </span>
          </Link>

          <nav className="d-none d-md-flex ms-4">
            <div className="d-flex gap-4">
              <Link to="/movies" className="text-decoration-none">
                Movies
              </Link>
              <Link to="/cinemas" className="text-decoration-none">
                Cinemas
              </Link>
              {user && (
                <Link to="/profile" className="text-decoration-none">
                  Profile
                </Link>
              )}
            </div>
          </nav>

          <div className="ms-auto d-flex align-items-center gap-2">
            {user ? (
              <div className="d-flex align-items-center gap-2">
                <Link to="/profile" className="btn btn-outline-primary btn-sm">
                  My Profile
                </Link>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline-primary">
                Login
              </Link>
            )}
            {!isMoviesPage && (
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;