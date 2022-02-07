import React, { useState } from 'react'

const ChangePassword = () => {

const [newPassword, setNewPassword] = useState({
    email: '',
    password: '',
})

let name, value;
const handleInputChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setNewPassword({ ...newPassword, [name]: value });
    console.log(newPassword);
}


const onSubmit= async (event) => {

    event.preventDefault();
    const {email, password } = newPassword;
     try{
        const response = await fetch('/admin/updatePassword', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        const data = await response.json()
        console.log(data);
  alert(data.result.message);


    }
     catch(error){
         console.log(error)
     }


}
    return (
        <div>
             <div class="container">

	<form onSubmit={onSubmit}>
<div class="row input-container">
        {/* <div class="col-xs-12">
            <div class="styled-input1 wide">
                <input type="text" className="contact-input" required />
                <label>Name</label> 
            </div>
        </div> */}
        <div class="col-md-6 col-sm-12">
            <div class="styled-input1">
                <input type="text" name='email' value={newPassword.email} onChange={handleInputChange}  className="contact-input" required  />
                <label>Email</label> 
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="styled-input1" style={{float:"right"}}>
                <input type="password" name='password' onChange={handleInputChange} value={newPassword.password} className="contact-input" required />
                <label>Password</label> 
            </div>
        </div>
        {/* <div class="col-xs-12">
            <div class="styled-input1 wide">
                <textarea required></textarea>
                <label>Message</label>
            </div>
        </div> */}
        <div class="col-xs-12">
        <button type='submit' style={{backgroundColor:"black", border:"none"}}> <div class="btn-lrg submit-btn">Change Password</div></button>
        </div>
</div>
</form>
</div>

        </div>
    )
}

export default ChangePassword
