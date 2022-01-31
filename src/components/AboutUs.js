import React from "react";
import Footer from "./Footer.js";
import Navbarr from "./Navbarr.js";

const AboutUs = () => {
  return (
    <div>
      <div style={{ marginTop: "-40px" }}>{Navbarr}</div>
<div className="about-text">
  <div className="about-item-1">
  <h1 style={{backgroundColor:"#fecacc"}}>Baking Your Ideas To Life</h1>
      <h2>
        We here At Devilishy Desserts offer you with a wide range of bakery and
        confectinary products along with mouth watering desserts. Being a home
        baker my goal is to provide lavishing and tasty cakes to all my
        customers with utmost affection and love. Different favoured &
        customized cakes are also delivered as per the customer's need and want.
        All the products are being baked by following all the Covid-19
        protocols. Tremendous hygiene and care is taken while preparing the
        dishes. Different ingredients and vessels are used for different
        orders.All products are made considering that they can be eaten by all
        age groups.Chocolate lovers must try all the yummy products.We are here
        at your service & just a call away. Currently our orders are limited to
        pune region only.
      </h2>
      </div>

<div className="about-item-2">
      <h3>YEAR ROUND OCCASIONS</h3><br/>
 <p>Birthday's</p>
 <p>Love/Anniversary</p>
 <p>Thank You</p>
 <p>Congratulations</p>
 <p>Best Wishes/Get Well Soon</p>
        </div>


        <div className="about-item-3">
      <h3>AVAILABLE ON SPECIAL DAYS </h3><br/>
 <p>Mother's Day</p>
 <p>Father's Day</p>
 <p>Christmas</p>
 <p>New Year</p>
 <p>Diwali/Rakhi</p>
        </div>
        </div>



    </div>
  );
};

export default AboutUs;
