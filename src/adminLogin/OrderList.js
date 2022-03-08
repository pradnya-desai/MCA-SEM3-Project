import React, { useEffect,useState } from 'react'
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBirthdayCake
  } from "@fortawesome/free-solid-svg-icons";
  import path from 'path';
  import * as xlsx from 'xlsx';
const OrderList = () => {

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
const [orders, setOrders] = useState([])
useEffect(() => {
    (async () => {
        var DeletedOrdersData;
        try{
        const response = await fetch('order/getDeletedOrders');
         DeletedOrdersData = await response.json();
        console.log(DeletedOrdersData);
    }
    catch(e){
        console.log(e);
DeletedOrdersData=[];
    }
    setOrders(DeletedOrdersData.result.allDeletedOrders)
    })();
}, [])

const [acceptedOrders, setAcceptedOrders] = useState([])
useEffect(() => {
    (async () => {
        var AcceptedOrdersData;
        try{
        const response = await fetch('order/getAcceptedOrders');
            
            AcceptedOrdersData = await response.json();
        console.log(AcceptedOrdersData);
    }
    catch(e){
        console.log(e);
AcceptedOrdersData=[];

    }
    setAcceptedOrders(AcceptedOrdersData.result.allAcceptedOrders);
    })();
}, [])
const saveExcel=()=>{
    var wb = xlsx.utils.book_new();
    var ws = xlsx.utils.aoa_to_sheet([
  //save the enquiries in the excel file
      ["ID", "Cake Details", "shippingPrice", "taxPrice", "totalPrice","totalOrderedProducts","allItemsTotal","customerAddress",
      "customerName","customerPhone","customerEmail","customerMessage","dateOfDelivery","deliveryType","orderStatus"  ],
      ...orders.map(orders => [
        orders._id,
        orders.cakeDetails,
        orders.shippingPrice,
        orders.taxPrice,
        orders.totalPrice,
        orders.totalOrderedProducts,
        orders.allItemsTotal,
        orders.customerAddress,
        orders.customerName,
        orders.customerPhone,
        orders.customerEmail,
        orders.customerMessage,
        orders.dateOfDelivery,
        orders.deliveryType,
        orders.orderStatus,
      
      ])
    ]);
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    xlsx.writeFile(wb, path.resolve("./cakeOrderingSystem/rejected-Orders.xlsx"));
  }


  const saveExcel1=()=>{
    var wb = xlsx.utils.book_new();
    var ws = xlsx.utils.aoa_to_sheet([
  //save the enquiries in the excel file
  ["ID", "Cake Details", "shippingPrice", "taxPrice", "totalPrice","totalOrderedProducts","allItemsTotal","customerAddress",
  "customerName","customerPhone","customerEmail","customerMessage","dateOfDelivery","deliveryType","orderStatus"  ],
      ...acceptedOrders.map(acceptedOrders => [
        acceptedOrders._id,
        acceptedOrders.cakeDetails,
        acceptedOrders.shippingPrice,
        acceptedOrders.taxPrice,
        acceptedOrders.totalPrice,
        acceptedOrders.totalOrderedProducts,
        acceptedOrders.allItemsTotal,
        acceptedOrders.customerAddress,
        acceptedOrders.customerName,
        acceptedOrders.customerPhone,
        acceptedOrders.customerEmail,
        acceptedOrders.customerMessage,
        acceptedOrders.dateOfDelivery,
        acceptedOrders.deliveryType,
        acceptedOrders.orderStatus,


      
      ])
    ]);
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    xlsx.writeFile(wb, path.resolve("./cakeOrderingSystem/accepted-orders.xlsx"));
  }
  return (
      <div>
    <h2>OrderList</h2>
    <button style={{float:"left"}} className='btn btn-dark' onClick={saveExcel}>Save To Excel</button>

    <br/>
    <a href="#" id="scroll" style={{display: "none"}}><FontAwesomeIcon icon={faArrowUp}/></a>

    <br/>

    <table border="5" className="table table-striped bg-light">
    <thead>
        <tr>
        <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Mongo Id</th>
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

            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Date Of Delivery</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Delivery Type</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Status</th>
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
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.customerMessage}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.dateOfDelivery}</td> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.deliveryType}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold", color:"red"}}>{orders.orderStatus}</td>                 
                  
            </tr>
            ))}
            
    </tbody>
</table>


<button style={{float:"left"}} className='btn btn-dark' onClick={saveExcel1}>Save To Excel</button>

<br/><br/>
 <table border="5" className="table table-striped bg-light">
    <thead>
        <tr>
        <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Mongo Id</th>
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

            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Date Of Delivery</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Delivery Type</th>
            <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Order Status</th>
        </tr>
    </thead>
    <tbody> 
     {acceptedOrders.map((acceptedOrders,j) => (
            <tr key={j}> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders._id}</td>
             {/* <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{orders.id}</td> */}
              <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>
                {acceptedOrders.cakeDetails.map((cake,j) => (
                <div key={j}>
                  <p><h6 style={{color:"Highlight"}}>Name</h6>{cake.cakeName}</p>
                  <p><h6 style={{color:"Highlight"}}>Quantity</h6>{cake.cakeQuantity}</p>
                  <p><h6 style={{color:"Highlight"}}>Price</h6>{cake.cakePrice}</p>
                  <hr></hr>
                </div>
              ))}</td>
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.shippingPrice}</td>
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.taxPrice}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.totalPrice}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.totalOrderedProducts}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.allItemsTotal}</td>  

            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerAddress}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerName}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerPhone}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerEmail}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.customerMessage}</td>
            <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.dateOfDelivery}</td> 
             <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{acceptedOrders.deliveryType}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold", color:"green"}}>{acceptedOrders.orderStatus}</td>                 
                  
            </tr>
            ))}
            
    </tbody>
</table> 























</div>
  )
}

export default OrderList