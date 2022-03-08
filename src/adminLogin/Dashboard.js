import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBirthdayCake,
  faBook,
  faBookReader,
  faCartPlus,
  faChartBar,
  faCheck,
  faComments,
  faCross,
  faCrosshairs,
  faDigitalTachograph,
  faGraduationCap,
  faHome,
  faMinusCircle,
  faMoneyBill,
  faMoneyBillAlt,
  faQuestion,
  faRupeeSign,
  faShippingFast,
  faShoppingBag,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import React from "react";
import { faDelicious } from "@fortawesome/free-brands-svg-icons";
import Sidebar from "./Sidebar.js";
import { useState, useEffect } from "react";
const Dashboard = () => {
  const [enquiryCount, setEnquiryCount] = useState([]);
  const [cakeCount, setCakeCount] = useState([]);
  const [orderCount, setOrderCount] = useState([]);
  const [orderProfit, setProfitCount] = useState([]);
  const [homeDeliveryCount, setHomeDeliveryCount] = useState([]);
  const [averageRating, setAverageRating] = useState([]);

useEffect(() => {
  (async()=>{
    var ratingData;
    try{
      const response=await fetch("/rating/getAverageRating");
      ratingData=await response.json();
      console.log(ratingData);
    }
    catch(e){
      console.log(e);
    ratingData=[];
    }
    setAverageRating(ratingData.result.averageRatingValue);
    console.log(ratingData);
  })();
  },[]);

  useEffect(() => {
    (async () => {
      var userData;
      try {
        const response = await fetch("/enquiry/getEnquiryCount");
        userData = await response.json();

        //display all the enquiries in the table
        console.log(userData);
      } catch (error) {
        console.log(error);
        userData = [];
      }
      // setAllUser(userData);
      setEnquiryCount(userData.result.enquiriesCount);
    })();
  }, []);

  const[enquiry,setEnquiries]=useState([])
 
      const getEnquiries=async () => {
        var enquiryData;
        try {
          const response = await fetch("/enquiry/getEnquiry");
          enquiryData = await response.json();

          //display all the enquiries in the table 
          console.log(enquiryData);

        } catch (error) {
          console.log(error);
          enquiryData = [];
        }
        // setAllUser(userData);
         setEnquiries(enquiryData.result.enquiries);
        
      }
   
      const [cake,setCakes]=useState([])
      const getCakes=async () => {
        var cakeData;
        try {
          const response = await fetch("/cake/getCake");
          cakeData = await response.json();
            console.log(cakeData);
        } catch (error) {
          console.log(error);
          cakeData = [];
        }
        
        setCakes(cakeData.result.cakes);
      }

      const [order,setOrders]=useState([])
      const getOrders=async () => {
        var orderData;
        try {
          const response = await fetch("/order/getOrder");
          orderData = await response.json();
            console.log(orderData);
        } catch (error) {
          console.log(error);
          orderData = [];
        }
          setOrders(orderData.result.orderData);
      }



  useEffect(() => {
    (async () => {
      var cakeData;
      try {
        const response = await fetch("/cake/getCakeCount");
        cakeData = await response.json();

        //display all the enquiries in the table
        console.log(cakeData);
      } catch (error) {
        console.log(error);
        cakeData = [];
      }
      // setAllUser(userData);
      setCakeCount(cakeData.result.cakesCount);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      var orderData;
      try {
        const response = await fetch("/order/getOrderCount");
        orderData = await response.json();
        console.log(orderData);
      } catch (error) {
        console.log(error);
        orderData = [];
      }
      setOrderCount(orderData.result.orderCount);
    })();
  }, []);

useEffect(() => {
	  (async () => {
		  var ProfitData;
		  try {
			  const response = await fetch("/order/getOrder");
			  ProfitData = await response.json();
			  console.log(ProfitData);
		  } catch (error) {
			  console.log(error);
			  ProfitData = [];
		  }
		  setProfitCount(ProfitData.result.totalPriceAdd);
	  })();
	    }, []);

useEffect(() => {
    (async () => {
      var HomeDeliveryData;
      try {
        const response = await fetch("/order/homeDeliveryOrders");
        HomeDeliveryData = await response.json();
        console.log(HomeDeliveryData);
      } catch (error) {
        console.log(error);
        HomeDeliveryData = [];
      }
      setHomeDeliveryCount(HomeDeliveryData.result.homeDeliveryOrders);



    })();
      }, []);
//       const [homeDeliveryOrders,setHomeDeliveryOrders]=useState([])
// const homeOrders =async () => {
//       var homeDeliveryData;
//       try {
//         const response = await fetch("/order/homeDeliveryOrderDocuments");
//         homeDeliveryData = await response.json();
//         console.log(homeDeliveryData);
//       } catch (error) {
//         console.log(error);
//         homeDeliveryData = [];
//       }
//       // setAllUser(userData);
//       setHomeDeliveryOrders(homeDeliveryData.result.orderData);
//     }

const [getAcceptedOrdersCount, setAcceptedOrdersCount] = useState([]);
          useEffect(() => {
            (async () => {
              var AcceptedOrdersDataCount;
              try {
                const response = await fetch("/order/getAcceptedOrdersCount");
                AcceptedOrdersDataCount = await response.json();
                console.log(AcceptedOrdersDataCount);
              } catch (error) {
                console.log(error);
                AcceptedOrdersDataCount = [];
              }
              setAcceptedOrdersCount(AcceptedOrdersDataCount.result.acceptedOrdersCount);
            })();
              }, []);


              const [getDeletedOrdersCount, setDeletedOrdersCount] = useState([]);
              useEffect(() => {
                (async () => {
                  var DeletedOrdersDataCount;
                  try {
                    const response = await fetch("/order/getDeletedOrdersCount");
                    DeletedOrdersDataCount = await response.json();
                    console.log(DeletedOrdersDataCount);
                  } catch (error) {
                    console.log(error);
                    DeletedOrdersDataCount = [];
                  }
                  setDeletedOrdersCount(DeletedOrdersDataCount.result.deletedOrdersCount);
                })();

                }, []);
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

    <div>
          <a href="#" id="scroll" style={{display: "none"}}><FontAwesomeIcon icon={faArrowUp}/></a>

      <div class="card-holder">
      <button onClick={getOrders} type="submit"
          style={{ background:"transparent", border:"none"}}>
        <section class="card-count card--01">
          <h1 class="card__heading">Orders</h1>
          <p  style={{fontWeight:"bolder"}} class="card__text">{orderCount} <FontAwesomeIcon icon={faCartPlus}/></p>
        </section>
        </button>
        <span class="card-shadow card-shadow--01"></span>
      </div>

      <div class="card-holder">
      <button  type="submit"
          style={{ background:"transparent", border:"none"}}>
        <section class="card-count card--03">
  
          <h1 class="card__heading">Deliveries</h1>
          <p  style={{fontWeight:"bolder"}} class="card__text">{homeDeliveryCount} <FontAwesomeIcon icon={faShippingFast}/></p>
        </section>
        </button>
        <span class="card-shadow card-shadow--03"></span>
      </div>
      <div class="card-holder">
      <button onClick={getEnquiries}type="submit"
          style={{ background:"transparent", border:"none"}}> 
        <section class="card-count card--04">
         
         <h1 class="card__heading">Enquiries</h1>
          <p  style={{fontWeight:"bolder"}} class="card__text">{enquiryCount} <FontAwesomeIcon icon={faComments}/></p>
        
        </section>
        </button>
        <span class="card-shadow card-shadow--02"></span>
      </div>
      <div class="card-holder">
      <button onClick={getEnquiries} type="submit"
          style={{ background:"transparent", border:"none"}}>
        <section class="card-count card--02">
          <h1 class="card__heading">Profit</h1>
          <p  style={{fontWeight:"bolder"}} class="card__text">{orderProfit} <FontAwesomeIcon icon={faRupeeSign}/></p>
        </section>
        </button>
        <span class="card-shadow card-shadow--02"></span>
      </div>
      <div class="card-holder">
      <button onClick={getCakes} type="submit"
          style={{ background:"transparent", border:"none"}}>
        <section class="card-count card--05">
          <h1 class="card__heading">Cakes for Sale</h1>
          <p style={{fontWeight:"bolder"}} class="card__text">{cakeCount} <FontAwesomeIcon icon={faBirthdayCake}/> </p>
        </section>
        </button>
        <span class="card-shadow card-shadow--05"></span>
      </div>
     
      <div class="card-holder">
      <button type="submit"
          style={{ background:"transparent", border:"none"}}>
        <section class="card-count card--07">
          <h1 class="card__heading">Rejected Orders</h1>
          <p style={{fontWeight:"bolder"}} class="card__text">{getDeletedOrdersCount}  <FontAwesomeIcon icon={faMinusCircle}/>   </p>
        </section>
        </button>
        <span class="card-shadow card-shadow--07"></span>
      </div>
      <div class="card-holder">
      <button  type="submit"
          style={{ background:"transparent", border:"none"}}>
        <section class="card-count card--06">
          <h1 class="card__heading">Accepted Orders</h1>
          <p style={{fontWeight:"bolder"}} class="card__text">{getAcceptedOrdersCount}  <FontAwesomeIcon icon={faCheck}/></p>
        </section>
        </button>
        <span class="card-shadow card-shadow--06"></span>
      </div>
      <div class="card-holder">
      <button  type="submit"
          style={{ background:"transparent", border:"none"}}>
        <section class="card-count card--08">
          <h1 class="card__heading">Customer Average Rating</h1>
          <p style={{fontWeight:"bolder"}} class="card__text">{averageRating}<FontAwesomeIcon icon={faStar}/></p>
        </section>
        </button>
        <span class="card-shadow card-shadow--08"></span>
      </div>
      <table className="table table-striped bg-light" >
        <thead>
            <tr>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Customer Id</th>

            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Customer Name</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Email</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Phone</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Message</th>
            </tr>
        </thead>
        <tbody>
            {enquiry.map((enquiry) => (
            <tr> 
             <td  style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{enquiry._id}</td>   
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{enquiry.cname}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{enquiry.email}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{enquiry.phone}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{enquiry.message}</td>
            </tr>
            ))}
        </tbody>
        </table>

        <table  border="5" className="table table-striped bg-light">
 <thead>

          <tr>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">ID</th>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Cake Name</th>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}}scope="col">Cake Image</th>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}}scope="col">Cake Price</th>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}}scope="col">Cake Category</th>
          
          </tr>
          </thead>

          <tbody>
          {
            cake.map((item, i) =>
              <tr key={i}>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{item._id}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{item.cname}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}><img width="20%" height="10%" src={item.image}/></td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{item.price}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{item.category}</td>
                

               
              </tr>
            )
          }
        </tbody>
      </table>
        

      <table  border="5" className="table table-striped bg-light" >
        <thead>
            <tr>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Id</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Product Details</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Shipping Price</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Tax Price</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Total Price</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Total Ordered Products</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Item Total</th> 
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Address</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Customer Name</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Phone</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Email</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Message</th>

            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Product Details</th> */}
            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Product Details</th> */}
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Date Of Delivery</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Delivery Type</th>
            
            </tr>
        </thead>
        <tbody>
            {order.map((orders,i) => (
            <tr key={i}> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders._id}</td>
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>
                {orders.cakeDetails.map((cake,i) => (
                <div key={i}>
                  <p><h6 style={{color:"Highlight"}}>Name</h6>{cake.cakeName}</p>
                  <p><h6 style={{color:"Highlight"}}>Quantity</h6>{cake.cakeQuantity}</p>
                  <p><h6 style={{color:"Highlight"}}>Price</h6>{cake.cakePrice}</p>
                  <hr></hr>
                </div>
              ))}</td>
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.shippingPrice}</td>
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.taxPrice}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.totalPrice}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.totalOrderedProducts}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.allItemsTotal}</td>  

            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerAddress}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerName}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerPhone}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerEmail}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerMessage}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.dateOfDelivery}</td> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.deliveryType}</td>
              
             
            
             

            </tr>
            ))}
        </tbody>
        </table>

