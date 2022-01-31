import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faPlus,
  faMinus,
  faShoppingBag,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Shipping from "./Shipping";
function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  console.log(props);

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 1000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  var deliveryType = [
    {
      value: 1,
      label: "Home Delivery",
    },
    {
      value: 2,
      label: "Pickup",
    },
  ];

  var [deliveryOption, setOption] = useState(deliveryType.label);
  const deliveryOptionChange = (e) => {
    setOption(e.label);
  };
  return (
    <section id="cart-section">
      <aside>
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && (
            <div>
              <h5 style={{ fontFamily: "monospace" }}>Cart is Empty</h5>{" "}
            </div>
          )}
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-container">
            <div>
              <img src={item.image} style={{ width: "200px" }} />
            </div>

            <div>
              <h5>{item.cname}</h5>
            </div>
            <div>
              <h5>{item.price}</h5>
            </div>
            <br />

            <div>
              <button className="Add" onClick={() => onAdd(item)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button className="Remove" onClick={() => onRemove(item)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
            <div>
              <h5>
                x {item.qty}= {item.qty * item.price}
              </h5>
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div>Items Price</div>
            <div>
              <FontAwesomeIcon icon={faRupeeSign} /> {itemsPrice}
            </div>

            <div className="row">
              <div className="col-md-6">
                <Select
                  options={deliveryType}
                  onChange={deliveryOptionChange}
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">
                <FontAwesomeIcon icon={faRupeeSign} /> {taxPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              {/* <div className="col-1 text-right">
                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                {shippingPrice.toFixed(2)}
              </div> */}
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>
                  <FontAwesomeIcon icon={faRupeeSign} /> {totalPrice.toFixed(2)}
                </strong>
              </div>
            </div>

            <div>
              <button
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
                style={{ fontWeight: "bold" }}
                onClick={(e) => {
                  deliveryOption && 
                    alert(
                      `you have selected ${cartItems.length} products with ${deliveryOption} Delivery Type Do you want to checkout?`
                    );
                  // if (deliveryOption) {
                  //   e.preventDefault();

                  //   props.history.push({
                  //     pathname: "/customerInfo",
                  //     state: {
                  //       cartItems: cartItems[0],
                  //       // totalPrice: totalPrice,
                  //     },
                  //   });
                  // }
                  // } else {
                  //   e.preventDefault();
                  //   props.history.push({
                  //     pathname: "/pickup",
                  //     state: {
                  //       cartItems: cartItems,
                  //       // totalPrice: totalPrice,
                  //     },
                  //   });
                  // }
                }}
              >
                Checkout
              </button>

              {/* modal code */}
               <div
                class="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabindex="-1"
              >
                <div class="modal-dialog modal-fullscreen">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalToggleLabel">
                        Customer Information
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div>
                        <div>
                          <h5 style={{ fontFamily: "monospace" }}>
                            You have selected the following cart items
                          </h5>
                        </div>

                        {cartItems.map((item) => (
                          <div key={item.id} className="cart-container">
                            <div>
                              <img
                                src={item.image}
                                style={{ width: "200px" }}
                              />
                            </div>

                            <div>
                              <h5>{item.cname}</h5>
                              <input type="text" value={item.cname} disabled />
                            </div>

                            <div>
                              <h5>
                                {" "}
                                <FontAwesomeIcon icon={faRupeeSign} />
                                {item.price}
                              </h5>
                            </div>

                            <div>
                              <h5>x {item.qty}</h5>
                            </div>
                          </div>
                        ))}

                        <hr></hr>
                        <div>Items Price</div>
                        <div>
                          <FontAwesomeIcon icon={faRupeeSign} /> {itemsPrice}
                        </div>
                        <div className="row">
                          <div className="col-2">Tax Price</div>
                          <div className="col-1 text-right">
                            <FontAwesomeIcon icon={faRupeeSign} />{" "}
                            {taxPrice.toFixed(2)}
                          </div>
                        </div>
                        <div className="row">
                           <div className="col-1 text-right">
                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                {shippingPrice.toFixed(2)}
                        </div>     
              
                           
                 {deliveryOption==="Home Delivery" && (
                            <div className="row">
                              <div className="col-2"> Shipping Price</div>
                              <div className="col-1 text-right">
                                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                                {shippingPrice.toFixed(2)}
                              </div>
                            </div>
                                 )
                                 
                                 }


                                  {deliveryOption==="Pickup" && (
                            <div className="row">
                              <div className="col-2"> Pickup Price</div>
                              <div className="col-1 text-right">
                                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                                {shippingPrice * 0}
                                    </div>
                                    </div>
                                  ) 
                                  }

                                      
                              
                        </div>
                                         <div className="row">
                          <div className="col-2">
                            <strong>Total Price</strong>
                          </div>
                          <div className="col-1 text-right">
                            <strong>
                              <FontAwesomeIcon icon={faRupeeSign} />{" "}
                              {totalPrice.toFixed(2)}
                            </strong>
                          </div>
                        </div>
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
              {/* <button onClick="">Get OTP</button> */}

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
              {/* <label>Name</label>   */}
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
               {/* <label>State</label>   */}
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
          <div class="col-xs-12">
            <div class="styled-input1 wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div class="col-xs-12">
            {/* <div class="btn-lrg submit-btn">Place Order</div> */}
          </div> 
        </div>
                      </div>


                      
                     
                    </div> 


 <div className="modal-body">


</div>

                  
                    <div class="modal-footer">
                    {/* <NavLink to="/shipping">  */}
                    {deliveryOption==="Pickup" && (

                     <button
                        class="btn btn-dark"
//                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                     onClick={()=>{ 
                     <Shipping cartItems={cartItems}> 
                     </Shipping>
                    props.history.push("/shipping");
                    }}
                      >
                       <b> Continue Shipping <FontAwesomeIcon icon={faShoppingBag}/></b>
                      
                      </button>
                    )}
                      {/* </NavLink> */}
                    </div>
                  </div>
                </div>
              </div>

             {/*  <div
                class="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div class="modal-dialog modal-fullscreen">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalToggleLabel2">
                        Modal 2
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Hide this modal and show the first with the button below.
                    </div>
                    <div class="modal-footer">
                      <button
                        class="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                      >
                        Back to first
                      </button> */}
                    {/* </div> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}
            </div>
          </>
        )}
      </aside>

    </section>
    
  );
}

export default withRouter(Basket);
