import React from 'react'
import { Link } from 'react-router-dom'
import Navbarr from './Navbarr.js'
import Sidebar from '../adminLogin/Sidebar.js'
const Login = () => {

    return (
        <div>
            <div style={{marginTop:"-40px"}}>{Navbarr}</div>
             <div className="contact-item2" style={{paddingTop:"15%"}}>
             <h1 style={{backgroundColor:"#fecacc"}}>Admin Login</h1>

        <div class="container" style={{marginLeft:"30%"}}>


	<div class="row input-container" style={{display:"inline"}}>
			<div class="col-xs-12">
            <div class="styled-input1">
					<input type="text" className="contact-input" required />
					<label>Email</label> 
				</div>
			</div>
			
			<div class="col-md-6 col-sm-12">
				<div class="styled-input1" style={{float:"right"}}>
					<input type="password"  className="contact-input" required />
					<label>Password</label> 
				</div>
			</div>
       <br/>
			<div class="col-md-6 col-sm-12">
				<Link to='/adminlogin' target="_blank"><div class="btn-lrg submit-btn">Sign In</div></Link>
			</div>
            <br/>
            <br/>
            <div class="col-md-6 col-sm-12">
			<a >Forgot Password</a>
			</div>
	</div>
</div>

      

        </div>
    </div>
    )
}

export default Login
