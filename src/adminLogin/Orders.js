import React from 'react'
import { useState,useEffect } from 'react';
import swal from 'sweetalert';
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBirthdayCake
  } from "@fortawesome/free-solid-svg-icons";
const Orders = () => {

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
  
    const[orders,setOrders]=useState([])

    const[_id,setOrderId]=useState(null)
    const[cakeDetails,setCakeDetails]=useState("")
    const[totalPrice,setTotalPrice]=useState("")
    const[shippingPrice,setShippingPrice]=useState("")
    const[taxPrice,setTaxPrice]=useState("")
    const[totalOrderedProducts,setTotalProducts]=useState("")
    const[allItemsTotal,setAllItemsTotal]=useState("")

    const[customerAddress,setCustomerAddress]=useState("")
    const[customerName,setCustomerName]=useState("")
    const[customerPhone,setCustomerPhone]=useState("")
    const[customerEmail,setCustomerEmail]=useState("")
    const [customerPinCode,setCustomerPinCode]=useState("")
    const[customerMessage,setCustomerMessage]=useState("")
    const[dateOfDelivery,setDateOfDelivery]=useState("")
    const[deliveryType,setDeliveryType]=useState("") 
    const[deliveryTime,setDeliveryTime]=useState("")
    
    useEffect(() => {

      getData();
    }, []);
    
  var orderDataRecords
  var data;
      const getData = async () => {
         
          try {
            const response = await fetch("/order/getOrder");
            orderDataRecords = await response.json();

            //display all the enquiries in the table 
            console.log(orderDataRecords);

          } catch (error) {
            console.log(error);
            orderDataRecords = [];
          }
          // setAllUser(userData);
           setOrders(orderDataRecords.result.orderData);
           // fetch the orderData from the database and cakename, cake price too


            



         // console.log(orderData);
data=orderDataRecords.result.orderData;
console.log(data);

 setOrders(data);
//  setOrderId(data[0]._id);
//  setShippingPrice(data[0].shippingPrice);
//  setTaxPrice(data[0].taxPrice);
//  setTotalPrice(data[0].totalPrice);

// setCakeDetails(data[0].cakeDetails);
// setTotalProducts(data[0].totalOrderedProducts);

// setAllItemsTotal(data[0].allItemsTotal);
// setCustomerAddress(data[0].customerAddress);
// setCustomerName(data[0].customerName);
// setCustomerPhone(data[0].customerPhone);
// setCustomerEmail(data[0].customerEmail);
// setCustomerPinCode(data[0].customerPinCode);
// setCustomerMessage(data[0].customerMessage);
// setDateOfDelivery(data[0].dateOfDelivery);
// setDeliveryType(data[0].deliveryType);          
        }
    

       async function deleteOrder(_id,customerEmail,customerName,totalPrice) {

//fetch the _id of the order to be deleted and store it in a variable 



         const response=await fetch(`/order/deleteOrder/${_id}`, {
            method: 'DELETE',
          })

         const result=await response.json();
          console.log(result);
         
         getData();
       if(result.result==null||result.result==""||result.result==undefined){
         swal("Order Not Deleted", "", "Error");
       }
        else{
          swal({
            title: "Order Deleted",
            text: "",
            icon: "success",
            button: "OK",
    
          })
        }

        const order_Id=_id;

        const responsee = await fetch("/order/deleteOrderMail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            order_Id,
            customerEmail,
            customerName,
            totalPrice,
            customerPhone,
            totalOrderedProducts
          })
        });
        
        const data = await responsee.json();
        console.log(data);
        
        




        }

         function selectOrder(_id,cakeDetails,shippingPrice,taxPrice,totalPrice,totalOrderedProducts,
          allItemsTotal,customerAddress,customerName,customerPhone,customerEmail,customerPinCode,customerMessage,
          dateOfDelivery,deliveryType,deliveryTime) 
          {
            
//extract cakeName from the cakeDetails object and store it in a variable

            setOrderId(_id);
            setCakeDetails(cakeDetails);
            setShippingPrice(shippingPrice);
            setTaxPrice(taxPrice);
            setTotalPrice(totalPrice);
            setTotalProducts(totalOrderedProducts);
            setAllItemsTotal(allItemsTotal);
            setCustomerAddress(customerAddress);
            setCustomerName(customerName);
            setCustomerPhone(customerPhone);
            setCustomerEmail(customerEmail);
            setCustomerPinCode(customerPinCode);
            setCustomerMessage(customerMessage);
            setDateOfDelivery(dateOfDelivery);
            setDeliveryType(deliveryType);
            setDeliveryTime(deliveryTime);
console.log(typeof cakeDetails);
          }


        async function confirmOrder(){
try {
  const response = await fetch(`/order/confirmOrder`, {
    method: 'POST',
    body: JSON.stringify(
      {shippingPrice,taxPrice,totalPrice,totalOrderedProducts,allItemsTotal,customerAddress,customerName,
        customerPhone,customerEmail,customerPinCode,customerMessage,
        dateOfDelivery,deliveryType,cakeDetails,_id,deliveryTime}
      ),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result=await response.json();
  console.log(result);



  if(result.result==null||result.result==""||result.result==undefined){
    swal("Order Not Confirmed", ":(", "Error");
  }


   else{
swal({
  title: "Yay",
  text: "Order Confirmed!",
  icon: "success",
  button: "OK",
})
   }
  }

 catch (error) {
  console.log(error);
}
         

try {
  const responsee = await fetch(`/order/saveConfirmedOrder`, {
    method: 'POST',
    body: JSON.stringify(
      {
        shippingPrice,taxPrice,totalPrice,totalOrderedProducts,allItemsTotal,customerAddress,customerName,
        customerPhone,customerEmail,customerPinCode,customerMessage,dateOfDelivery,deliveryType,_id,deliveryTime
      }
      ),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const resultt=await responsee.json();
  console.log(resultt);
  if(resultt.result==null||resultt.result==""||resultt.result==undefined){
    swal("Order already accepted", ":(", "Success");
  }
   else{
swal({
  title: "Yay",
  text: "Added to order lists!",
  icon: "success",
  button: "OK",
})
   }
  }

 catch (error) {
  console.log(error);
}


const trackingresponse= await fetch("/order/saveTrackingDetails", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    _id,
    deliveryTime,customerName,
    customerPhone,customerEmail,dateOfDelivery,
    customerAddress,customerPinCode,totalOrderedProducts,
    allItemsTotal,taxPrice,totalPrice
  })
});

const data=await trackingresponse.json();
console.log(data);

  if(data.result==null||data.result==""||data.result==undefined){
    swal("Tracking Details Exist", ":(", "Error");
  }
  else{
    swal({
      title: "Tracking Details Saved",
      text: "",
      icon: "success",
      button: "OK",
  
    })
  }




         }
        
      
      const filterData = event => {
        const value = event.target.value.toLowerCase();
        const filteredUsers = orders.filter(user => (`${user.customerName} ${user.customerEmail}`.toLowerCase().includes(value)));
       setOrders(filteredUsers);
      }




  return (
    <div>
  <h1>Order Details</h1>
  <a href="#" id="scroll" style={{display: "none"}}><FontAwesomeIcon icon={faArrowUp}/></a>

    <br/>
    <input type="search"  onInput={filterData} placeholder="search order" />

    <br/><br/>
    <table border="5" className="table table-striped bg-light" >
        <thead>
            <tr>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Mongo Id</th>
            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">order id me</th> */}
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
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Pin Code</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Message</th>

            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Product Details</th> */}
            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Product Details</th> */}
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Date Of Delivery</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Delivery Type</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Operations</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {orders.map((orders,i) => (
            <tr key={i}> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders._id}</td>
             {/* <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.id}</td> */}
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
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerPinCode}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerMessage}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.dateOfDelivery}</td> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.deliveryType}</td>
              
             
            
             
            <td><button className="btn btn-danger" onClick={() => 
              deleteOrder(orders._id,orders.customerEmail,orders.customerName,orders.totalPrice,
              orders.customerPhone,orders.totalOrderedProducts)}>
              Delete Order</button></td>
                <td><button className="btn btn-info" onClick={() => selectOrder(orders._id,orders.cakeDetails,
                orders.shippingPrice,orders.taxPrice,orders.totalPrice,orders.totalOrderedProducts,
                orders.allItemsTotal,orders.customerAddress,orders.customerName,orders.customerPhone,
                orders.customerEmail,orders.customerPinCode,orders.customerMessage,orders.dateOfDelivery,orders.deliveryType
                  
                  )}>Accept Order</button></td>

            </tr>
            ))}
        </tbody>
        </table>
        <div>

