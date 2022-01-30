import React from 'react'
import { Nav,NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
   
        <div>

<Nav variant="pills" activeKey="1">
      <Nav.Item>
        <Nav.Link eventKey="1">
       <NavLink to="/dashboard"> Dashboard</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          Respond To queries
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">
        <NavLink to="/sales"> Sales/Profit</NavLink>
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Cakes" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Orders" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventKey="5">
        <NavLink to='/changepassword'>Change Password</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="5">
        Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>


        </div>
    )
}

export default Sidebar
