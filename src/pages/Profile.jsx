import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Profile() {
  const { user, logout, reservations } = useAuth();

  if (!user) {
    return (
      <div className="container text-center py-5">
        <h2>Please Login</h2>
        <p>You need to be logged in to view your profile.</p>
        <Link to="/login" className="btn btn-primary">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="card-title mb-0">My Profile</h2>
                <button onClick={logout} className="btn btn-outline-danger">
                  Logout
                </button>
              </div>

              <div className="row">
                <div className="col-md-4 text-center">
                  <div
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px", fontSize: "2rem" }}
                  >
                    {user.avatar}
                  </div>
                  <h4 className="mt-3">{user.name}</h4>
                  <p className="text-muted">{user.email}</p>
                </div>

                {reservations.length > 0 ? (
                  <div className="reservations-list">
                    {reservations.map((reservation) => (
                      <div key={reservation.id} className="card mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                src={reservation.moviePoster}
                                alt={reservation.movie}
                                className="img-fluid rounded"
                                style={{ height: "120px", objectFit: "cover" }}
                              />
                            </div>
                            <div className="col-md-9">
                              <div className="d-flex justify-content-between">
                                <h6 className="card-title">
                                  {reservation.movie}
                                </h6>
                                <span className="badge bg-success">
                                  {reservation.status}
                                </span>
                              </div>
                              <p className="mb-1">
                                <strong>Cinema:</strong> {reservation.cinema}
                              </p>
                              <p className="mb-1">
                                <strong>Date & Time:</strong> {reservation.date}{" "}
                                at {reservation.time}
                              </p>
                              <p className="mb-1">
                                <strong>Seats:</strong>{" "}
                                {reservation.seats.join(", ")}
                              </p>
                              <p className="mb-0">
                                <strong>Total:</strong> {reservation.total} DH
                              </p>
                              <small className="text-muted">
                                Booked on: {reservation.bookingDate}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="card">
                    <div className="card-body text-center py-4">
                      <h6>No reservations yet</h6>
                      <p className="text-muted mb-3">
                        Your movie reservations will appear here after booking.
                      </p>
                      <Link to="/movies" className="btn btn-primary">
                        Book Your First Movie
                      </Link>
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <h5>Preferences</h5>
                  <div className="card">
                    <div className="card-body">
                      <p className="text-muted mb-0">
                        Favorite genres, notification settings, etc. will appear
                        here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
