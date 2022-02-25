import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
  faPlus,
  faMinus,
  faShoppingBag,
  faRupeeSign,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Shipping from "./Shipping";
import swal from "sweetalert";
function Basket(props) {
  useEffect(() => {
    getOrders();
  }, []);

  const { cartItems, onAdd, onRemove } = props;
 //save the cartItems in a state variable
  //const [cartItemsState, setCartItemsState] = useState(cartItems);


  console.log(props);
  console.log(cartItems);
//extract the cname from the cartItems array using map function and save it in a variable called cname 
var cname = cartItems.map((x) => x.cname);
  console.log(cname);
var price = cartItems.map((x) => x.price);
  console.log(price);
var qty = cartItems.map((x) => x.qty);

var cakeDetails =[];
for(var i=0;i<cname.length;i++)
{
  cakeDetails.push({cakeName:cname[i],cakePrice:price[i],cakeQuantity:qty[i]});
}

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 1000 ? 20 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  window.location.hash = "";
  window.location.hash = ""; //again because google chrome don't insert first hash into history
  window.onhashchange = function () {
    window.location.hash = "";
  };

async function getOrders(){
//  try{
//   const response = await fetch("/order/getOrder");
//   var data = await response.json();
//   console.log(data);
// }
// catch(error){
//   console.log(error);

// }
// //extract the last id from the data and save it in a variable called id 
// var id = data.result.orderData[data.result.orderData.length-1].id;
// console.log(id);
// //code to increment the id by 1 and save it in a variable called newId
//  var newId = id+1;
// console.log(newId);




}



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
  
  const [otp, setOtp] = useState(
    new Array(4).fill(""),
    );

  
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  var n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7,
    n8,
    n9,
    n10,
    n11,
    n12,
    n13,
    n14,
    n15,
    n16,
    n17,
    n18;
  function sync() {
    n1 = document.getElementById("n1");
    n2 = document.getElementById("n2");
    n3 = document.getElementById("n3");
    n4 = document.getElementById("n4");
    n5 = document.getElementById("n5");
    n6 = document.getElementById("n6");
    n7 = document.getElementById("n7");
    n8 = document.getElementById("n8");
    n9 = document.getElementById("n9");
    n10 = document.getElementById("n10");
    n11 = document.getElementById("n11");
    n12 = document.getElementById("n12");
    n13 = document.getElementById("n13");
    n14 = document.getElementById("n14");
    n15 = document.getElementById("n15");
    n16 = document.getElementById("n16");
    n17 = document.getElementById("n17");
    n18 = document.getElementById("n18");
    
    // n2.textContent = n1.value;
    // n4.textContent = n3.value;
    // n6.textContent = n5.value;
    // n8.textContent = n7.value;
    // n10.textContent = n9.value;
    // n12.textContent = n11.value;
    // n14.textContent = n13.value;
    // n16.textContent = n15.value;
    //  n18.textContent = n17.value;
    
  }

  const [customerInfo, setCustomerInfo] = useState({
    custName: "",
    custEmail: "",
    custPhone: "",
    custCountry: "India",
    custState: "Maharashtra",
    custCity: "Pune",
    custAddress: "",
    custPincode: "",
    dateOfDelivery: "",
    custMessage: "",
  });

  let name, value;
  const handleInputChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setCustomerInfo({ ...customerInfo, [name]: value });
    console.log(customerInfo);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const {
      custName,
      custEmail,
      custPhone,
      custCountry,
      custState,
      custCity,
      custAddress,
      custPincode,
      dateOfDelivery,
      custMessage,
    } = customerInfo;
    const response = await fetch("/customer/saveCustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        custName,
        custEmail,
        custPhone,
        custCountry,
        custState,
        custCity,
        custAddress,
        custPincode,
        dateOfDelivery,
        custMessage,
      }),
    });

    // write code to check if the enquiry is saved or not and display the message accordingly
    const result = await response.json();
    if (
      result.result == null ||
      result.result == "" ||
      result.result == undefined
    ) {
      swal(":(", "Customer Information not saved !", "error");    } else {
      swal({
        title: "Customer Information Saved!",
        text: "Click on Continue to Place your Order!",
        icon: "success",
        button: "Ok",
      });    }
  };

  const [customerOtpEmail, setCustomerOtpEmail] = useState({
    custEmail: "",
  });

  // let name,value;
  const handleInputChangeOtpEmail = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setCustomerOtpEmail({ ...customerOtpEmail, [name]: value });
    console.log(customerOtpEmail);
  };

  const onSubmitOtpEmail = async (e) => {
    e.preventDefault();
    const { custEmail } = customerOtpEmail;
    const response = await fetch("/customer/getcustomerData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        custEmail,
      }),
    });
    const result = await response.json();
    if (
      result.result == null ||
      result.result == "" ||
      result.result == undefined
    ) {
      swal(":(", "Customer Information not found!", "error");    } else {
      swal({
        title: "Customer Information Found!",
        text: "Click on get OTP to confirm your order!",
        icon: "success",
        button: "Ok",
      });       setCustomerInfo({
        custName: result.result.customerData.custName,
        custEmail: result.result.customerData.custEmail,
        custPhone: result.result.customerData.custPhone,
        custCountry: result.result.customerData.custCountry,
        custState: result.result.customerData.custState,
        custCity: result.result.customerData.custCity,
        custAddress: result.result.customerData.custAddress,
        custPincode: result.result.customerData.custPincode,
        dateOfDelivery: result.result.customerData.dateOfDelivery,
        custMessage: result.result.customerData.custMessage,
      });
      // setCustomerInfo(result.customerData[0]);
    }
    console.log(result);
  };


