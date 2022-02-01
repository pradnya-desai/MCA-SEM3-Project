import React from 'react'
import { Nav,NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
   
        <div>

<Nav variant="pills" activeKey="1" >
      <Nav.Item>
        <Nav.Link eventKey="1">
       <NavLink to="/dashboard"> Dashboard</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" style={{color:"black"}}>
          Respond To queries
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">
        <NavLink to="/sales" style={{color:"black"}}> Sales/Profit</NavLink>
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Cakes" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" style={{color:"black"}}>Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" style={{color:"black"}}>Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3" style={{color:"black"}}>Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4" style={{color:"black"}}>Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Orders" id="nav-dropdown" style={{color:"black"}}>
        <NavDropdown.Item eventKey="4.1"style={{color:"black"}}>Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"style={{color:"black"}}>Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3" style={{color:"black"}}>Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4" style={{color:"black"}}>Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventKey="5">
        <NavLink to='/changepassword' style={{color:"black"}}>Change Password</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:"black"}} eventKey="5">
        Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>


        </div>
    )
}

export default Sidebar
