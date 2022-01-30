
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
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
function App() {

  //get the cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));

  
  
  return (
    <div className="App">
  


  <Route exact path="/">
  <Navbar/>
    <Home/>
    <Footer/>
  </Route>

   <Route path="/about">
   <Navbar/>
     <AboutUs/>
     <Footer/>
   </Route>
   

<Route path="/contact">
<Navbar/>
     <ContactUs/>
     <Footer/>
   </Route>
  
       
   <Route path="/cart">
      <Navbar/>
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
<Navbar/>
  <ReturnPolicy/>
  <Footer/>
</Route>

<Route path="/orderguide">
<Navbar/>
  <OrderGuide/>
  <Footer/>
</Route>

<Route path="/login">
<Navbar/>
<Login/>
<Footer/>
</Route>


   
   <Switch>
<Route path="/adminlogin">
  <Sidebar/>
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
  <AddCake/>
   </Route>

<Route path="/sales">
<Sidebar/>
  <Sales/>
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

    </div>
  );
}

export default App;
