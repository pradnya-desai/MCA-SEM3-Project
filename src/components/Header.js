import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar.js";
export default function Header(props) {
  const { countCartItems } = props;
  return (
    //create a div

    <header>
      <div style={{ marginTop: "220px" }}>
        <h1> Shopping Cart</h1>
      </div>
      <div
        style={{
          position: "fixed",
          width: "8.7%",
          zIndex: "1040",
        }}
      >
        <h2 style={{ float: "left"}}>
         
          <FontAwesomeIcon  icon={faShoppingCart} /></h2>
          <a href="#cart-section" >
            <button className="badge">
              {countCartItems ? (
                <span style={{ backgroundColor: "red", color: "white" }}>
                  {countCartItems}
                </span>
              ) : (
                ""
              )}
            </button>
          </a>
        
      </div>
      <br /> <br />
    </header>
  );
}
