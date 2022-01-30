import React from 'react'

const AddCake = () => {
    return (
        <div>
      <div class="container">

	
<div class="row input-container">
     
        <div class="col-md-6 col-sm-12">
            <div class="styled-input1">
                <input type="text" className="contact-input" required />
                <label>Cake Name </label> 
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="styled-input1" style={{float:"right"}}>
                <input type="text"  className="contact-input" required />
                <label>Cake Price</label> 
            </div>
        </div>

           <div class="col-xs-12">
            <div class="styled-input1 wide">
                <input type="text" className="contact-input" required />
                <label>Cake Category</label> 
            </div>
        </div>

        <div class="col-xs-12">
            <div class="styled-input1 wide">
                <input type="file" className="contact-input" required />
                {/* <label>Cake Photo</label>  */}
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

export default AddCake
