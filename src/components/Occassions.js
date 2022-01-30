// import {React,useState} from "react";
// import Navbar from "./Navbar";
// import Menu from './menu.js'
// const Occassions = () => {

// const[cakes,setCakes]=useState(Menu);

//     // Add active class to the current button (highlight it)
// const filterItem=(categItem)=>{
//     const updatedItems=Menu.filter((curElem)=>{
//         return curElem.category===categItem
//     })

//     setCakes(updatedItems)
// }
//   return (
//     <div>
//       <div style={{ marginTop: "-30px", paddingTop: "15%" }}>{Navbar}</div>
//       <h1 style={{ position: "relative", backgroundColor: "#fecacc" }}>
//         Shop By Category
//       </h1>
//       <div className="occassion-container">
//         <div className="occassion-btn-grp">
//           <button onClick={()=>setCakes(Menu)} className="btn-occassion-keys">SHOW ALL</button>
//           <button onClick={()=>filterItem('love')} className="btn-occassion-keys" >LOVE</button>
//           <button onClick={()=>filterItem('newyear')} className="btn-occassion-keys" >NEW YEAR/X'MAS</button>
//           <button  onClick={()=>filterItem('specialdays')} className="btn-occassion-keys" >SPECIAL DAYS</button>
//           <button onClick={()=>filterItem('specialmsg')} className="btn-occassion-keys" >SPECIAL MESSAGES</button>
//         </div>


//         <main class="main">
//           <div class="container5">
//               {
//                   cakes.map((elem)=>{

//                     const {id,image,cname,price}=elem;
//                     return (
//                         <div class="card">
//                         <span>Sale</span>
//                             <div class="card-image">
//                                 <img src={image}/>
//                                 </div>
//                                 <h2 style={{ position: "relative" }}>{cname}</h2>
//                                 <h3>{price}</h3>
//                             <button className="product-btn-grp">Add To Cart</button>
//                             </div>
//                     )
//                   })
//               }
         
//               </div>
//               </main>
        
//       </div>
//     </div>
//   );
// };

// export default Occassions;


{/* <main class="main">
          <div class="container5">
            <div class="card love">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?nature"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={lovecake1} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Black Forest Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card love">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?food"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={lovecake2} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rosgulla Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card love">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?travel"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src= {lovecake3} alt="Image Galler"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Blueberry Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card love">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?building"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={lovecake4} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Cadbury Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card love">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?flower"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={lovecake6} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Butterfly Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card love">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?animal"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={lovecake5} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Pineapple Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card love">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?sport"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={lovecake7} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Chocolate Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card ny">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?human"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={christmascake1} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Chocolate Truffle Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card ny">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={christmascake2} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card ny">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={christmascake3} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card ny">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={newyearcake1} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card ny">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={newyearcake2} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card ny">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={newyearcake4} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card ny">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={newyearcake3} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card specialday">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={motherdaycake} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card specialday">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={rakhicake} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card specialday">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={fatherdaycake} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card specialday">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={bhaidoojcake} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card specialmsg">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={thankyoucake} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card specialmsg">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={sorrycake} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
            <div class="card specialmsg">
              <span>Sale</span>
              <div class="card-image">
                <a
                  href="https://source.unsplash.com/1280x720/?mountain"
                  data-fancybox="gallery"
                  data-caption="Caption Images 1"
                >
                  <img src={congratscake} alt="Image Gallery"/>
                </a>
              </div>
              <h2 style={{ position: "relative" }}>Rainbow Cake</h2>
              <button className="product-btn-grp">Add To Cart</button>
            </div>
          </div>
        </main> */}