import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card" style={{ minWidth: "200px" }}>
      <img
        src={movie.poster}
        alt={movie.title}
        className="card-img-top"
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          <small className="text-muted">⭐ {movie.rating}/10</small>
        </p>
        <p className="card-text">
          <small>{movie.genre}</small>
        </p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary btn-sm">
          {movie.status === "now-showing" ? "Book Now" : "View Details"}
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
