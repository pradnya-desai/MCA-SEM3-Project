import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import visitingcard from "../images/visiting-card-vru.jpg"
import Footer from './Footer.js';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Home = () => {
    return (
        <div>
                  <div class="parallax">
        <div className="discount-bar">
          <p className="blinking">
            10% discount on all orders above 500 Rs Coupon Code: Merry10
          </p>
        </div>
        <div className="photo-text">
          <h2>DELICIOUS</h2>
          <h1>BIRTHDAY CAKES</h1>
        </div>

        <div className="photo-btn-grp">
        <NavLink to="/occassions-bestsellers"> <Button type="submit" variant='dark'>VIEW MORE</Button></NavLink>
        <NavLink to="/birthday"> <Button type="submit" variant='dark'>BIRTHDAY CAKES</Button></NavLink>
        </div>
      </div>

      <section id="section-1">
        <div className="cake-delivery-info">
          <div className="cake-delivery-text">
            <h1>ONLINE CAKE DELIVERY IN PUNE</h1>
            <h2>
              My healthy and hygienic cakes delivered in Pune are freshly baked
              exclusively at home and each of these cakes are deliciously baked
              to send online in Pune and can be delivered same day, night
              delivery or overnight cake delivery in Pune city. Are you looking
              for the best dessert to serve during part and occassions? Then
              the cakes and confectionery items can be the best option for you.
              You can serve them during birthdays, anniversaries, and other
              special occasions.
            </h2>
          </div>

          <div className="shop-by-category">
            <h1>SHOP BY CATEGORY</h1>
          </div>

     
        </div>
        <div className="category-images"> 
        <NavLink to="/birthday"><button>BIRTHDAYS</button></NavLink>
        <NavLink to="/occassions-bestsellers"><button>BESTSELLERS</button></NavLink>
        <NavLink to="/bakery"><button>BAKERY</button></NavLink>
        {/* <NavLink to="/birthday"><button>OCCASSIONS</button></NavLink> */}
        </div>


       

      </section>

    

<section id="section-2">
<div class="bg-img ">
  <form action="" class="container1">
<img src={visitingcard} style={{height:"300px"}}/>
    
  </form>
</div>
    </section>



  <div style={{paddingBottom:"10px",position:"relative"}}>{Footer}</div>
        </div>
    )
}

export default Home
