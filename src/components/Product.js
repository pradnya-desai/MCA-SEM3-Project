import {React} from 'react'

import Navbarr from './Navbarr.js'

 function Product(props){
//   const[cakes1,setCakes1]=useState(products);
//   const filterItem=(categItem)=>{
    // const updatedItems=Menu.filter((curElem)=>{
    //     return curElem.category===categItem
    // })
const {product,onAdd}=props;

    return (
        <div>

            <div>{Navbarr}</div>
{/* <h1 style={{position:"relative",backgroundColor:"#fecacc"}}>SHOP BY CATEGORY</h1> */}
          
<div className="occassion-container">
        
        
<main className="main">
          <div className="container5">
              {/* {
                  cakes1.map((elem)=>{

                    const {id,image,cname,price}=elem;
                    return ( */}

                        <div className="card">
                        <span>Sale</span>
                            <div className="card-image">
                                <img src={product.image}/>
                                </div>
                                <h2 style={{ position: "relative" }}>{product.cname}</h2>
                                <h3>{product.price}</h3>
                            <button onClick={() => onAdd(product)} className="product-btn-grp">Add To Cart</button>
                            </div>
            {/* //         )
            //       })
            //   }
          */}
              </div>
              </main>
        </div>
        </div>
       
      
    )
// }
}
export default Product;

//  <main className="main">
//   <div class="container5">
//     <div class="card">       
//            <span>Sale</span>
//       <div class="card-image">
//         <a href="https://source.unsplash.com/1280x720/?nature" data-fancybox="gallery" data-caption="Caption Images 1">
//           <img src={categoryImage} alt="Image Gallery"/>
//         </a>
//       </div>
//       <h2 style={{position:"relative"}}>Black Forest Cake</h2>
// <button className='product-btn-grp'>Add To Cart</button>
//     </div>
//     <div class="card">
//     <span>Sale</span>
//       <div class="card-image">
//         <a href="https://source.unsplash.com/1280x720/?food" data-fancybox="gallery" data-caption="Caption Images 1">
//           <img src={rosgullacake} alt="Image Gallery"/>
//         </a>
//       </div>
//       <h2 style={{position:"relative"}}>Rosgulla Cake</h2>
//       <button className='product-btn-grp'>Add To Cart</button>
//     </div>
//     <div class="card">
//     <span>Sale</span>
//       <div class="card-image">
//         <a href="https://source.unsplash.com/1280x720/?travel" data-fancybox="gallery" data-caption="Caption Images 1">
//           <img src= {butterflycake} alt="Image Galler"/>
//         </a>
//       </div>
//       <h2 style={{position:"relative"}}>Blueberry Cake</h2>
//       <button className='product-btn-grp'>Add To Cart</button>
//     </div>
//     <div class="card">
//     <span>Sale</span>
//       <div class="card-image">
//         <a href="https://source.unsplash.com/1280x720/?building" data-fancybox="gallery" data-caption="Caption Images 1">
//           <img src={cadburycake} alt="Image Gallery"/>
//         </a>
//       </div>
//       <h2 style={{position:"relative"}}>Cadbury Cake</h2>
//       <button className='product-btn-grp'>Add To Cart</button>
//     </div>
//     <div class="card">
//     <span>Sale</span>
//       <div class="card-image">
//         <a href="https://source.unsplash.com/1280x720/?flower" data-fancybox="gallery" data-caption="Caption Images 1">
//           <img src={blueberrycake} alt="Image Gallery"/>
//         </a>
//       </div>
//       <h2 style={{position:"relative"}}>Butterfly Cake</h2>
//       <button className='product-btn-grp'>Add To Cart</button>
//     </div>
//     <div class="card">
//     <span>Sale</span>
//       <div class="card-image">
//         <a href="https://source.unsplash.com/1280x720/?animal" data-fancybox="gallery" data-caption="Caption Images 1">
//           <img src={rosgullacream} alt="Image Gallery"/>
//         </a>
//       </div>
//       <h2 style={{position:"relative"}}>Pineapple Cake</h2>
//       <button className='product-btn-grp'>Add To Cart</button>
//     </div>
//     <div class="card">
//     <span>Sale</span>
//       <div class="card-image">
//         <a href="https://source.unsplash.com/1280x720/?sport" data-fancybox="gallery" data-caption="Caption Images 1">
//           <img src={chocolate} alt="Image Gallery"/>
//         </a>
//       </div>
//       <h2 style={{position:"relative"}}>Chocolate Cake</h2>
//       <button className='product-btn-grp'>Add To Cart</button>
//     </div>
//     <div class="card">
//     <span>Sale</span>
//       <div class="card-image">
//         <a href="https://source.unsplash.com/1280x720/?human" data-fancybox="gallery" data-caption="Caption Images 1">
//           <img src="https://www.citycakes.com.np/wp-content/uploads/heart-shaped-black-forest-vanilla-cake.jpg" alt="Image Gallery"/>
//         </a>
//       </div>
//       <h2 style={{position:"relative"}}>Chocolate Truffle Cake</h2>
//       <button className='product-btn-grp'>Add To Cart</button>
//     </div>
//     <div class="card">
//     <span>Sale</span>
//       <div class="card-image">
//         <a href="https://source.unsplash.com/1280x720/?mountain" data-fancybox="gallery" data-caption="Caption Images 1">
//           <img src="https://static.wixstatic.com/media/25ceec_25c00b91bdd84d42988e82c47b975617~mv2_d_3024_3024_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01/rainbow%20cake.webp" alt="Image Gallery"/>
//         </a>
//       </div>
//       <h2 style={{position:"relative"}}>Rainbow Cake</h2>
//       <button className='product-btn-grp'>Add To Cart</button>
//     </div>

//   </div>
// </main>
