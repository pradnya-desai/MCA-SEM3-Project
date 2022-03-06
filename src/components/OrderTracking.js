import React from "react";
import { useEffect,useState } from "react";
import swal from 'sweetalert';
const OrderTracking = () => {



const [tracking,setTracking] = useState({
id:''

});


const handleIdChange = (e) => {
setTracking({
...tracking,
id:e.target.value
});
};


const [info,setUserInfo]=useState([])

const sendId = async (e) => {

  const {id} = tracking;
const response= await fetch('order/getTrackingDetailsById',{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
id
})
});
const data = await response.json();
console.log(data);

if(data!==null||data!==undefined||data!==''){
swal ({
title: "Tracking Details",
text: `found`,
icon: "success",
button: "OK",

})
}

else {
swal({
title: "Tracking Details",
text: "Tracking Details Not Found",
icon: "warning",
button: "OK",
})
}
setUserInfo(data.result.idFinder);

// if (data.result.idFinder.beingBaked === "true") {

// }
}

console.log(info);

//   const [acceptedOrders, setAcceptedOrders] = useState([])
  
//   useEffect(() => {

//     (async () => {
//         var AcceptedOrdersData;
//         try{
//         const response = await fetch('order/getTrackingDetails');
//             AcceptedOrdersData = await response.json();
//         console.log(AcceptedOrdersData);
//     }
//     catch(e){
//         console.log(e);
// AcceptedOrdersData=[];

//     }
//     setAcceptedOrders(AcceptedOrdersData.result.trackingDetails);

//     })();
// }, []






  return (
    <div>
      <h1>Order Tracking</h1>
      {/* <p> { acceptedOrders.map(acceptedOrder => acceptedOrder.customerName)} </p>
      <p> { acceptedOrders.map(acceptedOrder => acceptedOrder.beingBaked)} </p>
        
   */}
   <br/>
   <label>Enter Order Id</label> &nbsp; 
<input style={{width:"20%",height:"10px"}} className="contact-input" type="text" name="id" value={tracking.id} onChange={handleIdChange}/> &nbsp; &nbsp; 
<button className="btn btn-dark" style={{width:"10%",height:"50px", fontWeight:'bolder',fontSize:'1.1rem'}} type="submit" onClick={sendId}>Track Order</button>
      <div class="wrapper">
        <div class="margin-area">
          <div class="dot one">1</div>
          {/* { info.beingBaked === "true" ? <div class="dot two">2</div> : null } */}
          <div class="dot two">2</div>

          <div class="dot three">3</div>
          <div class="dot four">4</div>
          {info.beingBaked==="true"? <div  class="progress-bar first"></div> : null}
          {info.outForDelivery==="true"? <div  class="progress-bar second"></div> : null}
          {info.delivered==="true"? <div  class="progress-bar third"></div> : null}
          {/* <div class="progress-bar first"></div> */}
          {/* <div class="progress-bar second"></div>
          <div class="progress-bar third"></div> */}
          <div class="message message-1">
           Order confirmed
            <div>
              <div class="message message-2">
Being Baked                <div>
                  <div class="message message-3">
                    Out for delivery
                    {/* {info._id} */}
                    {/* {info.customerName} */}
                    <div>
                      <div class="message message-4">
                        Delivered<div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <h2>{customerNames}</h2> */}
      </div>
    </div>
  );
};

export default OrderTracking;
