import React from 'react'
import {Line} from 'react-chartjs-2';
//import {CategoryScale} from 'chart.js'; 
import { Pie } from 'react-chartjs-2';
import { useState,useEffect } from 'react';
import { Chart }  from 'react-chartjs-2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    } from 'chart.js';
 

 import $ from 'jquery';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Sales = () => {


  const [greaterOrderData, setGreaterThanData] = useState([]);
;
// useEffect(() => {

// (async () => {
//   var greaterThanData;
//   try {
//   const response = await fetch('/order/getGreaterOrders');
//   greaterThanData = await response.json();
//   console.log(greaterThanData);
//   } catch (error) {
//   console.log(error);
//   greaterThanData = [];
//   }

//   setGreaterThanData(greaterThanData.result.greaterData);

// })();
// }, []);

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

const [lessOrderData, setLessThanData] = useState([])
// useEffect(() => {
// (async () => {
//   var lessThanData;
//   try {
//   const response = await fetch('/order/getLessOrders');
//   lessThanData = await response.json();
//   console.log(lessThanData);
//   } catch (error) {
//   console.log(error);
//   lessThanData = [];
//   }
//   setLessThanData(lessThanData.result.lessData);
// }
// )();

// }, []);


 

    // Chart.register(CategoryScale)
     ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        
        Title,
        Tooltip,
        Legend,
        ArcElement
        );
                
        const [homeDeliveryCount, setHomeDeliveryCount] = useState([]);

        
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

            const [pickupCount, setPickupCount] = useState([]);

            useEffect(() => {
              (async () => {
                var PickupData;
                try {
                  const response = await fetch("/order/pickupOrderCount");
                  PickupData = await response.json();
                  console.log(PickupData);
                } catch (error) {
                  console.log(error);
                  PickupData = [];
                }
                setPickupCount(PickupData.result.pickupOrders);
              })();
                }, []);
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

                const [orders, setOrders] = useState([])
                const [totalLoss, setTotalLoss] = useState([]);
              
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
          const totalLoss = DeletedOrdersData.result.totalPriceMinus;
          console.log(totalLoss);

          setTotalLoss(totalLoss);
                  })();
              }, [])
      
              const [orderProfit, setProfitCount] = useState([]);

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
                  console.log(typeof orderProfit);
                  //check the datatype of orderProfit 


     const Piedata = {
            labels: ['Pickup',  'Home Delivery',],
            datasets: [
              {
                label: '# of Votes',
                data: [`${homeDeliveryCount}`, `${pickupCount}`],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgb(0, 0, 0)',
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  'rgb( 0, 0, 0)',
                  // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,

                width: 50,
                height: 50
              },
            ],
          };
          



          const Pie1data = {
            labels: ['Accepted Orders',  'Rejected Orders',],
            datasets: [
              {
                label: '# of Votes',
                data: [`${getAcceptedOrdersCount}`, `${getDeletedOrdersCount}`],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgb(0, 0, 0)',
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  'rgb( 0, 0, 0)',
                  // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,

                width: 50,
                height: 50
              },
            ],
          };
          
        //   const barChartData = {
        //     labels: [
        //         "January",
        //         "February",
        //         "March",
        //         "April",
        //         "May",
        //         "June",
        //         "July"
        //       ],
        //     datasets: [
        
        //           {
        //             label: "My second dataset",
        //             data: ["45", "79", "50", "41", "16", "85", "20"],
        //             backgroundColor: "rgba(155,231,91,0.2)",
        //             borderColor: "rgba(255,99,132,1)",
        //             borderWidth: 1,
        //             //stack: 1,
        //             hoverBackgroundColor: "rgba(255,99,132,0.4)",
        //             hoverBorderColor: "rgba(255,99,132,1)"
        //           }
        //     ]
        //   };
        const data = {
          labels: ["5","10","15","20","25","30","35","40","45","50","55"],
          datasets: [
            {
              label: "First dataset",
              data: [1,2,3,5,6,7,8,9],
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)"
            },
            {
              label: "Second dataset",
              data: [{orderProfit}],
              fill: false,
              borderColor: "#742774"
            }
          ]
        };
        
    return (
        <div className="container">
          <a href="#" id="scroll" style={{display: "none"}}><FontAwesomeIcon icon={faArrowUp}/></a>

        <div>
            <h1>Sales</h1>
            <Line data={data} />
        </div>
        <br/>
        <hr/>


        <div>
            <h1>Sales</h1>
            <Pie data={Piedata} />
        </div>
        <br/>
<hr/>

      <div>
            <h1>Sales</h1>
            
            <h2>Potential Profit:  <h3 style={{color:"red"}}>&#8377; {totalLoss}</h3></h2>
            <br/>
            <Pie data={Pie1data}/>
      </div>
        {/* <div>
        <Bar data={barChartData}
           />
      </div> */}
        </div>

    )
}

export default Sales
