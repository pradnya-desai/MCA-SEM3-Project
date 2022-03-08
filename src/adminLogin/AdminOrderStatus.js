import React, { useEffect,useState } from 'react'
import swal from 'sweetalert';
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBirthdayCake
  } from "@fortawesome/free-solid-svg-icons";
const AdminOrderStatus = () => {
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
    const [acceptedOrders, setAcceptedOrders] = useState([])



    const[_id,setId]=useState(null);
    const [customerName, setCustomerName] = useState('')
    const [customerPhone, setCustomerPhone] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [dateOfDelivery, setDateOfDelivery] = useState('')
    const [deliveryTime, setDeliveryTime] = useState('')
    const [orderAccepted, setOrderAccepted] = useState('')
    const [beingBaked, setBeingBaked] = useState('')
    const [outForDelivery, setOutForDelivery] = useState('')
    const [delivered, setDelivered] = useState('')
    const [orderDate, setOrderDate] = useState('')



useEffect(() => {
    (async () => {
        var AcceptedOrdersData;
        try{
        const response = await fetch('order/getTrackingDetails');
            
            AcceptedOrdersData = await response.json();
        console.log(AcceptedOrdersData);
    }
    catch(e){
        console.log(e);
AcceptedOrdersData=[];

    }
    setAcceptedOrders(AcceptedOrdersData.result.trackingDetails);
    // console.log(AcceptedOrdersData.result.trackingDetails.beingBaked);
// get the datatype of the beingBaked field 
//console.log(typeof(AcceptedOrdersData.result.trackingDetails.beingBaked));


    })();
}, [])


function selectOrder(_id,customerName,customerPhone,customerEmail,dateOfDelivery,
    deliveryTime,orderAccepted,beingBaked,outForDelivery,delivered,orderDate){
setId(_id);
setCustomerName(customerName);
setCustomerPhone(customerPhone);
setCustomerEmail(customerEmail);
setDateOfDelivery(dateOfDelivery);
setDeliveryTime(deliveryTime);
setOrderAccepted(orderAccepted);
setBeingBaked(beingBaked);
setOutForDelivery(outForDelivery);
setDelivered(delivered);
setOrderDate(orderDate);

}


async function updateTrackingStatus(){
    const response=await fetch(`/order/updateTrackingStatus`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _id,
          orderAccepted,
            beingBaked,
            outForDelivery,
            delivered
          

        })
    })
    const data=await response.json();
    console.log(data);
    swal({
        title: "Order tracking Updated",
        text: "Order tracking updated successfully",
        icon: "success",
        button: "OK",
        });
}
const filterData = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = acceptedOrders.filter(user => (`${user.customerName} ${user.customerEmail}`.toLowerCase().includes(value)));
   setAcceptedOrders(filteredUsers);
  }

  return (
<div>
    <h2>OrderList</h2>
    <a href="#" id="scroll" style={{display: "none"}}><FontAwesomeIcon icon={faArrowUp}/></a>
    <input type="search"  onInput={filterData} placeholder="search order" />
<br/><br/>
    {/* AcceptedOrdersData.result.trackingDetails[0].beingBaked */}
    <table border="5" className="table table-striped bg-light">
    <thead>
        <tr>
        <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Id</th>
            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Product Details</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Shipping Price</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Tax Price</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Total Price</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Total Ordered Products</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Item Total</th> 
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Address</th> */}
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Customer Name</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Customer Phone</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Customer Email</th>
            {/* <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Message</th> */}

            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Date Of Delivery</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Delivery Time</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Accepted</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Being Baked</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Out For Delivery</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Delivered</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Date</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Activity</th>
        </tr>
    </thead>
    <tbody> 
     {acceptedOrders.map((acceptedOrders,j) => (
            <tr key={j}> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders._id}</td>
             {/* <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.id}</td> */}
              {/* <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>
                {acceptedOrders.cakeDetails.map((cake,j) => (
                <div key={j}>
                  <p><h6 style={{color:"Highlight"}}>Name</h6>{cake.cakeName}</p>
                  <p><h6 style={{color:"Highlight"}}>Quantity</h6>{cake.cakeQuantity}</p>
                  <p><h6 style={{color:"Highlight"}}>Price</h6>{cake.cakePrice}</p>
                  <hr></hr>
                </div>
              ))}</td> */}
             {/* <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.shippingPrice}</td>
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.taxPrice}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.totalPrice}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.totalOrderedProducts}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.allItemsTotal}</td>   */}

            {/* <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerAddress}</td> */}
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerName}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerPhone}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerEmail}</td>
            {/* <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerMessage}</td> */}
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.dateOfDelivery}</td> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.deliveryTime}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold", color:"blue"}}>{acceptedOrders.orderAccepted}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold", color:"blue"}}>{acceptedOrders.beingBaked}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold", color:"blue"}}>{acceptedOrders.outForDelivery}</td> 
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold", color:"blue"}}>{acceptedOrders.delivered}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold", color:""}}>{acceptedOrders.orderDate}</td>                
                 <td><button className='btn btn-info'  onClick={() => selectOrder(acceptedOrders._id,
                acceptedOrders.customerName,acceptedOrders.customerPhone,
                acceptedOrders.customerEmail,acceptedOrders.dateOfDelivery,acceptedOrders.deliveryTime,acceptedOrders.orderAccepted,
                acceptedOrders.beingBaked,acceptedOrders.outForDelivery,acceptedOrders.delivered,acceptedOrders.orderDate
                  
                  )}>Update Status</button></td> 
            </tr>
            ))}
            
    </tbody>
</table> 


<br/><br/>
<div>

        <br/><br/>
        <br/><br/>
        <div className="container">
        <div className="row input-container">
        <input type="text" disabled value={_id} onChange={(e) =>{setId(e.target.value)}} />
        <br/><br/> <input disabled type="text" value={customerName} onChange={(e)=>{setCustomerName(e.target.value)}} /> <br /><br />
        <input type="text" disabled value={customerPhone} onChange={(e)=>{setCustomerPhone(e.target.value)}} /> <br /><br />
        <input type="text" disabled value={customerEmail}  onChange={(e)=>{setCustomerEmail(e.target.value)}} /> <br /><br />
        <input type="text" disabled value={dateOfDelivery} onChange={(e)=>{setDateOfDelivery(e.target.value)}} /> <br /><br />
        <input type="text" disabled value={deliveryTime} onChange={(e)=>{setDeliveryTime(e.target.value)}} /> <br /><br />
        <input type="text" disabled value={orderAccepted} onChange={(e)=>{setOrderAccepted(e.target.value)}} /> <br /><br />
        <input type="text" disabled value={beingBaked} onChange={(e)=>{setBeingBaked(e.target.value)}} /> <br /><br />
        <input type="text" disabled value={outForDelivery} onChange={(e)=>{setOutForDelivery(e.target.value)}} /> <br /><br />
        <input type="text" disabled value={delivered} onChange={(e)=>{setDelivered(e.target.value)}} /> <br /><br />
        <input type="text" disabled value={orderDate} onChange={(e)=>{setOrderDate(e.target.value)}} /> <br /><br />

        </div>
        </div>
        <button className="btn btn-success" onClick={updateTrackingStatus} >Update Tracking Status</button>  
      </div>


</div>
  )
}

export default AdminOrderStatus

/// if (orderAccepted === "true") {
//   if(frontEndBeingBakedValue===beingBakedDBValue){
    //{
    //beingBakedDBValue='true';
    //}
//}