const validateOtp=async(e)=>{
  e.preventDefault();

 // const {frontEndOtp}=otp;

  const response=await fetch("/customer/checkOtp",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
     'otp':otp.join("")
    })
  })
  const result=await response.json();
  if(result.result==null || result.result=="" || result.result==undefined){
    swal(":(","OTP not matched!","error");
  }
  else{
    swal({
      title: "OTP Matched!",
      text: "Click on place order",
      icon: "success",
      button: "Ok",
    }); 
  }

}

const [orderInfo,setOrderInfo]=useState({

  cakeDetails:[{
    
cartItems:[{
  cakeName:'',
  cakePrice:"",
  cakeQuantity:"",
}]

  }],

  allItemsPrice:'',
  totalOrderedProducts:'',
  orderTaxPrice:'',
  orderShippingPrice:'',
orderDeliveryType:'',
orderTotalPrice:'',
// customerName:'',
// customerEmail:'',
// customerPhone:'',
// customerAddress:'',
// customerPincode:'',
// customerMessage:'',
// dateOfDelivery:'',

})

const handleInputChangeOrderInfo=(e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value;
  setOrderInfo({...orderInfo,[name]:value});
  console.log(orderInfo);
}

const onSubmitOrderInfo=async(e)=>{
  e.preventDefault();
//   const {
//     cakeDetails, allItemsPrice,totalOrderedProducts,orderTaxPrice, orderShippingPrice,orderDeliveryType,orderTotalPrice,
// dateOfDelivery}=orderInfo;
//const {cakeDetails}=orderInfo;


try{
  const response = await fetch("/order/getOrder");
  var data = await response.json();
  console.log(data);
}
catch(error){
  console.log(error);

}
//extract the last id from the data and save it in a variable called id 
var id = data.result.orderData[data.result.orderData.length-1].id;
console.log(id);
//code to increment the id by 1 and save it in a variable called newId
 var newid = id+1;
console.log(newid);

var newId=Number(newid);



const {custName,custEmail,custPhone,custAddress,custPincode,custMessage}=customerInfo;





  const response=await fetch("/order/saveOrder",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      // cakeDetails:[{ 
      //   cartItems:{
      //   cartItems:""
      //   },
      // }],
      // allItemsPrice,
      // totalOrderedProducts,
      // orderTaxPrice,
      // orderShippingPrice,
      // orderDeliveryType,
      // orderTotalPrice,

      


     'cakeDetails':cakeDetails,

      'allItemsPrice':itemsPrice,
      'totalOrderedProducts':cartItems.length,
      'taxPrice':taxPrice,
      'shippingPrice':shippingPrice,
      //'orderDeliveryType':deliveryType,
      'totalPrice':totalPrice,
      'id':newId,

customerName:custName,
customerEmail:custEmail,
customerPhone:custPhone,
customerAddress:custAddress,
customerPincode:custPincode,
customerMessage:custMessage,
//dateOfDelivery:dateOfDelivery,


    })
  })
  const result=await response.json();
  if(result.result==null || result.result=="" || result.result==undefined){
    swal(":(","Order not placed!","error");
  }
  else{
    swal({
      title: "Order Saved!",
      text: "Wait for the confirmation mail from us :) For any queries call us on +91-9422461056",
      icon: "success",
      button: "Ok",
    }); 
  }
}

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
            {/* <div className="row"> */}
              {/* <div className="col-2">Shipping Price</div> */}
              {/* <div className="col-1 text-right">
                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                {shippingPrice.toFixed(2)}
              </div> */}
            {/* </div> */}

            <div className="row">
    
                {deliveryOption == "Pickup" && (
                  <>
                    {" "}
                    <div className="row">
                      <div className="col-2">Shipping Price</div>

                      <div className="col-1 text-right">
                        <FontAwesomeIcon icon={faRupeeSign} />
                        {shippingPrice - 20}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2"><strong>Total Price</strong></div>
                      <div className="col-1 text-right">
                        <FontAwesomeIcon icon={faRupeeSign} />{" "}
                        {totalPrice.toFixed(2) - 20}
                      </div>
                    </div>
                  </>
                )}
                {deliveryOption == "Home Delivery" && (
                  <>
                    <div className="row">
                      <div className="col-2">Shipping Price</div>
                      <div className="col-1 text-right">
                        <FontAwesomeIcon icon={faRupeeSign} />
                         {shippingPrice}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-2">
                        <strong>Total Price</strong></div>
                      <div className="col-1 text-right">
                        <FontAwesomeIcon icon={faRupeeSign} />{" "}
                        {totalPrice.toFixed(2)}
                      </div>
                    </div>
                  </>
                )}
             
            </div>

            <div>
              <button
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
                style={{ fontWeight: "bold" }}
                onClick={(e) => {
                  deliveryOption &&
                  swal(`you have selected ${cartItems.length} products with 
                  ${deliveryOption} Delivery Type `)
                   


//                     import React from 'react'
// import swal from '@sweetalert/with-react'
 
// const onPick = value => {
//   swal("Thanks for your rating!", `You rated us ${value}/3`, "success")
// }
 
// const MoodButton = ({ rating, onClick }) => (
//   <button 
//     data-rating={rating}
//     className="mood-btn" 
//     onClick={() => onClick(rating)}
//   />
// )
 
// swal({
//   text: "How was your experience getting help with this issue?",
//   buttons: {
//     cancel: "Close",
//   },
//   content: (
//     <div>
//       <MoodButton 
//         rating={1} 
//         onClick={onPick}
//       />
//       <MoodButton 
//         rating={2} 
//         onClick={onPick}
//       />
//       <MoodButton 
//         rating={3} 
//         onClick={onPick}
//       />
//     </div>
//   )
// })
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
                              {/* <input type="text" value={item.cname} name="cakeName" onChange={handleInputChangeOrderInfo} disabled /> */}
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
                          {/* <div className="col-1 text-right">
                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                {shippingPrice.toFixed(2)}
                        </div>      */}

                          {deliveryOption === "Home Delivery" && (
                            <>
                              <div className="row">
                                <div className="col-2"> Shipping Price</div>
                                <div className="col-1 text-right">
                                  <FontAwesomeIcon icon={faRupeeSign} />{" "}
                                  {shippingPrice.toFixed(2)}
                                </div>
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
                            </>
                          )}

                          {deliveryOption === "Pickup" && (
                            <>
                              <div className="row">
                                <div className="col-2"> Pickup Price</div>
                                <div className="col-1 text-right">
                                  <FontAwesomeIcon icon={faRupeeSign} />{" "}
                                  {shippingPrice * 0}
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-2">
                                  <strong>Total Price</strong>
                                </div>
                                <div className="col-1 text-right">
                                  <strong>
                                    <FontAwesomeIcon icon={faRupeeSign} />{" "}
                                    {totalPrice.toFixed(2) - 20}
                                  </strong>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        {/* <div className="row">
                          <div className="col-2">
                            <strong>Total Price</strong>
                          </div>
                          <div className="col-1 text-right">
                            <strong>
                              <FontAwesomeIcon icon={faRupeeSign} />{" "}
                              {totalPrice.toFixed(2)}
                            </strong>
                          </div>
                        </div> */}
                        <br />
                        <hr />
                        <form onSubmit={onSubmit} method="post">
                          <div class="row input-container">
                            <h5>
                              Enter The Details Below To Continue Shipping
                            </h5>

                            <div class="col-xs-12">
                              <div class="styled-input1 wide">
                                <input
                                  type="text"
                                  onChange={handleInputChange}
                                  value={customerInfo.custName}
                                  name="custName"
                                  id="n1"
                                  onKeyUp={sync}
                                  className="contact-input"
                                  required
                                />
                                <label>Name</label>
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <div class="styled-input1">
                                <input
                                  type="text"
                                  onChange={handleInputChange}
                                  value={customerInfo.custEmail}
                                  name="custEmail"
                                  id="n3"
                                  onKeyUp={sync}
                                  className="contact-input"
                                />

                                {/* <button onClick="">Get OTP</button> */}

                                <label>Email</label>
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <div
                                class="styled-input1"
                                style={{ float: "right" }}
                              >
                                <input
                                  type="text"
                                  name="custPhone"
                                  id="n5"
                                  value={customerInfo.custPhone}
                                  onChange={handleInputChange}
                                  onKeyUp={sync}
                                  className="contact-input"
                                  required
                                />
                                <label>Phone Number</label>
                              </div>
                            </div>
                            <div class="col-xs-12">
                              <div class="styled-input1 wide">
                                <input
                                  type="text"
                                  style={{ cursor: "not-allowed" }}
                                  disabled
                                  value={customerInfo.custCountry}
                                  className="contact-input"
                                  required
                                  name="custCountry"
                                  id="n7"
                                  onKeyUp={sync}
                                  onChange={handleInputChange}
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
                                  value={customerInfo.custState}
                                  className="contact-input"
                                  required
                                  name="custState"
                                  id="n9"
                                  onKeyUp={sync}
                                  onChange={handleInputChange}
                                />
                                {/* <label>State</label>   */}
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <div
                                class="styled-input1"
                                style={{ float: "right" }}
                              >
                                <input
                                  type="text"
                                  style={{ cursor: "not-allowed" }}
                                  disabled
                                  value={customerInfo.custCity}
                                  className="contact-input"
                                  required
                                  name="custCity"
                                  id="n11"
                                  onKeyUp={sync}
                                  onChange={handleInputChange}
                                />
                                {/* <label>City</label>  */}
                              </div>
                            </div>
                            <div class="col-xs-12">
                              <div class="styled-input1 wide">
                                <input
                                  name="custAddress"
                                  value={customerInfo.custAddress}
                                  onChange={handleInputChange}
                                  id="n13"
                                  onKeyUp={sync}
                                  type="text"
                                  className="contact-input"
                                  required
                                />
                                <label>Address</label>
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <label>Select Date of Delivery</label>

                              <div class="styled-input1">
                                <input
                                  type="date"
                                  value={customerInfo.dateOfDelivery}
                                  name="dateOfDelivery"
                                  onChange={handleInputChange}
                                  id="n15"
                                  onKeyUp={sync}
                                  className="contact-input"
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <div
                                class="styled-input1"
                                style={{ float: "right" }}
                              >
                                <br />
                                <input
                                  type="text"
                                  value={customerInfo.custPincode}
                                  className="contact-input"
                                  onChange={handleInputChange}
                                  name="custPincode"
                                  id="n17"
                                  onKeyUp={sync}
                                  required
                                />
                                <label>
                                  <br />
                                  Enter Your Area Pincode
                                </label>
                              </div>
                            </div>
                            <div class="col-xs-12">
                              <div class="styled-input1 wide">
                                <textarea
                                  name="custMessage"
                                  value={customerInfo.custMessage}
                                  onChange={handleInputChange}
                                  required
                                ></textarea>
                                <label>Message</label>
                              </div>
                            </div>
                            <div class="col-xs-12">
                              <button
                                style={{
                                  border: "none",
                                  backgroundColor: "black",
                                }}
                                type="submit"
                              >
                                {" "}
                                <div class="btn-lrg submit-btn">
                                  Save Information
                                </div>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div class="modal-footer">
                      {/* <NavLink to="/shipping">  */}
                      {deliveryOption && (
                        <button
                          class="btn btn-dark"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                          data-bs-dismiss="modal"
                        >
                          <b>
                            {" "}
                            Continue To Place Order{" "}
                            <FontAwesomeIcon icon={faShoppingBag} />
                          </b>
                        </button>
                      )}
                      {/* </NavLink> */}
                    </div>
                  </div>
                </div>
              </div>

              <div
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
                        Shipping Page
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h4>Your Order Details</h4>
                      {cartItems.map((item) => (
                        <div key={item.id} className="cart-container">
                          <div>
                            <img src={item.image} style={{ width: "200px" }} />
                          </div>

                          <div>
                            <h5>{item.cname}</h5>
                            <input type="text" hidden value={item.cname} disabled />
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
                        
                      )) }

                      <hr></hr>
                      <div>Items Price</div>
                      <div>
                        <FontAwesomeIcon icon={faRupeeSign} /> {itemsPrice}
                        <input type="text" hidden disabled onChange={handleInputChangeOrderInfo} name="allItemsPrice" value={itemsPrice} disabled />
                      </div>
                      <div className="row">
                        {/* <div className="col-2">Tax Price</div> */}
                        {/* <div className="col-1 text-right">
                            <FontAwesomeIcon icon={faRupeeSign} />{" "}
                            {taxPrice.toFixed(2)}
                          </div> */}
                      </div>
                      <div className="row">
                        {/* <div className="col-1 text-right">
                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                {shippingPrice.toFixed(2)}
                        </div>      */}

                        {/*                            
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
                                  } */}
                      </div>
                      {/* <div className="row">
                          <div className="col-2">
                            <strong>Total Price</strong>
                          </div>
                          <div className="col-1 text-right"> */}
                      {/* <strong>
                              <FontAwesomeIcon icon={faRupeeSign} />{" "}
                              {totalPrice.toFixed(2)}
                            </strong> */}
                      {/* </div>
                        </div>
                        <br/> */}
                      <hr />
                      {/* <label>
                        <input type="checkbox" onClick={sync} id="custInfo" />
                        Click Here If the email entered on the previous page is same
                      </label> */}
                      <div class="shipping-arts-and-dogs">
                        <div class="shipping-germany col-md-12">
                          <div class="col-md-12">
                            <div>
                              <h2>ORDER CONFIRMATION</h2>
                            </div>
                            <div
                              class="styled-input1"
                              style={{ marginLeft: "70%" }}
                            >
                              <div className="row">
                                <form onSubmit={onSubmitOtpEmail}>
                                  <div
                                    className="row"
                                    style={{ marginTop: "99px" }}
                                  >
                                    <input
                                      type="text"
                                      onChange={handleInputChangeOtpEmail}
                                      name="custEmail"
                                      value={customerOtpEmail.custEmail}
                                  
                                      required
                                     
                                      placeholder="enter your email id"
                                    />
                                    &#160; &#160;
                                    <button
                                      type="submit"
                                      className="btn btn-dark"
                                    >
                                      GET OTP
                                    </button>
                                  </div>
                                </form>
                                &#160; &#160; &#160; &#160;
                                <p>
                                  Enter the OTP sent to you to verify your
                                  identity
                                </p>
                                {otp.map((data, index) => {
                                  return (
                                    <input
                                      className="otp-field"
                                      type="text"
                                      name="otp"
                                      maxLength="1"
                                      key={index}
                                      value={data}
                                      onChange={(e) =>
                                        handleChange(e.target, index)
                                      }
                                      onFocus={(e) => e.target.select()}
                                    />
                                    
                                  );
                                })}

                                {/* <input type="text" disabled name="frontEndOtp" onChange={handleInputChangeOtp}  value={otp.join("")} /> */}

                                



                                {/* <input type="text" value={} name="frontEndOtp" onChange={handleInputChangeOtp}  disabled /> */}
                                <p>OTP Entered - {otp.join("")}</p>
                                <button
                                  className="btn btn-danger mr-2"
                                  onClick={(e) =>
                                    setOtp([...otp.map((v) => "")])
                                  }
                                >
                                  Clear
                                </button>
                                &#160; &#160;
                                <button
                                  className="btn btn-dark"
                                  // onClick={(e) =>
                                  //   alert("Entered OTP is " + otp.join(""))
                                  // }
                                  type="submit"
                                  onClick={validateOtp}
                                >
                                  VERIFY OTP
                                </button>{" "}
                                &#160; &#160;
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="shipping-germany col-md-5">
                          <input
                            type="text"
                            style={{
                              border: "0px none",
                              boxShadow: "none",
                              backgroundColor: "transparent",
                              borderBottom: "none",
                              outline: "none",
                            }}
                            disabled
                          />
                          <div>
                            {" "}
                            <span
                              id="n2"
                              name="n2"
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              {customerInfo.custName}
                            </span>
                            {/* <input type="text" disabled name="customerName" onChange={handleInputChangeOrderInfo} /> */}
                          </div>
                          <div>
                            <span
                              id="n4"
                              name="n4"
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              {customerInfo.custEmail}
                            </span>
                          </div>
                          <div>
                            <span
                              id="n6"
                              name="n6"
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              {customerInfo.custPhone}
                            </span>
                          </div>
                          <div>
                            <span
                              id="n8"
                              name="n8"
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              {customerInfo.custCountry}
                            </span>
                          </div>
                          <div>
                            <span
                              id="n10"
                              name="n10"
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              {customerInfo.custState}
                            </span>
                          </div>
                          <div>
                            <span
                              id="n12"
                              name="n12"
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              {customerInfo.custCity}
                            </span>
                          </div>
                          <div>
                            <span
                              id="n14"
                              name="n14"
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              {customerInfo.custAddress}
                            </span>
                          </div>
                          <div>
                            <span
                              id="n16"
                              name="n16"
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              {customerInfo.custPincode}
                            </span>
                          </div>
                          {/* <div><span  id="n18" name="n18" style={{backgroundColor:"white",color:"black"}}></span>{customerInfo.custMessage}</div> */}
                          {/* 
 {customerInfo.map((customerInfo) => {
<>
   <span style={{backgroundColor:"white",color:"black"}}>{customerInfo.custName}</span>
    <span style={{backgroundColor:"white",color:"black"}}>{customerInfo.custEmail}</span>
    <span style={{backgroundColor:"white",color:"black"}}>{customerInfo.custPhone}</span>
    <span style={{backgroundColor:"white",color:"black"}}>{customerInfo.custAddress}</span>
    <span style={{backgroundColor:"white",color:"black"}}>{customerInfo.custCity}</span>
    <span style={{backgroundColor:"white",color:"black"}}>{customerInfo.custState}</span>
    <span style={{backgroundColor:"white",color:"black"}}>{customerInfo.custCountry}</span>
    <span style={{backgroundColor:"white",color:"black"}}>{customerInfo.custMessage}</span>
    </>
 }) */}
                          {/* } */}
                        </div>

                        <div class="shipping-arts-and-dogs">
                          <div class="shipping-germany col-md-12">
                            <div>
                              <span
                                style={{
                                  backgroundColor: "white",
                                  color: "black",
                                }}
                              >
                                Tax Price:{" "}
                                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                                {taxPrice.toFixed(2)}
                                <input type="text" hidden name="orderTaxPrice" onChange={handleInputChangeOrderInfo} disabled value={taxPrice.toFixed(2)} />
                              </span>
                            </div>
                            <div>
                              <span
                                style={{
                                  backgroundColor: "white",
                                  color: "black",
                                }}
                              >
                                Total Products: {cartItems.length}
                                <input type="text" hidden disabled name="orderTotalProducts" onChange={handleInputChangeOrderInfo} value={cartItems.length} />
                              </span>
                            </div>

                            {deliveryOption === "Home Delivery" && (
                              <>
                                <div>
                                  <span
                                    style={{
                                      backgroundColor: "white",
                                      color: "black",
                                    }}
                                  >
                                    Shipping Price:
                                    <FontAwesomeIcon icon={faRupeeSign} />
                                    {shippingPrice.toFixed(2) * 1}
                                  </span>
                                </div>

                                <div>
                                  <span
                                    style={{
                                      backgroundColor: "white",
                                      color: "black",
                                    }}
                                  >
                                    Final Amount To Be Paid:
                                    <FontAwesomeIcon icon={faRupeeSign} />
                                    {totalPrice.toFixed(2)}
                                  </span>
                                </div>
                              </>
                            )}

                            {deliveryOption === "Pickup" && (
                              <>
                                <div>
                                  <span
                                    style={{
                                      backgroundColor: "white",
                                      color: "black",
                                    }}
                                  >
                                    Shipping Price:
                                    <FontAwesomeIcon icon={faRupeeSign} />
                                    {shippingPrice * 0}
                                    <input hidden type="text" disabled name="orderShippingPrice" onChange={handleInputChangeOrderInfo} value={shippingPrice*0} />                      
                                  </span>
                                </div>

                                <div>
                                  <span
                                    style={{
                                      backgroundColor: "white",
                                      color: "black",
                                    }}
                                  >
                                    Final Amount To Be Paid:{" "}
                                    <strong>
                                      <FontAwesomeIcon icon={faRupeeSign} />{" "}
                                      {totalPrice.toFixed(2) - 20}
                                      <input hidden disabled type="text" name="orderTotalPrice" onChange={handleInputChangeOrderInfo} value={totalPrice.toFixed(2)-20} onChange={handleInputChangeOrderInfo} />
                                    </strong>
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="modal-footer">
                      <button
                        class="btn btn-dark"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                      >
                        Go Back To Info
                      </button>
                      <button type="submit" onClick={onSubmitOrderInfo} class="btn btn-dark">
                        Place Order <FontAwesomeIcon icon={faShoppingBasket} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </aside>
    </section>
  );
}

export default withRouter(Basket);
