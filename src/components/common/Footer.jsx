function Footer() {
  return (
    <footer className="border-top mt-5">
      <div className="container">
        
        <div className="text-center py-3">
          <span className="fs-4 fw-bold">Afaf Cinema</span>
        </div>


        <div className="row justify-content-center py-2">
          <div className="col-auto">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <a href="#" className="text-decoration-none">
                About us
              </a>
              <a href="#" className="text-decoration-none">
                Contact Us
              </a>
              <a href="#" className="text-decoration-none">
                Help Center
              </a>
              <a href="#" className="text-decoration-none">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>


        <div className="text-center py-3">
          <small className="text-muted">
            Afaf Cinema © 2025 All rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
