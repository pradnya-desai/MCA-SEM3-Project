import React from 'react';
import { Breadcrumb,Toast,Col,Button} from "react-bootstrap";
import { useState } from 'react';
const Pickup = () => {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const email = document.getElementById("email");

  //get the id of email using document.getElementById
    function handleEmail(){
       //check if the email is valid or not
         if(email!==""){
                //if not valid then do not show the toast
            
                toggleShowA() ;
                
            }
            else{
                //if valid then show the toast
                setShowA(!showA);
                          }
        

    }
    

    
  return (
   
    <div className="pickup-container">
     
    <div class="container" style={{ paddingTop: "-5px" }}>
    <Breadcrumb>
<Breadcrumb.Item>Cart</Breadcrumb.Item>
<Breadcrumb.Item>
 <b>Pickup</b>
</Breadcrumb.Item>
</Breadcrumb>
<Col md={6} className="mb-2">
       
        <Toast show={showA} id="toast" onClose={toggleShowA} variant="info">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Note</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body><b>An OTP Has Been Sent To Your Email-id. Kindly Check Your Email Enter That OTP In The OTP Box</b></Toast.Body>
        </Toast>
      </Col>
      <div class="row input-container">
        <div class="col-xs-12">
          <div class="styled-input1 wide">
            <input type="text" className="contact-input" required />
            <label>Name</label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="styled-input1">
            <input type="text" className="contact-input" id="email" required />
            <br/>
            <br/>
            <button onClick={handleEmail}>Get OTP</button>
            <label>Email</label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="styled-input1">
            <input type="text" className="contact-input" required />
            <label>OTP</label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="styled-input1" style={{ float: "right" }}>
            <input type="text" className="contact-input" required />
            <label>Phone Number</label>
          </div>
        </div>
       
        <div class="col-md-6 col-sm-12">
        <label>Select Date of Delivery</label>

          <div class="styled-input1">

            <input type="date" className="contact-input" required />
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
        <label>Select Time of Pickup</label>

          <div class="styled-input1">

            <input type="time" className="contact-input" required />
          </div>
        </div>
        {/* <div class="col-md-6 col-sm-12">
          <div class="styled-input1" style={{ float: "right" }}>
            <br/>
            <input type="text" className="contact-input" required />
            <label><br/>Enter Your Area Pincode</label>
          </div>
        </div> */}
        {/* <div class="col-xs-12">
          <div class="styled-input1 wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div> */}
        <div class="col-xs-12">
          <div class="btn-lrg submit-btn">Place Order</div>
        </div>
      </div>
    </div>

<div className="pickup-cart-items">
<h4>pickup details</h4>
</div>

  </div>
  )
   
};

export default Pickup;
