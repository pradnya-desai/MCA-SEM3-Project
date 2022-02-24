import React from 'react'
import {Line} from 'react-chartjs-2';
//import {CategoryScale} from 'chart.js'; 
import { Pie } from 'react-chartjs-2';
import { useState,useEffect } from 'react';
import { Chart }  from 'react-chartjs-2'
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
 

  

const Sales = () => {


  const [greaterOrderData, setGreaterThanData] = useState([]);
  const [lessOrderData, setLessThanData] = useState([]);
useEffect(() => {

(async () => {
  var greaterThanData;
  try {
  const response = await fetch('/order/getGreaterOrders');
  greaterThanData = await response.json();
  console.log(greaterThanData);
  } catch (error) {
  console.log(error);
  greaterThanData = [];
  }

  setGreaterThanData(greaterThanData.result.greaterData);

})();
}, []);

useEffect(() => {
(async () => {
  var lessThanData;
  try {
  const response = await fetch('/order/getLessOrders');
  lessThanData = await response.json();
  console.log(lessThanData);
  } catch (error) {
  console.log(error);
  lessThanData = [];
  }
  setLessThanData(lessThanData.result.lessData);
}
)();

}, []);


    const data = {
        labels: ["less than 1000","greater than 1000"],
        datasets: [
          {
            label: "First dataset",
            data: [1,2,3,4,5,6,7,8,9,"more than 10"],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Second dataset",
            data: [`${greaterOrderData}`],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };

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
       
        
    return (
        <div className="container">
        <div>
            <h1>Sales</h1>
            <Line data={data} />
        </div>


        <div>
            <h1>Sales</h1>
            <Pie data={Piedata} />
        </div>

        {/* <div>
        <Bar data={barChartData}
           />
      </div> */}
        </div>

    )
}

export default Sales
