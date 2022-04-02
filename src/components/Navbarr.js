import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpg";
import { NavLink } from "react-router-dom";
const Navbarr = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#000" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ color: "whitesmoke" }}>
            <NavLink to="/">
              <img
                src={logo}
                alt=""
                width="70"
                height="74"
                style={{ borderRadius: "3rem" }}
              />
            </NavLink>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <NavLink to="/">HOME</NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <NavLink to="/cart">ORDER NOW</NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <NavLink to="/about">ABOUT US</NavLink>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  {" "}
                  <NavLink to="/contact">CONTACT US</NavLink>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  {" "}
                  <NavLink to="/login">ADMIN LOGIN</NavLink>{" "}
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "whitesmoke" }}>
                  <NavLink to="/orderTracker">TRACK ORDER</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbarr;
