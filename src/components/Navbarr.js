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
const Navbarr = () => {


 

  return (
    <div>
    
  <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#000"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"whitesmoke"}} ><NavLink to="/"><img src={logo} alt="" width="70" height="74" style={{borderRadius:"3rem"}}/></NavLink></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to="/">HOME</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink to="/cart">ORDER NOW</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink to="/about">ABOUT US</NavLink></a>
        </li>

        <li class="nav-item">

        <a class="nav-link" href="#"> <NavLink to="/contact">CONTACT US</NavLink></a>
        </li>

        <li class="nav-item">

        <a class="nav-link" href="#">  <NavLink to="/login"><FontAwesomeIcon icon={faUser}/></NavLink> </a>
        </li>

        <li class="nav-item">
              <a class="nav-link" href="#" style={{color:"whitesmoke"}} >
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
        </li>

        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
      {/* <div className="navbar-1"  style={{position:"fixed", zIndex:"1040"}}> */}
        {/* <div className="social-icons-1">
          <ul className="icons-1">
           
            <li>
           <FontAwesomeIcon icon={faInstagram} />
            </li>
           
          </ul>
        </div> */}

        {/* <header>
         
            <img src={logo} id="logo" />
            <nav className="menus-1">
            <ul className="menu-items-1">
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/cart">ORDER NOW</NavLink></li>
              <li><NavLink to="/about">ABOUT US</NavLink></li>
            <li><NavLink to="/contact">CONTACT US</NavLink></li> */}
              {/* <li><NavLink to="/occassions-bestsellers">OCCASSIONS</NavLink></li>
              <li><NavLink to="/bakery">BAKERY</NavLink></li> */}
              {/* <li>BESTSELLERS</li> */}
          {/* <li>
          <NavLink to="/login"><FontAwesomeIcon icon={faUser}/></NavLink>
          </li>
              <li>
             
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
              
            </ul>
          </nav>
        </header> */}
      </div>
           


    

    // </div>



  );
};

export default Navbarr;
