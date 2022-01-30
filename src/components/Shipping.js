import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
const Shipping = (props) => {
//extracting cart items from history props and storing in cartItems variable 
const {cartItems} = props;

return (
<div>

<div>{cartItems}</div>

                            <div className="cart-item">
                                {/* {cartItems.location.state.map((item) => ( 

                                    <div key={item.id} className="cart-item">
                                        <div className="cart-item-image">
                                            <img src={item.image} alt=""/>
                                            </div>
                                            </div>
                                
                                ))} */}
                                </div>
                            {/* <div>
                              <img
                                src={item.image}
                                style={{ width: "200px" }}
                              />
                            </div>

                            <div>
                              <h5>{item.cname}</h5>
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
                            </div> */}
                          </div>
                        
  )
};

export default Shipping;