<br/><br/>
<br/><br/>
<div className="container">
<div className="row input-container">
<input type="text" disabled value={_id} onChange={(e) =>{setOrderId(e.target.value)}} />
{/* {orders.map((orders,i) => ( */}
            {/* <div> 
                {cakeDetails.map((cake,i) => (
                <div key={i}>
                  <input type="text" value={cake.cakeName} />
                  <input type="text" value={cake.cakeQuantity} />
                  <input type="text" value={cake.cakePrice}/>
                </div>
              ))}
         </div> */}
            {/* ))} */}
     {/* <input type="text" disabled value={cakeName} onChange={(e) =>{setCakeName(e.target.value)}} />  */}
    
      
                {/* <input type="text" value={cakeName} onChange={(e) =>{setCakeName(e.target.value)}} /> */}

<br/><br/> <input type="text" disabled value={cakeDetails} onChange={(e)=>{setCakeDetails(e.target.value)}} /> <br /><br />
<input type="text" disabled value={shippingPrice} onChange={(e)=>{setShippingPrice(e.target.value)}} /> <br /><br />
<input type="text" disabled value={taxPrice}  onChange={(e)=>{setTaxPrice(e.target.value)}} /> <br /><br />
<input type="text" disabled value={totalPrice} onChange={(e)=>{setTotalPrice(e.target.value)}} /> <br /><br />
<input type="text" disabled value={totalOrderedProducts} onChange={(e)=>{setTotalProducts(e.target.value)}} /> <br /><br />
<input type="text" disabled value={allItemsTotal} onChange={(e)=>{setAllItemsTotal(e.target.value)}} /><br /><br />
<input type="text" disabled value={customerAddress} onChange={(e)=>{setCustomerAddress(e.target.value)}} /> <br /><br />
<input type="text" disabled value={customerName} onChange={(e)=>{setCustomerName(e.target.value)}} /> <br /><br />
<input type="text" disabled value={customerPhone} onChange={(e)=>{setCustomerPhone(e.target.value)}} /> <br /><br />
<input type="text" disabled value={customerEmail} onChange={(e)=>{setCustomerEmail(e.target.value)}} /> <br /><br />
<input type="text" disabled value={customerPinCode} onChange={(e)=>{setCustomerPinCode(e.target.value)}} /> <br /><br />
<input type="text" disabled value={customerMessage} onChange={(e)=>{setCustomerMessage(e.target.value)}} /> <br /><br />
<input type="text" disabled value={dateOfDelivery} onChange={(e)=>{setDateOfDelivery(e.target.value)}} /> <br /><br />
<input type="text" disabled value={deliveryType} onChange={(e)=>{setDeliveryType(e.target.value)}} /> <br /><br />
<input type="text" value={deliveryTime} onChange={(e)=>{setDeliveryTime(e.target.value)}} placeholder="enter the delivery time" /> <br /><br />
</div>
</div>
<button className="btn btn-success" onClick={confirmOrder} >Confirm Order</button>  
</div>

    </div>
  )
}

export default Orders