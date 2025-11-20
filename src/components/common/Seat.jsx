import { Link } from "react-router-dom";

function Seats() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h1>Select Your Seats</h1>
          <p className="lead">
            Choose your preferred seats for the best viewing experience
          </p>
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

      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <p>Seat map will go here...</p>
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
          <Link to="/payment" className="btn btn-primary">
            Continue to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Seats;
  