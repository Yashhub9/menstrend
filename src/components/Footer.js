import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          {/* Left */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">Men's Wear</h5>
            <p className="mb-0" style={{ fontSize: '14px' }}>Style. Comfort. Confidence.</p>
          </div>

          {/* Middle */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Right */}
          <div className="col-md-4">
            <h6>Follow Us</h6>
            <a href="#" className="text-white me-3 text-decoration-none">Instagram</a>
            <a href="#" className="text-white text-decoration-none">Facebook</a>
          </div>
        </div>

        <hr className="border-light my-3" />

        <p className="mb-0" style={{ fontSize: '13px' }}>
          &copy; {new Date().getFullYear()} Men's Wear. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
