import React from 'react'
import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
              <section id="section-3">
<footer>
<div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic">About us</div>
         <p>Being a home baker my goal is to provide lavishing and tasty 
           cakes to all my customers with utmost affection and love.</p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone">
           <a href="#"><i class="fas fa-phone-volume"></i>+91-9422461056</a>
         </div>
         <div class="email">
           <a href="#"><i class="fas fa-envelope"></i>svruddhi99@gmail.com</a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">QUICK LINKS</div>
       <div><NavLink to="/about"><a href="#">About Us</a></NavLink></div>
       <div><NavLink to="/contact"><a href="#">Contact Us</a></NavLink></div>
       <div><NavLink to="/returnpolicy"><a href="#">Return Policy</a></NavLink></div>
       <div><a href="#">Cake Making Guide</a></div>
       <div><NavLink to="/orderguide"><a href="#">How to Order Online?</a></NavLink></div>
     </div>
     
   
     <div class="right box">
       <div class="topic">Subscribe us</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Send"/>
         <div class="media-icons">
           <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
           <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
           <a href="#"><FontAwesomeIcon icon={faPhone}/></a>
           <a href="#"><FontAwesomeIcon icon={faWhatsapp}/></a>
           <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        
         </div>
       </form>
     </div>


     {/* <div class="right box">
     <div class="topic">Admin Login</div>
     <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <br/>
<br/>
         <input type="password" placeholder="Enter password"/>
         <input type="submit" name="" value="Send"/>
         </form>
         </div> */}
   </div>
   <div class="bottom">
     <p>Copyright © 2021<a href="#">Devilishly Desserts</a> All rights reserved</p>
   </div>
  </footer>
  </section>
        </div>
    )
}

export default Footer
