import react, { useState,useEffect } from 'react';
import { Button ,Modal,Form, FormControl, InputGroup} from 'react-bootstrap';
const CustomerEnquiries = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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


    return (
        <div>
        <h1>Customer Enquiries</h1>
    
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
            <td><button onClick={handleShow} >Respond</button></td>
            </tr>
            ))}
        </tbody>
        </table>



        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mail</Modal.Title>
        </Modal.Header>
        <Modal.Body>Respond To The Customer</Modal.Body>
        {/* <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm" >From</InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>  */}
   <Form.Control
    type="text"
    placeholder="pradnya.d10@gmail.com"
    aria-label="Disabled input example"
    disabled
    readOnly
  />

  <br/><br/>
  
        <Form.Select size="sm">

          To {enquiry.map((enquiry) => (
     <option>{enquiry.email}</option>
    ))}
  </Form.Select>
    <br/><br/>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Your Message Here</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleClose}>
            Send Mail
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
    }
    export default CustomerEnquiries;