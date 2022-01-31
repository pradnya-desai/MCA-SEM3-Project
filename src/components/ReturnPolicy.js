import React from "react";
import Navbarr from "./Navbarr.js";
const ReturnPolicy = () => {
  return (
    <div>
      <div style={{marginTop:"-40px"}}>{Navbarr}</div>
      <div className="return-policy-container">
        <div style={{width:"100%"}} className="return-policy-1">
          <h1 style={{backgroundColor:"#fecacc"}}>Return Policy</h1>
        </div>
        <div className="return-policy-2">
          <h2>Cakes</h2>
          <p>
            If cake delivered is not up to the mark or if their is any damage in
            the cake then we request you to return the cake immediately at the
            time of delivery. We always request to see the cake at the time of
            delivery, so if anything damaged delivered to you, then please
            return it to the same courier boy. Once delivery is done, we will
            not be able to take it back for the same reasons. We are also
            dependent on third party for cake deliveries, so we request you to
            cooperate with us and return the product at the time of delivery.
          </p>
        </div>
        <div className="return-policy-3">
        <h2>Special Note</h2>
          <p>
            On special occasions please cooperate with us of any mistake of
            ours. We also request to every customer of ours that please don't
            expect same arrangement as shown on website. Due to the bad
            transportation environment, some time product shape may change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
