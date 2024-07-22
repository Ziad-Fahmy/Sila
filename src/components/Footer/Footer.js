import WhiteLogo from "../../assets/Logo.png";

import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col footer__logo">
            {/* Houzing logo */}
            <img src={WhiteLogo} alt="" />
            {/* <img className="logo" src="houzing.png" alt="Houzing Logo" /> */}
            <p>
              At our company, we strive to revolutionize the real estate
              industry by offering innovative solutions and exceptional customer
              service. Our goal is to make the process of buying, selling, or
              renting a property as seamless and stress-free as possible for our
              clients.
            </p>
          </div>
          <div className="col">
            {/* Quick Links */}
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() =>
                    window.scrollTo({
                      top: document.getElementById("Units").offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  Units
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            {/* Contact */}
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>Al Salam Road, In
                  front of Steigenberger, Sharm El Sheikh
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-phone-alt"></i> +201018146104
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-envelope"></i> info@houzing.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright Medih 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
