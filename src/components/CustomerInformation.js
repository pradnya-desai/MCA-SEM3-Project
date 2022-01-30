import React from "react";
import { Breadcrumb } from "react-bootstrap";

const CustomerInformation = (props) => {
  // get the cart items and the total price from the Basket component props and pass it to the Shipping component props as cartItems and totalPrice respectively using destructuring assignment syntax  
  // const { cartItems, totalPrice } = (props.location && props.location.state)||{};
const { cartItems } = props;
  console.log(props);

  return (
    <div>
      <div className="shipping-container">

      <div class="container" style={{ paddingTop: "-5px" }}>
      <Breadcrumb>
  <Breadcrumb.Item>Cart</Breadcrumb.Item>
  <Breadcrumb.Item>
   <b>Customer Info</b>
  </Breadcrumb.Item>
</Breadcrumb>
        <div class="row input-container">
          <div class="col-xs-12">
            <div class="styled-input1 wide">
              <input type="text" name="uname" className="contact-input" required />
              <label>Name</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1">

              <input type="text" className="contact-input" required />
              <br/>
            <br/>
              <button onClick="">Get OTP</button>

              <label>Email</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1" style={{ float: "right" }}>
              <input type="text" className="contact-input" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="styled-input1 wide">
              <input
                type="text"
                style={{ cursor: "not-allowed" }}
                disabled
                value="India"
                className="contact-input"
                required
              />
              {/* <label>Name</label>  */}
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1">
              <input
                type="text"
                style={{ cursor: "not-allowed" }}
                disabled
                value="Maharashtra"
                className="contact-input"
                required
              />
              {/* <label>State</label>  */}
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1" style={{ float: "right" }}>
              <input
                type="text"
                style={{ cursor: "not-allowed" }}
                disabled
                value="Pune"
                className="contact-input"
                required
              />
              {/* <label>City</label>  */}
            </div>
          </div>
          <div class="col-xs-12">
            <div class="styled-input1 wide">
              <input type="text" className="contact-input" required />
              <label>Address</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
          <label>Select Date of Delivery</label>

            <div class="styled-input1">

              <input type="date" className="contact-input" required />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1" style={{ float: "right" }}>
              <br/>
              <input type="text" className="contact-input" required />
              <label><br/>Enter Your Area Pincode</label>
            </div>
          </div>
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

<div className="shipping-cart-items">
<h4>Shipping Price</h4>
<p style={{backgroundColor:"black"}}>{cartItems}</p>
{/* <h4>{totalPrice}</h4> */}






</div>
</div>


    </div>
  );
};

export default CustomerInformation;
