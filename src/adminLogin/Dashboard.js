import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookReader, faChartBar, faDigitalTachograph, faGraduationCap, faMoneyBill, faShoppingBag, faUsers } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { faDelicious } from '@fortawesome/free-brands-svg-icons'
import Sidebar from './Sidebar.js'
import { useState,useEffect } from 'react'
const Dashboard = () => {

const [enquiryCount,setEnquiryCount]=useState([]);
const[cakeCount,setCakeCount]=useState([]);
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


    return (
        <div>
           {/* <div className='gradient-cards'>
<div className='order-count'>
   <h3><FontAwesomeIcon icon={faBook}/> orders</h3>  
</div>

<div className='delivery-count'>
<h3><FontAwesomeIcon icon={faShoppingBag}/> delivered</h3>
</div>
<div className='user-queries-count'>
<h3><FontAwesomeIcon icon={faUsers}/> subscribers</h3>
</div>
<div className='profit-count'>
<h3><FontAwesomeIcon icon={faChartBar}/> profit/sales</h3>
</div>
           </div> */}
		   {/* <div>{Sidebar}</div> */}
<div class="card-holder">
	<section class="card-count card--01">
		<h1 class="card__heading">Orders</h1>
		<p class="card__text">
		
		
			With a funny blurry drop shadow
		</p>
	</section>
	<span class="card-shadow card-shadow--01"></span>
</div>

<div class="card-holder">
	<section class="card-count card--03">
		<h1 class="card__heading">Deliveries</h1>
		<p class="card__text">
			With a funny blurry drop shadow
		</p>
	</section>
	<span class="card-shadow card-shadow--03"></span>
</div>
<div class="card-holder">
	<section class="card-count card--04">
		<h1 class="card__heading">Enquiries</h1>
		<p class="card__text">
			{enquiryCount}
		</p>
	</section>
	<span class="card-shadow card-shadow--02"></span>
</div>
<div class="card-holder">
	<section class="card-count card--02">
		<h1 class="card__heading">Profit</h1>
		<p class="card__text">
			With a funny blurry drop shadow
		</p>
	</section>
	<span class="card-shadow card-shadow--02"></span>
</div>
<div class="card-holder">
	<section class="card-count card--05">
		<h1 class="card__heading">Cakes for Sale</h1>
		<p class="card__text">
{cakeCount}
</p>
	</section>
	<span class="card-shadow card-shadow--05"></span>
</div>
        </div>
    )
}

export default Dashboard
