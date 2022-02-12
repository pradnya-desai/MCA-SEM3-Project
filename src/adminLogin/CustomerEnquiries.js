import react, { useState,useEffect } from 'react';
import { Button ,Modal,Form, FormControl, InputGroup} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import $ from 'jquery';

const CustomerEnquiries = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const[emailEnquiry,setEmailEnquiry]=useState({
  email:''
});


let name, value;
const handleInputChange = (e) => {
  console.log(e);
  name = e.target.name;
  value = e.target.value;
  setEmailEnquiry({...emailEnquiry,[name]:value});
  console.log(emailEnquiry);
}
var result;
function GetSelectedText(){
  var e = document.getElementById("country");
   result = e.options[e.selectedIndex].text;
  
  document.getElementById("result").innerHTML = result;
}


const sendEmail=async(e)=>{
  e.preventDefault();
  const {email}=emailEnquiry;
  const response=await fetch('/enquiry/sendEmail',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email
    })
  });
  const result=await response.json();
  console.log(result);
  if(result.result==null || result.result=="" || result.result==undefined){
    alert('Invalid Credentials');
  }
  else{
    alert('Email Sent Successfully');
  }
}

 const[enquiry,setEnquiries]=useState([])
        useEffect(() => {
            (async () => {
              var userData;
              try {
                const response = await fetch("/enquiry/getEnquiry");
                userData = await response.json();

                //display all the enquiries in the table 
                console.log(userData);

              } catch (error) {
                console.log(error);
                userData = [];
              }
              // setAllUser(userData);
               setEnquiries(userData.result.enquiries);
              
            })();
          }, []);



          const filterData = event => {
            const value = event.target.value.toLowerCase();
            const filteredUsers = enquiry.filter(user => (`${user.cname} ${user.email}`.toLowerCase().includes(value)));
            setEnquiries(filteredUsers);
          }
          // const sendEmail = (e) => {
          //   e.preventDefault();
        
          //   emailjs.sendForm('gmail', 'template_3s7slla',e.target, 'user_wqU06aNrWMVEJa5fyD7F1')
          //     .then((result) => {
          //         console.log(result.text);
          //     }, (error) => {
          //         console.log(error.text);
          //     });
          // };



    return (
        <div>
        <h1>Customer Enquiries</h1>
    
  <br/><br/>
  

        {/* <Button type='submit' onSubmit={onSubmit} style={{height:"4rem", fontSize:"1.2rem"}} variant="primary">Show All Enquiries</Button> */}
<input type="search"  onInput={filterData} placeholder="search customer" />
        <table className="table table-striped bg-light" >
        <thead>
            <tr>
            <th scope="col">Customer Id</th>

            <th scope="col">Customer Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            </tr>
        </thead>
        <tbody>
            {enquiry.map((enquiry) => (
            <tr> 
             <td>{enquiry._id}</td>   
            <td>{enquiry.cname}</td>
            <td>{enquiry.email}</td>
            <td>{enquiry.phone}</td>
            <td>{enquiry.message}</td>
            <td><button data-bs-toggle="modal" data-bs-target="#staticBackdrop" type='button' >Respond</button></td>
            </tr>
            ))}
        </tbody>
        </table>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <form method='post' onSubmit={sendEmail}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    
      {/* <select> */}
       {/* { enquiry.map(enquiry => (

    <option name='name' >{enquiry.cname}</option>
    ))} */}
{/* </select> */}



<select id="country" onChange={GetSelectedText}>
{enquiry.map(enquiry => (
    <option name='email' value={emailEnquiry.email} onChange={handleInputChange} >{enquiry.email}</option>
))
}
</select>
{/* <input type="text" name='email' value={emailEnquiry.email} disabled onChange={handleInputChange} /> */}
    <input type="textbox"  name='email' value={emailEnquiry.email}  onChange={handleInputChange} />
<span id='result' ></span>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Send Mail</button>
        
      </div>
    </div>
  </div>
  </form>
  {/* <button onClick={GetSelectedText} class="btn btn-primary">Get Selected Text</button> */}
		
</div>
 

        </div>
    );
    }
    export default CustomerEnquiries;