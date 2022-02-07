import React from "react";
import { useState,useEffect } from "react";
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


function deleteCake(_id) {
    fetch(`/cake/deleteCake/${_id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getData()
      })
    })
  }
  function selectCake(id)
  {
    let item=cakes[id-1];
    setName(item.cname)
        setImage(item.image)
        setPrice(item.price);
        setId(item.id)
        setCategory(item.category)
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
    alert("cake updated");
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
}



}
return(
    <div>
 <table border="5" className="table table-striped bg-light">
 <thead>

          <tr>
          <th scope="col">ID</th>
          <th scope="col">Cake Name</th>
          <th scope="col">Cake Image</th>
          <th scope="col">Cake Price</th>
          <th scope="col">Cake Category</th>
          </tr>
          </thead>

          <tbody>
          {
            cakes.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.cname}</td>
                <td>{item.image}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                

                <td><button onClick={() => deleteCake(item.id)}>Delete</button></td>
                <td><button onClick={() => selectCake(item.id)}>Update</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>

        <br/><br/>
        <br/><br/>
        <input type="text" value={_id} onChange={(e) =>{setId(e.target.value)}} />
        <br/> <input type="text" value={cname} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} /> <br /><br />
        <input type="text" value={category}  onChange={(e)=>{setCategory(e.target.value)}} /> <br /><br />
        <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} /> <br /><br />
        <button onClick={updateCake} >Update User</button>  
      </div>
     </div>
)
}
export default EditCake;