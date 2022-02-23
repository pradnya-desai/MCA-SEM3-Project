import React from "react";
import Navbarr from "./Navbarr.js";
import Footer from "./Footer.js";
import { useForm } from "react-hook-form";
import { useState } from "react";
import swal from 'sweetalert'

const ContactUs = () => {
  const [enquiry, setEnquiry] = useState({
    cname: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;
  const handleInputChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setEnquiry({ ...enquiry, [name]: value });
    console.log(enquiry);
  };
  const {
    register,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { cname, email, phone, message } = enquiry;
    const response = await fetch("/enquiry/saveEnquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cname,
        email,
        phone,
        message,
      }),
    });

    // write code to check if the enquiry is saved or not and display the message accordingly
    const result = await response.json();
    if (
      result.result == null ||
      result.result == "" ||
      result.result == undefined
    ) {
      swal(":(", "Enquiry Not Saved!", "error");
    } else {
      swal({
        title: "Enquiry Saved!",
        text: "We will get back to you soon!",
        icon: "success",
        button: "Ok",
      });
    }

  };

  return (
    <div>
      <div style={{ marginTop: "-530px" }}>{Navbarr}</div>

      <div className="contact-text">
        <div className="contact-item1">
          <h2>Give Your Feedback</h2>
          <p>
            We would love to hear from you regarding your experience with our
            ordering system.
            <br /> Let us know what works for you and what doesn't. we try to
            deliver our best. Objective is to educate & fulfill the cake needs.
          </p>
        </div>

        <div className="contact-item2">
          <form method="post" onSubmit={onSubmit}>
            <div class="container">
              <div class="row input-container">
                <div class="col-xs-12">
                  <div class="styled-input1 wide">
                    <input
                      type="text"
                      className="contact-input"
                      name="cname"
                      onChange={handleInputChange}
					  value={enquiry.cname}
                      required
                    />
                    <label>Name</label>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="styled-input1">
                    <input
                      type="text"  name="email"
                      className={`contact-input ${errors.email && "invalid"}`}
                      
                      {...register("email", {
                        required: "Email is Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                      value={enquiry.email}
					  onChange={handleInputChange}
                      required
                    />
                    <label>Email</label>
                    {errors.email && (
                      <small className="text-danger">
                        {errors.email.message}
                      </small>
                    )}
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="styled-input1" style={{ float: "right" }}>
                    <input
                      type="text" name="phone" className={`contact-input ${errors.phone && "invalid"}`}
                      
                      {...register("phone", {
                        pattern: {
                          value:
                            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                          message: "Invalid phone no",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("phone");
                      }}

					  value={enquiry.phone}
					  onChange={handleInputChange}

                      required
                    />
                    <label>Phone Number</label>
                    {errors.phone && (
                      <small className="text-danger">
                        {errors.phone.message}
                      </small>
                    )}
                  </div>
                </div>
                <div class="col-xs-12">
                  <div class="styled-input1 wide">
                    <textarea
                      onChange={handleInputChange}
                      name="message"
					  value={enquiry.message}
                      required
                    ></textarea>
                    <label>Message</label>
                  </div>
                </div>
                <div class="col-xs-12">
                  <button type="submit"><div class="btn-lrg submit-btn">Send Message</div></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div style={{ marginBottom: "100px" }}>{Footer}</div>  */}
    </div>
  );
};

export default ContactUs;
