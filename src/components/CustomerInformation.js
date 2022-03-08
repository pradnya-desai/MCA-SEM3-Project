import React from "react";
import { Breadcrumb } from "react-bootstrap";

const CustomerInformation = (props) => {
  // get the cart items and the total price from the Basket component props and pass it to the Shipping component props as cartItems and totalPrice respectively using destructuring assignment syntax  
  // const { cartItems, totalPrice } = (props.location && props.location.state)||{};
const { cartItems } = props;
  console.log(props);

  return (
    <div>
      {/* <div className="shipping-container">

      <div class="container" style={{ paddingTop: "-5px" }}>
      <Breadcrumb>
  <Breadcrumb.Item>Cart</Breadcrumb.Item>
  <Breadcrumb.Item>
   <b>Customer Info</b>
  </Breadcrumb.Item>
</Breadcrumb>
        <div class="row input-container">
          <div class="col-xs-12">
            <div class="styled-input1 wide">
              <input type="text" name="uname" className="contact-input" required />
              <label>Name</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1">

              <input type="text" className="contact-input" required />
              <br/>
            <br/>
              <button onClick="">Get OTP</button>

              <label>Email</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1" style={{ float: "right" }}>
              <input type="text" className="contact-input" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="styled-input1 wide">
              <input
                type="text"
                style={{ cursor: "not-allowed" }}
                disabled
                value="India"
                className="contact-input"
                required
              /> */}
              {/* <label>Name</label>  */}
            {/* </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1">
              <input
                type="text"
                style={{ cursor: "not-allowed" }}
                disabled
                value="Maharashtra"
                className="contact-input"
                required
              /> */}
              {/* <label>State</label>  */}
            {/* </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1" style={{ float: "right" }}>
              <input
                type="text"
                style={{ cursor: "not-allowed" }}
                disabled
                value="Pune"
                className="contact-input"
                required
              /> */}
              {/* <label>City</label>  */}
            {/* </div>
          </div>
          <div class="col-xs-12">
            <div class="styled-input1 wide">
              <input type="text" className="contact-input" required />
              <label>Address</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
          <label>Select Date of Delivery</label>

            <div class="styled-input1">

              <input type="date" className="contact-input" required />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input1" style={{ float: "right" }}>
              <br/>
              <input type="text" className="contact-input" required />
              <label><br/>Enter Your Area Pincode</label>
            </div>
          </div> */}
          {/* <div class="col-xs-12">
            <div class="styled-input1 wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div> */}
          {/* <div class="col-xs-12">
            <div class="btn-lrg submit-btn">Place Order</div>
          </div>
        </div>
      </div>

<div className="shipping-cart-items">
<h4>Shipping Price</h4>
<p style={{backgroundColor:"black"}}>{cartItems}</p> */}
{/* <h4>{totalPrice}</h4> */}






{/* </div>
</div> */}




    </div>
  );
};

export default CustomerInformation;




// const xlsx = require('xlsx');
// const path = require('path');
// const exportExcel = 
//(data, workSheetColumnNames, workSheetName, filePath) => {
//     const workBook = xlsx.utils.book_new();
                     
//     const workSheetData 
//          workSheetColumnNames,
//          ... data
//     ];
//      const workSheet = xlsx.utils.aoa_to_sheet (workSheetData);
//     xlsx.utils.book_append_sheet (workBook, workSheet, workSheetName);
//     xlsx.writeFile(workBook, path.resolve(filePath));
                       
// }
// const exportUsersToExcel = 
//(users, workSheetColumnNames, workSheetName, filePath) => {
//     const data = users.map(user => {
//          return [user.id, user.name, user.age];
//     });
//     exportExcel(data, workSheetColumnNames, workSheetName, filePath);


// module.exports = exportUsersToExcel;
// const workSheetColumnName [ 
//     "ID",
//      "Name",
//     "Age"
// const workSheetName = 'Users'; 
// const filePath = './outputFiles/excel-from-js.xlsx';
// exportUsersTOExcel(users, workSheetColumnName, workSheetName, filePath);






// const exportUsersToExcel = require('./exportService');
// const users = [
//     {
//         id: 0,
//         name: 'Peter',
//         age: 31
//     },
//     {
//          id: 1,
//         name: 'John',
//         age: 23
//     }
// );
