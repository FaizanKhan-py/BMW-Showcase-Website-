import React from "react";
import { Outlet, Link } from "react-router-dom";
import BMWLogo from "../pics/logo.png";
import fbpic from "../pics/facebookup.png";
import instapic from "../pics/instau.png";
import twpic from "../pics/twitterup.png";

const Layout = () => {
  return (
    <div>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light border border-dark">
        <div className="container-fluid ps-4">
          
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={BMWLogo}
              alt="BMW Logo"
              style={{ height: 40, width: "auto", marginRight: 8 }}
            />
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>BMW</span>
          </Link>

          {/* Hamburger toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registration">
                  <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    Registration
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    Contact Us
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">
                  <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    About Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br />
      <Outlet/>





      <hr />

      {/* Contact Info */}
      <h2>Other Contacts</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
          padding: 0,
          marginBottom: "20px",
        }}
      >
        <li>PhoneNo : 03424116080</li>
        <li>Email: fk15233@gmail.com</li>
        <li>Address: 56/8 Sher Khan Road Lahore Cantt</li>
      </ul>
      <br />

      {/* Social Media */}
      <h2>Find Us on Social Media</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>
          <a
            href="https://www.facebook.com/BMW/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={fbpic}
              alt="Facebook"
              style={{ objectFit: "contain", width: 40, height: 40 }}
            />
          </a>
        </div>
        <div style={{ marginRight: "10px" }}>
          <a
            href="https://www.instagram.com/bmw"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instapic}
              alt="Instagram"
              style={{ objectFit: "contain", width: 40, height: 40 }}
            />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/BMW" target="_blank" rel="noreferrer">
            <img
              src={twpic}
              alt="Twitter"
              style={{ objectFit: "contain", width: 40, height: 40 }}
            />
          </a>
        </div>
      </div>
      <br />
      <br />


      {/* Render nested pages here */}
    
    </div>
  );
};

export default Layout;
