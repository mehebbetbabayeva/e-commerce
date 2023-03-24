import React from 'react'
import category1 from "../assets/img/category1.jpg.webp";
import category2 from "../assets/img/category-2.jpg.webp";
import category3 from "../assets/img/category-3.jpg.webp";
import category4 from "../assets/img/category-4.jpg.webp";
import category5 from "../assets/img/category-5.jpg.webp";
import Products from "../pages/Products";
import Carusel from "../pages/Carusel";
import Trend from "../pages/Trend";
import Countdownn from "../pages/Countdownn";
import ProductsImage from "../pages/ProductsImage";
import Footer from "../pages/Footer";
const Home = () => {
  return (<>
    <section id='home'>
        <div className="home-left" style={{ backgroundImage:`url(${category1})` }}>
         
          <h1>Women’s fashion</h1>
          <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
          <a href="">SHOP NOW</a>
          
        </div>
        <div className="home-right">
         <div className="home-right-item" style={{ backgroundImage:`url(${category2})` }} >
         <h1>Men’s fashion</h1>
          <p>358 items</p>
          <a href="">SHOP NOW</a>
         </div>
         <div className="home-right-item" style={{ backgroundImage:`url(${category3})` }}>
         <h1>Kid’s fashion</h1>
          <p>273 items</p>
          <a href="">SHOP NOW</a>
         </div>
         <div className="home-right-item" style={{ backgroundImage:`url(${category4})` }}>
         <h1>Cosmetics</h1>
          <p>159 items</p>
          <a href="">SHOP NOW</a>
         </div>
         <div className="home-right-item" style={{ backgroundImage:`url(${category5})` }}>
         <h1>Accessories</h1>
          <p>792 items</p>
          <a href="">SHOP NOW</a>
         </div>
        </div>
    </section>
       <Products/> 
     <Carusel/> 
    <Trend />
    <Countdownn/>
    <ProductsImage/>
    <Footer/>
    </>

  )
}

export default Home