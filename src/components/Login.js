import React from 'react'
import { Link } from 'react-router-dom'
import Navbarr from './Navbarr.js'
import Sidebar from '../adminLogin/Sidebar.js'
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'
//import axios from "axios"
import { NavLink } from 'react-router-dom'



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
	 	swal({
			title: "Login Successful",
			text: "Welcome to Cake Ordering System",
			icon: "success",
			button: "OK",

		 })
			window.location.href='/adminlogin';
			//redirect to admin dashboard page using NavLink
			// {<NavLink to="/adminlogin"/>}
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

	const [otpEmailField,setOtpEmail]=useState({
		email:''
	})
	const handleOtpEmailChange = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;
		setOtpEmail({...otpEmailField,[name]:value});
		console.log(otpEmailField);

	}

const sendOtp=async (e)=>{
	e.preventDefault();
const {email}=otpEmailField;
	const response = await fetch('/admin/validateEmail', {
			method : 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body:JSON.stringify({
				email
			})
		});
		const result= await response.json();
		if(result.result==null || result.result=="" || result.result==undefined){
			swal ( "Oops" ,  "Invalid Email" ,  "error" );
		}
		
		else
		 {
			swal({
				title: "OTP Sent",
				text: "Please check your email",
				icon: "success",
				button: "OK",
			
			});
			// window.location.href='/adminlogin';
		}
		
	}


	const [frontEndotp,setOtp]=useState({
		otp:''
	})

	const handleOtpChange = (e) => {
		e.preventDefault();
		name = e.target.name;
		value = e.target.value;
		setOtp({...frontEndotp,[name]:value});
		console.log(frontEndotp);
	}

	const validateOtp=async (e)=>{
		e.preventDefault();
		const {otp}=frontEndotp;

	
		const response = await fetch('/admin/validateOtp', {
			method : 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body:JSON.stringify({
				otp
			})
		});
	
		const result= await response.json();
		if(result.result==null || result.result=="" || result.result==undefined){
			swal ( "Oops" ,  "Invalid OTP" ,  "error" );
		}
		
		else
		 {
			swal({
				title: "OTP Validated",
				text: "Please change your password",
				icon: "success",
				button: "OK",
			
			});
			// window.location.href='/adminlogin';
		}
		
	}

const[newPassword,setNewPassword]=useState({
	password:''
})
const handleNewPasswordChange = (e) => {
	e.preventDefault();
	name = e.target.name;
	value = e.target.value;
	setNewPassword({...newPassword,[name]:value});
	console.log(newPassword);
}


const sendPassword=async (e)=>{
	e.preventDefault();
	const email=otpEmailField.email;
	const {password}=newPassword;
	const response = await fetch('/admin/updateNewPassword', {
			method : 'PUT',
			headers: {
				"Content-Type": "application/json"
			},
			body:JSON.stringify({
				email,
				password

			})
		});
		const result= await response.json();
		if(result.result==null || result.result=="" || result.result==undefined){
			swal ( "Oops" ,  "password was not changed" ,  "error" );
		}
		
		else
		 {
			swal({
				title: "Password Changed",
				text: "Please Login",
				icon: "success",
				button: "OK",
			
			});

		}
		
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
			

            
	</div>
	
</div>

<br/>
            <br/>
				{/* <Link to='/adminlogin' target="_blank"> */}
				<button type='submit' style={{border:"none", backgroundColor:"black"}} ><div class=" submit-btn">Sign In</div></button>
					{/* </Link> */}
					<br/><br/>
			<div class="col-sm-12">
			<a data-bs-toggle="modal" style={{cursor:"pointer"}} data-bs-target="#exampleModal">Forgot Password</a>
			</div>
       </form>

{/* <button type="button" class="btn btn-primary" >
  Launch demo modal
</button> */}

<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
	  <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Email Id</span>
  <input type="text" name='email' onChange={handleOtpEmailChange} value={otpEmailField.email} class="form-control" aria-label="Sizing example input" 
  aria-describedby="inputGroup-sizing-sm"/>
</div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModal1" class="btn btn-dark" onClick={sendOtp}>Get OTP</button>
      </div>
    </div>
  </div>
</div>




{/* modal 2 for otp validation */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
	  <div class=" input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">OTP</span>
      <input type="password" name="otp" onChange={handleOtpChange} onKeyUpCapture={validateOtp} value={frontEndotp.otp} class="form-control"aria-label="Sizing example input" 
	  aria-describedby="inputGroup-sizing-sm" id="inputPassword1"/>
	      {/* <input type="password" disabled name="password" onChange={handleNewPasswordChange} onKeyUpCapture={sendPassword} value={newPassword.password} class="form-control"aria-label="Sizing example input" 
	  aria-describedby="inputGroup-sizing-sm" id="inputPassword"/> */}
  </div>



  <div class=" input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
      
	       <input type="password"  name="password" onChange={handleNewPasswordChange} 
		    value={newPassword.password} class="form-control"aria-label="Sizing example input" 
	  aria-describedby="inputGroup-sizing-sm" id="inputPassword"/>
  </div>
  

      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={sendPassword}>Change Password</button> 
      </div>
    </div>
  </div>
</div>

{/* end of modal 2 */}
        </div>
    </div>
    )
}

export default Login
