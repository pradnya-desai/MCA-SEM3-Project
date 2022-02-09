import React from 'react'
import { Nav,NavDropdown ,Accordion} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
   
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink to="/dashboard"><a class="navbar-brand" href="#">Dashboard</a></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="/customerenquiries"><a class="nav-link active" aria-current="page" href="#">Enquiries</a></NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Sales</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Cakes
          </a>
          <ul class="dropdown-menu active" aria-labelledby="navbarDropdown">
            <li><NavLink to="/addcake"><a style={{color:"black"}} class="dropdown-item" href="#">Add Cake</a></NavLink></li>
            <li><hr class="dropdown-divider"/></li>

            <li><NavLink to="/manageCake"><a style={{color:"black"}} class="dropdown-item" href="#">Edit Cake</a></NavLink></li>
            {/* <li><a style={{color:"black"}} class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Orders
          </a>
          <ul class="dropdown-menu active" aria-labelledby="navbarDropdown">
            <li><a style={{color:"black"}} class="dropdown-item" href="#">Action</a></li>
            <li><a  style={{color:"black"}} class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a style={{color:"black"}} class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <NavLink to="/changepassword"><a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Change Password</a></NavLink>
        </li>
        
      <li class="nav-item">
         <NavLink to="/"> <a class="nav-link active" aria-current="page" href="#">Logout</a></NavLink>
        </li>
     
      </ul>
    
    </div>
  </div>
</nav>
{/* <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Go to site</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active"  aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#">Respond to Queries</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"   href="#">Sales/Profit</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#">Change Password</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
{/* <Nav variant="pills" activeKey="1" >
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
    </Nav> */}


        </div>
    )
}

export default Sidebar
