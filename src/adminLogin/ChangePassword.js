import React from 'react'

const ChangePassword = () => {
    return (
        <div>
             <div class="container">

	
<div class="row input-container">
        {/* <div class="col-xs-12">
            <div class="styled-input1 wide">
                <input type="text" className="contact-input" required />
                <label>Name</label> 
            </div>
        </div> */}
        <div class="col-md-6 col-sm-12">
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
        {/* <div class="col-xs-12">
            <div class="styled-input1 wide">
                <textarea required></textarea>
                <label>Message</label>
            </div>
        </div> */}
        <div class="col-xs-12">
            <div class="btn-lrg submit-btn">Change Password</div>
        </div>
</div>
</div>

        </div>
    )
}

export default ChangePassword
