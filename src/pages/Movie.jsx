// pages/Seats.jsx - Updated to receive movie data
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Seats() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();
  const { movie, showtime, date } = location.state || {};

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
      
      {/* Page Header - UPDATED WITH MOVIE INFO */}
      <div className="row mb-4">
        <div className="col">
          <h1>Select Your Seats</h1>
          <div className="border-bottom pb-3 mb-3">
            <h4>{movie.title}</h4>
            <p className="mb-1">
              <strong>Date:</strong> {date} | <strong>Time:</strong> {showtime}
            </p>
            <p className="text-muted mb-0">{movie.genre} • {movie.duration}</p>
          </div>
        </div>
      </div>

      {/* Cinema Screen */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 text-center">
          <div className="bg-dark text-white py-3 rounded">
            <h4 className="mb-0">SCREEN</h4>
          </div>
          <div className="text-center mt-2">
            <small className="text-muted">All eyes this way please</small>
          </div>
        </div>
      </div>

      {/* Seat Map - Coming next */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8 text-center">
          <p>Seat selection grid will be built here...</p>
        </div>
      </div>

      {/* Selected Seats Summary */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="border p-3 rounded">
            <h5>Selected Seats: {selectedSeats.length}</h5>
            <p className="mb-2">
              {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}
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
            className={`btn btn-primary ${
              selectedSeats.length === 0 ? 'disabled' : ''
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