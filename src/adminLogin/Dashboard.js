import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookReader, faChartBar, faDigitalTachograph, faGraduationCap, faMoneyBill, faShoppingBag, faUsers } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { faDelicious } from '@fortawesome/free-brands-svg-icons'
import Sidebar from './Sidebar.js'

const Dashboard = () => {
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
	<section class="card card--01">
		<h1 class="card__heading">Orders</h1>
		<p class="card__text">
			With a funny blurry drop shadow
		</p>
	</section>
	<span class="card-shadow card-shadow--01"></span>
</div>

<div class="card-holder">
	<section class="card card--02">
		<h1 class="card__heading">Deliveries</h1>
		<p class="card__text">
			With a funny blurry drop shadow
		</p>
	</section>
	<span class="card-shadow card-shadow--02"></span>
</div>
<div class="card-holder">
	<section class="card card--02">
		<h1 class="card__heading">Subscribers</h1>
		<p class="card__text">
			With a funny blurry drop shadow
		</p>
	</section>
	<span class="card-shadow card-shadow--02"></span>
</div>
<div class="card-holder">
	<section class="card card--02">
		<h1 class="card__heading">Sales</h1>
		<p class="card__text">
			With a funny blurry drop shadow
		</p>
	</section>
	<span class="card-shadow card-shadow--02"></span>
</div>
        </div>
    )
}

export default Dashboard
