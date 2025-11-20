import { Link, useLocation } from "react-router-dom";
import { useState, useMemo } from "react";

function Seats() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();
  const { movie, showtime, date } = location.state || {};

  const takenSeats = useMemo(() => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const taken = [];

    console.log("Generating taken seats..."); // Debug log

    rows.forEach((row) => {
      for (let number = 1; number <= 8; number++) {
        if (Math.random() < 0.3) {
          taken.push(`${row}${number}`);
        }
      }
    });

    console.log("Taken seats:", taken); // Debug log
    return taken;
  }, []);

  const seats = useMemo(() => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const seatObjects = [];

    rows.forEach((row) => {
      for (let number = 1; number <= 8; number++) {
        const seatId = `${row}${number}`;
        const isTaken = takenSeats.includes(seatId);
        seatObjects.push({
          id: seatId,
          row: row,
          number: number,
          isTaken: isTaken,
          isSelected: selectedSeats.includes(seatId),
        });
      }
    });

    return seatObjects;
  }, [takenSeats, selectedSeats]); // Only update when selection changes

  const handleSeatClick = (seat) => {
    if (seat.isTaken) return; // Can't select taken seats

    setSelectedSeats((prev) => {
      if (prev.includes(seat.id)) {
        // Remove if already selected
        return prev.filter((id) => id !== seat.id);
      } else {
        // Add to selection
        return [...prev, seat.id];
      }
    });
  };

  const getSeatClass = (seat) => {
    if (seat.isTaken) return "btn btn-danger";
    if (seat.isSelected) return "btn btn-success";
    return "btn btn-outline-primary";
  };

  // Show error if no movie data
  if (!movie) {
    return (
      <div className="container text-center py-5">
        <h2>No Movie Selected</h2>
        <p>Please go back and select a movie and showtime first.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h1>Select Your Seats</h1>
          <div className="border-bottom pb-3 mb-3">
            <h4>{movie.title}</h4>
            <p className="mb-1">
              <strong>Date:</strong> {date} | <strong>Time:</strong> {showtime}
            </p>
            <p className="text-muted mb-0">
              {movie.genre} • {movie.duration}
            </p>
          </div>
        </div>
      </div>

      {/* Cinema Screen */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8 text-center">
          <div className="bg-dark text-white py-3 rounded">
            <h4 className="mb-0">SCREEN</h4>
          </div>
          <div className="text-center mt-2">
            <small className="text-muted">All eyes this way please</small>
          </div>
        </div>
      </div>

      {/* Seat Map */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="seat-map text-center">
            {/* Generate seat rows */}
            {["A", "B", "C", "D", "E", "F", "G", "H"].map((row) => (
              <div key={row} className="seat-row mb-2">
                <span className="row-label me-3 fw-bold">{row}</span>
                {seats
                  .filter((seat) => seat.row === row)
                  .map((seat) => (
                    <button
                      key={seat.id}
                      className={`${getSeatClass(seat)} mx-1`}
                      style={{ width: "40px", height: "40px" }}
                      onClick={() => handleSeatClick(seat)}
                      disabled={seat.isTaken}
                      title={seat.isTaken ? "Seat taken" : `Seat ${seat.id}`}
                    >
                      {seat.number}
                    </button>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seat Legend */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="d-flex justify-content-center gap-4">
            <div className="d-flex align-items-center">
              <div
                className="btn btn-outline-primary mx-2"
                style={{ width: "20px", height: "20px" }}
              ></div>
              <small>Available</small>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="btn btn-success mx-2"
                style={{ width: "20px", height: "20px" }}
              ></div>
              <small>Selected</small>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="btn btn-danger mx-2"
                style={{ width: "20px", height: "20px" }}
              ></div>
              <small>Taken</small>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Seats Summary */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="border p-3 rounded">
            <h5>Selected Seats: {selectedSeats.length}</h5>
            <p className="mb-2">
              {selectedSeats.length > 0
                ? selectedSeats.join(", ")
                : "No seats selected"}
            </p>
            <p className="fw-bold">Total: {selectedSeats.length * 35} DH</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="row justify-content-center">
        <div className="col-md-8 d-flex gap-3">
          <Link to="/" className="btn btn-outline-secondary">
            Back to Movies
          </Link>
          <Link
            to="/payment"
            state={{
              movie: movie,
              showtime: showtime,
              date: date,
              seats: selectedSeats,
              total: selectedSeats.length * 35,
            }}
            className={`btn btn-primary ${
              selectedSeats.length === 0 ? "disabled" : ""
            }`}
          >
            Continue to Payment ({selectedSeats.length} seats)
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Seats;
