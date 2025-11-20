import { Link } from "react-router-dom";
import { movies } from "../data/movies";
import MovieCard from "../components/common/MovieCard";

function Home() {
  const featuredMovie = movies[0];
  const nowShowing = movies.filter((movie) => movie.status === "now-showing");
  const comingSoon = movies.filter((movie) => movie.status === "coming-soon");

  return (
    <div className="container-fluid">
      <section className="hero-section bg-light py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">{featuredMovie.title}</h1>
              <p className="lead mb-4">{featuredMovie.description}</p>
              <div className="d-flex gap-3">
                <button className="btn btn-outline-primary btn-lg">
                  Play Trailer
                </button>
                <Link
                  to={`/movie/${featuredMovie.id}`}
                  className="btn btn-primary btn-lg"
                >
                  Book Tickets
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={featuredMovie.poster}
                alt={featuredMovie.title}
                className="img-fluid rounded"
                style={{ height: "400px", objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="now-showing mb-5">
        <div className="container">
          <h2 className="mb-4">Now Showing</h2>
          <div className="d-flex overflow-auto gap-3 pb-3">
            {nowShowing.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      <section className="coming-soon">
        <div className="container">
          <h2 className="mb-4">Coming Soon</h2>
          <div className="d-flex overflow-auto gap-3 pb-3">
            {comingSoon.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
