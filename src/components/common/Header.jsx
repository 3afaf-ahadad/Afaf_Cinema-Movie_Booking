import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-bottom">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-2">
          <span className="fs-3 fw-bold">Afaf Cinema</span>

          <nav className="d-none d-md-flex">
            <div className="d-flex gap-4"></div>
          </nav>

          <div className="d-flex align-items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
