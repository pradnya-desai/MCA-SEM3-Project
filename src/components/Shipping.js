import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
const Shipping = (props) => {
//extracting cart items from history props and storing in cartItems variable 
var {cartItems} = props;

    //creating an empty array to store cart items 
    //iterating through cartItems and storing in cartItems array 
    
return (
<div>


                            {/* <div className="cart-item"> */}
                                {/* {cartItems.map((item) => ( 

                                    <div key={item.id} className="cart-item">
                                        <div className="cart-item-image">
                                            <img src={item.image} alt=""/>
                                            <h3>
                                            <span>{i.id}</span>
                                                <span>{i.name}</span>
                                                <span>{cartItems}</span>

                                            </h3>
                                            </div>
                                            </div>
                                

                                ))} */}
                            {/* <h3>{
cartItems.map((item) => (

    <div key={item.id} className="cart-item">
        <div className="cart-item-image">
            <img src={item.image} alt=""/>
            <h3>
            <span>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>{item.price}</span>
                <span>{item.price * item.quantity}</span>
            </h3>
            </div>
            </div>

 )) }
           </h3>
                                </div> */}
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
