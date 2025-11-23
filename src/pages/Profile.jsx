// pages/Profile.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Profile() {
  const { user, logout } = useAuth();

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
    <div className="container">
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
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                       style={{width: '80px', height: '80px', fontSize: '2rem'}}>
                    {user.avatar}
                  </div>
                  <h4 className="mt-3">{user.name}</h4>
                  <p className="text-muted">{user.email}</p>
                </div>

                <div className="col-md-8">
                  <h5>Booking History</h5>
                  <div className="card">
                    <div className="card-body">
                      <p className="text-muted mb-0">
                        No bookings yet. <Link to="/movies">Book your first movie!</Link>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5>Preferences</h5>
                    <div className="card">
                      <div className="card-body">
                        <p className="text-muted mb-0">
                          Favorite genres, notification settings, etc. will appear here.
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
    </div>
  );
}

export default Profile;