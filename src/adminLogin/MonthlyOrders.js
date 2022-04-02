import React, { useEffect,useState } from 'react'
import Select from "react-select";
import swal from 'sweetalert';

const MonthlyOrders = () => {


  var  Months = [
    {
      value: 1,
      label: "January",
    },
    {
      value: 2,
      label: "February",
    },
    {
      value: 3,
      label: "March",
    },
    {
      value: 4,
      label: "April",
    },
    {
      value: 5,
      label: "May",
    },
    {
      value: 6,
      label: "June",
    },
    {
      value: 7,
      label: "July",
    },
    {
      value: 8,
      label: "August",
    },
    {
      value: 9,
      label: "September",
    },
    {
      value: 10,
      label: "October",
    },
    {
      value: 11,
      label: "November",
    },
    {
      value: 12,
      label: "December",
    },
  ];

  var [monthOption, setMonth] = useState(Months.label);
  var [month, setMonthValue] = useState(Months.value);

  var [monthlyOrders,setMonthlyOrders]=useState([]);



// useEffect(()=>{
//   (async () => {
//     var userData;
//     try {
//       const response = await fetch('/order/getMonthWiseOrdersDetails');
//       userData = await response.json();
   
//     }
//     catch (error) {
//       console.log(error);
//       userData = [];
//     }
//       setMonthlyOrders(userData.result.monthWiseOrdersDetails);
    
//   })();
// },[])



  const monthOptionChange = (e) => {
    setMonth(e.label);
    console.log(monthOption)
    setMonthValue(e.value);
    console.log(month)
  };

const sendMonth = async () => {
  console.log(month)
  const frontEndMonth = month;
var data;
  const response = await fetch('/order/getMonthWiseOrders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
       frontEndMonth,
    }),
  })
   data =await response.json();
   setMonthlyOrders(data.result.monthWiseOrdersDetails);

  console.log(data)
  console.log(monthlyOrders)

if(data.length === 0){
  swal({
    title: "No Orders",
    text: "No Orders for this month",
    icon: "warning",
    button: "OK",
  
  })
}

  else{
    swal({
      title: "Orders Found",
      text: "Orders for this month",
      icon: "success",
      button: "OK",

    })


  } 



}

  return (
    <div>
        <Select
                  options={Months}
                  onChange={monthOptionChange}
                  // onInputChange={sendMonth}
                />
                <br/>
                <button className='btn btn-dark' onClick={sendMonth}>Submit</button>
                <br/>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Order Id</th>
          <th scope="col">Order Date</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Customer Address</th>
          <th scope="col">Customer Phone</th>
          <th scope="col">Customer Email</th>
          <th scope="col">Total Price</th>
          <th scope="col">Item Total</th>
          <th scope="col">Tax Price</th>
          <th scope="col">Shipping Price</th>
          <th scope="col">Order Status</th>
          <th scope="col">Total Ordered Products</th>
<th scope="col">Customer Message</th>
        </tr>
      </thead>
      <tbody>
        {monthlyOrders.map((order) => (
          <tr key={order.orderId}>
            <td>{order._id}</td>


{/* {order.cakeDetails.map((cake)=>(

<tr>
  <td>{cake.cakeName}</td>
  <td>{cake.cakePrice}</td>
  <td>{cake.cakeQuantity}</td>
  </tr>
))} */}

            <td>{order.dateOfDelivery}</td>
            <td>{order.customerName}</td>
            <td>{order.customerAddress}</td>
            <td>{order.customerPhone}</td>
            <td>{order.customerEmail}</td>
            <td>{order.totalPrice}</td>
            <td>{order.allItemsTotal}</td>
            <td>{order.taxPrice}</td>
            <td>{order.shippingPrice}</td>
            <td>{order.orderStatus}</td>
            <td>{order.totalOrderedProducts}</td>
            <td>{order.customerMessage}</td>

          </tr>
        ))}
      </tbody>
    </table>


    </div>
  )
}

export default MonthlyOrders;





{/* 
allItemsTotal: "1450"
cakeDetails: Array(0)
length: 0
[[Prototype]]: Array(0)
customerAddress: "kothrud"
customerEmail: "pradnya.d10@gmail.com"
customerMessage: "fresh cakes"
customerName: "pradnya"
customerPhone: "123456789"
dateOfDelivery: "27/03/2022"
deliveryType: "Pickup"
orderStatus: "Accepted"
shippingPrice: "20"
taxPrice: "80"
totalOrderedProducts: "2"
totalPrice: "1560" */}
  {/* {
  monthlyOrders.cakeDetails.map((cake,index)=>{
    <tr key={index}>
    <td style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}}>{cake.cakeName}</td>
    <td style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}}>{cake.cakePrice}</td>
    <td style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}}>{cake.cakeQuantity}</td>
    </tr>
  })
} */}