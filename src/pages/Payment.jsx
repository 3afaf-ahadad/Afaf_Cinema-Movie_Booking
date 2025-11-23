import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { movie, showtime, date, cinema, seats, total } = location.state || {};

  if (!movie) {
    return (
      <div className="container text-center py-5">
        <h2>No Booking Information</h2>
        <p>Please go back and complete your seat selection first.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  // Success Popup
  if (isSuccess) {
    return (
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-success">
              <div className="card-body text-center py-5">
                <div className="text-success mb-3" style={{ fontSize: "4rem" }}>
                  ✅
                </div>
                <h2 className="text-success">Payment Successful!</h2>
                <p className="lead">
                  Your tickets have been booked successfully
                </p>
                <div className="border rounded p-3 mb-4 text-start">
                  <h5>Booking Confirmation</h5>
                  <p className="mb-1">
                    <strong>Movie:</strong> {movie.title}
                  </p>
                  <p className="mb-1">
                    <strong>Date & Time:</strong> {date} at {showtime}
                  </p>
                  <p className="mb-1">
                    <strong>Cinema :</strong> {cinema}
                  </p>
                  <p className="mb-1">
                    <strong>Seats:</strong> {seats.join(", ")}
                  </p>
                  <p className="mb-0">
                    <strong>Total:</strong> {total} DH
                  </p>
                  <p className="mt-2 small text-muted">
                    Booking #:{" "}
                    {Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                  <button
                    onClick={() => navigate("/")}
                    className="btn btn-primary"
                  >
                    Back to Home
                  </button>
                  <button
                    onClick={() => navigate("/movie/1")}
                    className="btn btn-outline-primary"
                  >
                    Book Another Movie
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h1>Payment</h1>
          <p className="lead">
            Complete your booking by entering payment details
          </p>
        </div>
      </div>

      <div className="row">
        {/* Order Summary */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <h6>{movie.title}</h6>
                <p className="mb-1">
                  <strong>Date:</strong> {date}
                </p>
                <p className="mb-1">
                  <strong>Cinema:</strong> {cinema}
                </p>
                <p className="mb-1">
                  <strong>Time:</strong> {showtime}
                </p>
                <p className="mb-1">
                  <strong>Seats:</strong> {seats.join(", ")}
                </p>
              </div>

              <div className="border-top pt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Tickets ({seats.length}):</span>
                  <span>{seats.length * 35} DH</span>
                </div>
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total:</span>
                  <span>{total} DH</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Payment Details</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handlePayment}>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Cardholder Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Processing Payment...
                      </>
                    ) : (
                      `Pay ${total} DH`
                    )}
                  </button>

                  <Link to="/seats" className="btn btn-outline-secondary">
                    Back to Seat Selection
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
