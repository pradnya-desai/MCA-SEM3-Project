
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbarr from './components/Navbarr.js';
import AboutUs from './components/AboutUs.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import ContactUs from './components/ContactUs.js';
import ReturnPolicy from './components/ReturnPolicy.js';
import OrderGuide from './components/OrderGuide.js'
import Login from './components/Login';
import Sidebar from './adminLogin/Sidebar.js'
import Dashboard from './adminLogin/Dashboard.js';
import ChangePassword from './adminLogin/ChangePassword.js';
import AddCake from './adminLogin/AddCake.js';
import Sales from './adminLogin/Sales.js';
import CartFunctions from './components/CartFunctions.js';
import Pickup from './components/Pickup.js';
import CustomerInformation from './components/CustomerInformation';
import Shipping from './components/Shipping';
import CustomerEnquiries from './adminLogin/CustomerEnquiries';
import EditCake from './adminLogin/EditCake.js';
import Orders from './adminLogin/Orders.js';
import Todo from './adminLogin/Todo.js';
import OrderList from './adminLogin/OrderList.js';
function App() {

  //get the cart items from local storage
  //const cartItems = JSON.parse(localStorage.getItem('cartItems'));

  
  
  return (
    <div className="App">
  


  <Route exact path="/">
  <Navbarr/>
    <Home/>
    <Footer/>
  </Route>

   <Route path="/about">
   <Navbarr/>
     <AboutUs/>
     <Footer/>
   </Route>
   

<Route path="/contact">
<Navbarr/>
     <ContactUs/>
     <Footer/>
   </Route>
  
       
   <Route path="/cart">
      <Navbarr/>
     <CartFunctions/>
     <Footer/>
   </Route>

{/* <Route path="/bakery">
<Navbar/>
<Bakery/>
<Footer/>
</Route>

<Route path="/occassions-bestsellers">
<Navbar/>
  <Occassions/>
  <Footer/>
</Route> */}

<Route path="/returnpolicy">
<Navbarr/>
  <ReturnPolicy/>
  <Footer/>
</Route>

<Route path="/orderguide">
<Navbarr/>
  <OrderGuide/>
  <Footer/>
</Route>

<Route path="/login">
<Navbarr/>
<Login/>
<Footer/>
</Route>


   
   <Switch>
<Route path="/adminlogin">
  <Sidebar/>
  <Todo/>
</Route>
</Switch>

<Route path="/dashboard">
<Sidebar/>
  <Dashboard/>
</Route>

<Route path="/changepassword">
<Sidebar/>
  <ChangePassword/>
</Route>

<Route path="/addcake">
  <Sidebar/>
  <AddCake/>
   </Route>

<Route path="/sales">
<Sidebar/>
  <Sales/>
</Route>

<Route path="/customerenquiries">
<Sidebar/>
<CustomerEnquiries/>
</Route>


<Route path="/customerInfo">
  {/* <Navbar/> */}
<CustomerInformation/>
{/* <Footer/> */}
</Route>

<Route path="/pickup">
<Pickup/>
</Route>

<Route path="/shipping">
  <Shipping/>
</Route>

<Route path="/manageCake">
<EditCake/>

</Route>

<Route path="/orders">
  <Orders/>
</Route>

<Route path="/todo">
  <Todo/>
</Route>

<Route path="/orderlist">
  <OrderList/>
  </Route>
    </div>
  );
}

export default App;
