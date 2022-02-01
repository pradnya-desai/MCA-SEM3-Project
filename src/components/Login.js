import React from 'react'
import { Link } from 'react-router-dom'
import Navbarr from './Navbarr.js'
import Sidebar from '../adminLogin/Sidebar.js'
import { useState } from 'react'
const Login = () => {
const [admin,setAdmin]=useState({
	  email:'', 
	  password:'' 

});

let name, value;
const handleInput = (e) => {
	console.log(e);
	  name = e.target.name;
	  value = e.target.value;
	  setAdmin({...admin,[name]:value});
	  console.log(admin);
	}


const loginData= async(e)=>{
e.preventDefault();
const { email, password } = admin;

const response = await fetch('/admin/login', {
	  method: 'POST', 
	  headers: {
		"Content-Type": "application/json"
},
body:JSON.stringify({
email, password
    })
    });
	const result=await response.json();
	if(result.status===403|| !result){
		alert('Invalid Credentials');
		
	}
	else{
		alert('Login Successful');
		window.location.href='/adminlogin';

	}
}
    return (
        <div>
            <div style={{marginTop:"-40px"}}>{Navbarr}</div>
             <div className="contact-item2" style={{paddingTop:"15%"}}>
             <h1 style={{backgroundColor:"#fecacc"}}>Admin Login</h1>
<form method='post'>
        <div class="container" style={{marginLeft:"30%"}}>


	<div class="row input-container" style={{display:"inline"}}>
			<div class="col-xs-12">
            <div class="styled-input1">
					<input type="text" value={admin.email} name='email' onChange={handleInput} className="contact-input" required />
					<label>Email</label> 
				</div>
			</div>
			
			<div class="col-md-6 col-sm-12">
				<div class="styled-input1" style={{float:"right"}}>
					<input type="password" value={admin.password} name='password' onChange={handleInput} className="contact-input" required />
					<label>Password</label> 
				</div>
			</div>
       <br/>
			<div class="col-md-6 col-sm-12">
				{/* <Link to='/adminlogin' target="_blank"> */}
					<div class="btn-lrg submit-btn"><button onClick={loginData}>Sign In</button></div>
					{/* </Link> */}
			</div>
            <br/>
            <br/>
            <div class="col-md-6 col-sm-12">
			<a >Forgot Password</a>
			</div>
	</div>
</div>

      </form>

        </div>
    </div>
    )
}

export default Login
