import React from "react";
import { useState,useEffect } from "react";
import swal from "sweetalert";
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBirthdayCake
  } from "@fortawesome/free-solid-svg-icons";
  import path from 'path';
import * as xlsx from 'xlsx';
const EditCake=()=>{

    const [cakes, setCakes] = useState([])
    const [cname, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category,setCategory]=useState("")
    const [_id,setId]=useState(null)   
useEffect(() => {
    getData();
  }, []);
var cakeData;
var data;
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
    setCakes(cakeData.result.cakes);
    data = cakeData.result.cakes;
    console.log(data);
    console.log("okayyyyyy"); 

    //
setCakes(data);
setName(data[0].cname);
setImage(data[0].image);
setPrice(data[0].price);
setCategory(data[0].category);
setId(data[0]._id);
}


async function deleteCake(_id) {
   const response=await fetch(`/cake/deleteCake/${_id}`, {
      method: 'DELETE',

    })
   const result=await response.json();
   getData();
 if(result.result==null||result.result==""||result.result==undefined){
  swal("cake not deleted",  "error");
 }
  else{
   swal({
    title: "Cake Deleted",
    text: "Cake deleted successfully",
    icon: "success",
    button: "OK",
   })
  }
    // .then((result) => {
    //   result.json().then((resp) => {
    //     console.warn(resp)
    //     getData()
    //   })
    // })
  }
  function selectCake(_id,cname,image,price,category)
  {
    // let item=cakes[id-1];
    setName(cname)
        setImage(image)
        setPrice(price);
        setId(_id)
        setCategory(category)
  }

  async function updateCake(e)
  {
   // e.preventDefault();
    let item={_id,cname,price,category,image}
    console.warn("item",item)
    try{
   const response= await fetch(`/cake/updateCake`, {
      method: 'PUT',
      headers:{
        // 'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    })
    const data=await response.json();
    console.log(data);
    swal({
      title: "Cake Updated",
      text: "Cake updated successfully",
      icon: "success",
      button: "OK",
      })
      
    // .then((result) => {
    //   result.json().then((resp) => {
    //     console.warn(resp)
    //    getData();
    //   })
    // })
    window.location.reload();
  }
catch(error){
console.log(error)
}}


$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});

const filterData = event => {
  const value = event.target.value.toLowerCase();
  const filteredUsers = cakes.filter(user => (`${user.cname} ${user.price}`.toLowerCase().includes(value)));
  setCakes(filteredUsers);
}

const saveExcel=()=>{
  var wb = xlsx.utils.book_new();
  var ws = xlsx.utils.aoa_to_sheet([
//save the enquiries in the excel file
    ["ID", "Cake Name", "Image", "Price", "Caegory"],
    ...cakes.map(cakes => [
      cakes._id,
      cakes.cname,
      cakes.image,
      cakes.price,
      cakes.category,
    
    ])
  ]);
  xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
  xlsx.writeFile(wb, path.resolve("./cakeOrderingSystem/cakes.xlsx"));
}



return(
    <div>
      <br/>
      <button style={{float:"left"}} className='btn btn-dark' onClick={saveExcel}>Save To Excel</button>

                <a href="#" id="scroll" style={{display: "none"}}><FontAwesomeIcon icon={faArrowUp}/></a>
                <br/>
                <input type="search"  onInput={filterData} placeholder="search cakes" />
                <br/>  <br/>
 <table border="5" className="table table-striped bg-light">
 <thead>

          <tr>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">ID</th>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}} scope="col">Cake Name</th>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}}scope="col">Cake Image</th>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}}scope="col">Cake Price</th>
          <th style={{borderRight: "1px solid #dedede", color:"#fecacc",backgroundColor:"black"}}scope="col">Cake Category</th>
          <th style={{ color:"#fecacc",backgroundColor:"black"}}scope="col">Activity</th>
          <th style={{ color:"#fecacc",backgroundColor:"black"}}scope="col"></th>
          </tr>
          </thead>

          <tbody>
          {
            cakes.map((item, i) =>
              <tr key={i}>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{item._id}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{item.cname}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}><img width="20%" height="10%" src={item.image}/></td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{item.price}</td>
                <td style={{borderRight: "1px solid #dedede", color:"black", fontWeight:"bold"}}>{item.category}</td>
                

                <td><button className="btn btn-danger" onClick={() => deleteCake(item._id)}>Delete</button></td>
                <td><button className="btn btn-info" onClick={() => selectCake(item._id,item.cname,item.image,item.price,item.category)}>Update</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>

        <br/><br/>
        <br/><br/>
        <div className="container">
        <div className="row input-container">
        <input type="text" value={_id} onChange={(e) =>{setId(e.target.value)}} />
        <br/><br/> <input type="text" value={cname} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} /> <br /><br />
        <input type="text" value={category}  onChange={(e)=>{setCategory(e.target.value)}} /> <br /><br />
        <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} /> <br /><br />
        </div>
        </div>
        <button className="btn btn-success" onClick={updateCake} >Update Cake</button>  
      </div>
     </div>
)
}
export default EditCake;