import React from 'react'
import { Link } from 'react-router-dom'
import Navbarr from './Navbarr.js'
import Sidebar from '../adminLogin/Sidebar.js'
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'

//import axios from "axios"



const Login = () => {	
				
	const [admin,setAdmin]=useState({
		email:'', 
		password:'' 
  
  },
  );
  let name, value;
  const handleInputChange = (e) => {
	  console.log(e);
		name = e.target.name;
		value = e.target.value;
		setAdmin({...admin,[name]:value});
		console.log(admin);
	  }  
	const {
		register,
		formState: { errors },
		reset,
		trigger,
	  } = useForm();
	

	  const onSubmit =async (e) => {
		// console.log(data);
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
	 	const result= await response.json();
		 if(result.result==null || result.result=="" || result.result==undefined){
			alert('Invalid Credentials');
		}
		
	 	else
		 {
	 		alert('Login Successful');
			window.location.href='/adminlogin';
	 	}
		 			 
		 //(result.result.statusCode==200 && result.result.message==="LOGIN SUCCESSFUL")
//  else {
	 	// 	alert('Invalid Credentials');
	 	// }





		//  if(result.result.statusCode===404|| !result){
		// 	alert('Invalid Credentials');
			
		// }
		// else{
		// 	alert('Login Successful');
		// 	window.location.href='/adminlogin';
	
		// }
	// try {

	// let res = await fetch("/admin/login", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         email, password 

    //     }),
    //   });
    //   let resJson = await res.json();
    //   if (resJson.status === 200) {
	// 	  alert("login Successful");
	// 	  window.location.href = "/dashboard";
	//   }
	//   else{
	// 	  alert("Invalid Credentials");
	//   }

	// } catch (err) {
	// 	console.log(err);
	//   }

	}

    return (
        <div>
            <div style={{marginTop:"-40px"}}>{Navbarr}</div>
             <div className="contact-item2" style={{paddingTop:"15%"}}>
             <h1 style={{backgroundColor:"#fecacc"}}>Admin Login</h1>
<form method='post' onSubmit={onSubmit}> 
        <div class="container" style={{marginLeft:"30%"}}>


	<div class="row input-container" style={{display:"inline"}}>
			<div class="col-xs-12">
            <div class="styled-input1">
					<input type="text"   name='email'  className={`contact-input ${errors.email && "invalid"}`}
					
					{...register("email", { required: "Email is Required" ,
					pattern: {
					  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					  message: "Invalid email address",
					}})}

					onKeyUp={() => {
						trigger("email");
					  }}

value={admin.email}
					  onChange={handleInputChange}
					required />
			
					<label>Email</label> 
					{errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
				</div>

			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input1" style={{float:"right"}}>
					<input type="password"  name='password'  className={`contact-input ${errors.password && "invalid"}`}
					
					{...register("password", { required: "password is Required" ,
					min: {
						value: 5,
						message: "Minimum Required password length is 5",
					  },
					  max: {
						value: 12,
						message: "Maximum allowed password length is 12",
					  },
					})}

					onKeyUp={() => {
						trigger("password");
					  }}
value={admin.password}
					  onChange={handleInputChange}
					required />


					<label>Password</label> 
					{errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
				</div>

			</div>
       <br/>
			

            {/* <div class="col-md-6 col-sm-12">
			<a>Forgot Password</a>
			</div> */}
	</div>
	
</div>

<br/>
            <br/>
				{/* <Link to='/adminlogin' target="_blank"> */}
				<button type='submit' style={{border:"none", backgroundColor:"black"}} ><div class=" submit-btn">Sign In</div></button>
					{/* </Link> */}
			
       </form>

        </div>
    </div>
    )
}

export default Login
