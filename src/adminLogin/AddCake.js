import React from 'react'
 //import data from '../components/data.js'
 import { useState,useEffect } from 'react';
 import swal from 'sweetalert';
const AddCake = () => {
    const [existingCakes, setExistingCakes] = useState([]);

const [cakess, setCakes] = useState({
cname: '',
price: '',
image: '',
category: ''
});

let name, value;
const handleChange = (e) => {
e.preventDefault();
name = e.target.name;
value = e.target.value;
setCakes({
...cakess,
[name]: value
});
};

useEffect(() => {
    getData();
  }, []);

  var cakeData;
  var data;
  var lastId
const getData = async () => {
    try {
      const response = await fetch("/cake/getCake");
      cakeData = await response.json();
      console.log(cakeData);
      console.log("hi");
    } catch (error) {
      console.log(error);
      cakeData = [];
    }
    setExistingCakes(cakeData.result.cakes);
    data = cakeData.result.cakes;
    console.log(data);
    console.log("okayyyyyy");  
   
  //const idArray=[...existingCakes.map(x=>x.id)];
  //console.log(idArray);
  // lastId = idArray[idArray.length - 1];
  //console.log(lastId);
  //lastId = Number(lastId) + 1;
  // console.log("how r u")
  // console.log(lastId);


  };

const onSubmit = async (e) => {
    e.preventDefault();
    
   
    const {cname, price, image, category} = cakess;
    const response = await fetch("/cake/saveCake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      
        cname,
       price,
       image,
        category,
      }),
    });


    const result = await response.json();
    if (
      result.result == null ||
      result.result == "" ||
      result.result == undefined
    ) {
     swal("Oops!", "Cake Not Added!", "error");
    } else {
    swal({
      title: "Cake Added",
      text: "Cake added successfully",
      icon: "success",
      button: "OK",
    })
    }
  };


    return (
        <div>
      <div class="container">

      <form onSubmit={onSubmit}>
<div class="row input-container">
<div class="col-md-6 col-sm-12">
            <div class="styled-input1">
                {/* <input type="number"  disabled className="contact-input" required /> */}
                {/* <label>Cake Id </label>  */}
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="styled-input1">
                <input type="text" name='cname' onChange={handleChange} value={cakess.cname} className="contact-input" required />
                <label>Cake Name </label> 
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="styled-input1" style={{float:"right"}}>
                <input type="text" name='price'  onChange={handleChange} value={cakess.price} className="contact-input" required />
                <label>Cake Price</label> 
            </div>
        </div>

           <div class="col-xs-12">
            <div class="styled-input1 wide">
                <input type="text" name='category'  onChange={handleChange} value={cakess.category} className="contact-input" required />
                <label>Cake Category</label> 
            </div>
        </div>

        <div class="col-xs-12">
            <div class="styled-input1 wide">
                <input type="text" name='image' value={cakess.image}  onChange={handleChange} className="contact-input" required />
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
           <button type='submit'> <div class="btn-lrg submit-btn">Add Cake</div></button>
        </div>
</div>
</form>
</div>
        </div>
    )
}

export default AddCake
