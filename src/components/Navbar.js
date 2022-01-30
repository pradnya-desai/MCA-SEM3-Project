import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpg";
import { NavLink } from 'react-router-dom';
const Navbar = () => {


 

  return (
    <div>
      <div className="navbar-1"  style={{position:"fixed", zIndex:"1040"}}>
        {/* <div className="social-icons-1">
          <ul className="icons-1">
           
            <li>
           <FontAwesomeIcon icon={faInstagram} />
            </li>
           
          </ul>
        </div> */}

        <header>
         
            <img src={logo} id="logo" />
            <nav className="menus-1">
            <ul className="menu-items-1">
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/cart">ORDER NOW</NavLink></li>
              <li><NavLink to="/about">ABOUT US</NavLink></li>
            <li><NavLink to="/contact">CONTACT US</NavLink></li>
              {/* <li><NavLink to="/occassions-bestsellers">OCCASSIONS</NavLink></li>
              <li><NavLink to="/bakery">BAKERY</NavLink></li> */}
              {/* <li>BESTSELLERS</li> */}
          <li>
          <NavLink to="/login"><FontAwesomeIcon icon={faUser}/></NavLink>
          </li>
              <li>
             
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
              
            </ul>
          </nav>
        </header>
      </div>
           


    

    </div>



  );
};

export default Navbar;
