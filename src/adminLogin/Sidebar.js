import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { Nav,NavDropdown ,Accordion} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Sidebar = (props) => {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
 
    return (
   
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink to="/dashboard"><a class="navbar-brand" href="#">Dashboard</a></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="/customerenquiries"><a class="nav-link active" aria-current="page" href="#">Enquiries</a></NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/sales"> <a class="nav-link active" href="#">Sales</a></NavLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Cakes
          </a>
          <ul class="dropdown-menu active" aria-labelledby="navbarDropdown">
            <li><NavLink to="/addcake"><a style={{color:"black"}} class="dropdown-item" href="#">Add Cake</a></NavLink></li>
            <li><hr class="dropdown-divider"/></li>

            <li><NavLink to="/manageCake"><a style={{color:"black"}} class="dropdown-item" href="#">Edit Cake</a></NavLink></li>
            {/* <li><a style={{color:"black"}} class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Orders
          </a>
          <ul class="dropdown-menu active" aria-labelledby="navbarDropdown">
            <li><NavLink to="/orders"><a style={{color:"black"}} class="dropdown-item" href="#">Show Orders</a></NavLink></li>
            <li><a  style={{color:"black"}} class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a style={{color:"black"}} class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <NavLink to="/changepassword"><a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Change Password</a></NavLink>
        </li>
        
      <li class="nav-item">
         <NavLink to="/"> <a class="nav-link active" aria-current="page" href="#">Logout</a></NavLink>
        </li>
     
      </ul>
    
    </div>
  </div>
</nav>



        </div>
    )
}

export default Sidebar