{/* 
        <table border="5" className="table table-striped bg-light" >
        <thead>
            <tr>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Id</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Product Details</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Shipping Price</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Tax Price</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Total Price</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Total Ordered Products</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Item Total</th> 
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Address</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Customer Name</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Phone</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Email</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Message</th> */}

            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Product Details</th> */}
            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Product Details</th> */}
            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Date Of Delivery</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Delivery Type</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Operations</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {homeDeliveryOrders.map((orders,i) => (
            <tr key={i}> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders._id}</td> */}
             {/* <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>
                {orders.cakeDetails.map((cake,i) => (
                <div key={i}>
                  <p><h6 style={{color:"Highlight"}}>Name</h6>{cake.cakeName}</p>
                  <p><h6 style={{color:"Highlight"}}>Quantity</h6>{cake.cakeQuantity}</p>
                  <p><h6 style={{color:"Highlight"}}>Price</h6>{cake.cakePrice}</p>
                  <hr></hr>
                </div>
              ))}</td> */}
             {/* <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.shippingPrice}</td>
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.taxPrice}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.totalPrice}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.totalOrderedProducts}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.allItemsTotal}</td>  

            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerAddress}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerName}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerPhone}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerEmail}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerMessage}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.dateOfDelivery}</td> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.deliveryType}</td>
              
             
        

            </tr>
            ))}
        </tbody>
        </table> */}





    </div>
  );
};

export default Dashboard;
