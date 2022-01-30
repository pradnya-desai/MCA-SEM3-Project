import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const ContactUs = () => {
  return (
    <div>
       <div style={{ marginTop: "-530px" }}>{Navbar}</div> 

        

      <div className="contact-text">
        <div className="contact-item1">
          <h2>Give Your Feedback</h2>
          <p>
            We would love to hear from you regarding your experience with our
            ordering system.<br/> Let us know what works for you and what doesn't. we
            try to deliver our best. Objective is to educate & fulfill the cake
            needs.
          </p>
        </div>

        <div className="contact-item2">
        <div class="container">

	
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input1 wide">
					<input type="text" className="contact-input" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input1">
					<input type="text" className="contact-input" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input1" style={{float:"right"}}>
					<input type="text"  className="contact-input" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input1 wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
</div>

      

        </div>
      </div>
       {/* <div style={{ marginBottom: "100px" }}>{Footer}</div>  */}
    </div>
  );
};

export default ContactUs;
