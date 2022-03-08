import React from 'react'
import Navbarr from './Navbarr'
import $ from 'jquery'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
const OrderGuide = () => {
  $(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
  });
    return (
      
        <div style={{backgroundColor:"#fecacc"}}>
                    <a href="#" id="scroll" style={{display: "none"}}><FontAwesomeIcon icon={faBirthdayCake}/></a>

            <div style={{marginTop:"-52px"}}>{Navbarr}</div>
            <h1 style={{paddingTop:"15%"}}>What You Need To Do?</h1>
            <div class="timeline">
  <div class="container6 left-timeline">
    <div class="content-timeline">
      <h2>Step 1</h2>
      <p>Click On The Order Now Option Present On The Top Navigation Bar</p>
    </div>
  </div>
  <div class="container6 right-timeline">
    <div class="content-timeline">
      <h2>Step 2</h2>
      <p>You Will See Various Buttons With Different Categories Such As Occassions,
         BirthDay Cakes, Bakery etc. After Clicking On Any Of The Button You Will See A List Of Cakes</p>
    </div>
  </div>
  <div class="container6 left-timeline">
    <div class="content-timeline">
      <h2>Step 3</h2>
      <p>Click On Add To Cart To Select Desired Cakes.</p>
    </div>
  </div>
  <div class="container6 right-timeline">
    <div class="content-timeline">
      <h2>Step 4</h2>
      <p>You will See Your Cart Items At The End Of The Page Where You Can Increase Or Decrease The Quantity. Choose The Delivery Type And Click The CheckOut Button To Proceed To The Customer Information Section</p>
    </div>
  </div>
  <div class="container6 left-timeline">
    <div class="content-timeline">
      <h2>Step 5</h2>
      <p>Enter Your Information And Click On Save Information Button and Then You Will Be Redirected To The Order Confirmation Section</p>
    </div>
  </div>
  <div class="container6 right-timeline">
    <div class="content-timeline">
      <h2>Step 6</h2>
      <p>In The Order Confirmation Section Enter The Email Id To Get An Otp On The Same and Enter The Otp Below If Matched Then Your Order Request Will Be Proceeded If Not Matched Then Try Entering Your Otp Again </p>
    </div>
  </div>
</div>

        </div>
    )
}

export default OrderGuide
