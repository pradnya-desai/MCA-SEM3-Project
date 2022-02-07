import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Basket from "./Basket.js";
import { useState,useEffect } from "react";
function CartFunctions() {

//for setting existing cakes
const [existingCakes, setExistingCakes] = useState([]);

  // is called on page load
  useEffect(() => {
    getData();
  }, []);

  // for setting cart items
  const [cartItems, setCartItems] = useState([]);

  
  // global variables
  var cakeData;
  var data;

  //for getting cakes gor getCake Api
  var getData = async () => {
    try {
      const response = await fetch("/cake/getCake");
      cakeData = await response.json();
      console.log(cakeData);
      console.log("hi");
    } catch (error) {
      console.log(error);
      cakeData = [];
    }
    setExistingCakes(cakeData.result.cakes);
    data = cakeData.result.cakes;
    console.log(data);
  };

  // for adding items in cart on click of add to cart button
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  //for removing cart Items
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="container5">
      <Header countCartItems={cartItems.length}></Header>
      <div className="container5">
        <Main existingCakes={existingCakes} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default CartFunctions;
