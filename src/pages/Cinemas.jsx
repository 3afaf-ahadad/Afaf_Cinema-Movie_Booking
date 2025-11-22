function Cinemas() {
    const cinemas = [
    {
      id: 1,
      name: "Afaf Cinema Downtown",
      address: "123 City Center, Main Street",
      hours: "9:00 AM - 11:00 PM Daily",
      features: ["IMAX", "Dolby Atmos", "VIP Lounge", "Parking"]
    },
    {
      id: 2, 
      name: "Afaf Cinema Mall",
      address: "456 Shopping Mall, North District",
      hours: "10:00 AM - 1:00 AM Daily",
      features: ["4DX", "3D", "Food Court", "Family Zone"]
    },
    {
      id: 3, 
      name: "Afaf City Center",
      address: "789 Central Plaza, Ville Nouvelle, Casablanca",
      hours: "8:00 AM - 12:00 AM Daily",
      features: ["4DX", "Family Zone", "IMAX", "VIP Lounge", "Parking", "Premium", "Dolby Vision", "Gourmet", "Valet", "3D"]
    }
  ];

  return(
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-5 fw-bold">Our Cinemas</h1>
          <p className="lead">Experience movies at our premium locations</p>
        </div>
      </div>

      <div className="row">
        {cinemas.map(cinema => (
          <div key={cinema.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{cinema.name}</h5>
                <p className="card-text">
                  <strong>📍 Address:</strong><br/>
                  {cinema.address}
                </p>
                <p className="card-text">   
                  <strong>🕒 Hours:</strong><br/>
                  {cinema.hours}
                </p>
                <div>
                  <strong>🎯 Features:</strong>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {cinema.features.map((feature, index) => (
                      <span key={index} className="badge bg-primary">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-outline-primary btn-sm">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
export default Cinemas