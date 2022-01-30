import React from "react";
import { useState } from "react";
import Product from "./Product.js";
import { Button } from "react-bootstrap";
// import "../App.css";
//data will come via props to this main.js file from Cartfunctions.js as we are extracting the products from the array in cartFunctions.js
export default function Main(props) {
  const { goods, onAdd } = props;
  const[cakes,setCakes]=useState(goods);
   const filterItem=(categItem)=>{
     var updatedItems=goods.filter((curElem)=>{
         return curElem.category===categItem
         //count the length of updatedItems array
      
       })
    
      setCakes(updatedItems)
    }

    
  return (
    
    <main className="main">
      <div className="occassion-btn-grp">
        <h4>Shop By Category</h4>
         
          <Button onClick={()=>setCakes(goods)} variant="primary">Show All</Button>{' '}
  <Button onClick={()=>filterItem('Occassions')}   variant="secondary">Occassions</Button>{' '}
  <Button onClick={()=>filterItem('specialmsg')}   variant="success">Special Message</Button>{' '}
  <Button onClick={()=>filterItem('specialdays')} variant="warning">Special Days</Button>{' '}
  <Button onClick={()=>filterItem('birthdaycakes')} variant="danger">Birthday Cakes</Button> 
  <Button onClick={()=>filterItem('bakery')}  variant="info">Bakery</Button>
        </div>
        <>
 
</>
        <br/><br/>
      <div className="container5">
        {cakes.map((product) => (
            <div>
             
              <Product key={product.id} product={product} onAdd={onAdd}></Product>
            
          </div>
        ))}
      </div>
    </main>
  );
}
