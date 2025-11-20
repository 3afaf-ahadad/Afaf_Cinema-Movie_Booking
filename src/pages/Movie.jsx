import { useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import { Link } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const [selectedDate, setSelectedDate] = useState("today");

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const dates = [
    { id: 'today', label: 'Today', day: 'Today' },
    { id: 'tomorrow', label: 'Tomorrow', day: 'Tomorrow' },
    { id: 'day3', label: 'Sat 16', day: 'Sat', date: '16' },
    { id: 'day4', label: 'Sun 17', day: 'Sun', date: '17' },
    { id: 'day5', label: 'Mon 18', day: 'Mon', date: '18' },
    { id: 'day6', label: 'Tue 19', day: 'Tue', date: '19' },
    { id: 'day7', label: 'Wed 20', day: 'Wed', date: '20' }
  ];

  return (
    <div className="container">
      <section className="movie-header py-4 border-bottom">
        <div className="row align-items-center">
          {/* Movie Poster */}
          <div className="col-md-4">
            <img
              src={movie.poster}
              alt={movie.title}
              className="img-fluid rounded"
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
            />
          </div>

          {/* Movie Info */}
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h1 className="display-5 fw-bold">{movie.title}</h1>
              <Link to="/seats" className="btn btn-primary btn-lg">
                Book Tickets
              </Link>
            </div>

            {/* Movie Metadata */}
            <div className="d-flex gap-4 mb-3">
              <span className="badge bg-warning text-dark fs-6">
                ⭐ {movie.rating}/10
              </span>
              <span className="fs-6">🕒 {movie.duration}</span>
              <span className="fs-6">🎭 {movie.genre}</span>
            </div>

            {/* Description Preview */}
            <p className="lead">{movie.description}</p>
          </div>
        </div>
      </section>



      <section className="showtimes-section py-4">
        <h2 className="mb-4">Showtimes</h2>
        
        {/* Date Selector */}
        <div className="mb-4">
          <h5 className="mb-3">Select Date:</h5>
          <div className="d-flex overflow-auto gap-2 pb-3">
            {dates.map(date => (
              <button
                key={date.id}
                className={`btn ${
                  selectedDate === date.id ? 'btn-primary' : 'btn-outline-primary'
                } flex-shrink-0`}
                onClick={() => setSelectedDate(date.id)}
                style={{minWidth: '100px'}}
              >
                <div className="fw-bold">{date.day}</div>
                {date.date && <small>{date.date}</small>}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h5 className="mb-3">
            Times for {dates.find(d => d.id === selectedDate)?.label}:
          </h5>
          <div className="d-flex overflow-auto gap-3 pb-3">
            {movie.showtimes && movie.showtimes.length > 0 ? (
              movie.showtimes.map((time, index) => (
                <button
                  key={index}
                  className="btn btn-outline-secondary flex-shrink-0"
                  style={{minWidth: '120px'}}
                >
                  {time}
                </button>
              ))
            ) : (
              <div className="text-muted">
                No showtimes available for this movie yet.
              </div>
            )}
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Movie;
