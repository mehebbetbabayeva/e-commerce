import React, { useEffect ,useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {BsArrowsAngleContract} from "react-icons/bs"
import{ VscHeart} from "react-icons/vsc"
import { SlBag} from "react-icons/sl";

const Products = () => {
  const[data,setData]= useState([])
  useEffect(()=>{
    axios("https://fakestoreapi.com/products").then((res)=>{
      setData(res.data)
     
    })
    .catch(error=>console.log(error))
  },[])
  return (
    <section id='products'>
       <div className="container">
        <div className="products-content">
             <div className="products-menu">
            <div className="products-logo">
                <h1>NEW PRODUCT</h1>
                <div className="line"></div>
            </div>
            <nav>
                <ul>
                    <li><NavLink  to="/" exact activeClassName="active">All</NavLink></li>
                    <li><NavLink to="/womens" activeClassName="active">Women’s</NavLink></li>
                    <li><NavLink to="/mens" activeClassName="active">Men’s</NavLink></li>
                    <li><NavLink to="/kid" activeClassName="active">Kid’s</NavLink></li>
                    <li><NavLink to="/accessories" activeClassName="active">Accessories</NavLink></li>
                    <li><NavLink to="/cosmetics" activeClassName="active">Cosmetics</NavLink></li>
                </ul>
            </nav>
        
        
             </div>
             <div className="products-card">
              {data.map(item=>(
                <div className="card-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="card-hover">
                  <div><BsArrowsAngleContract/></div>
                  <div><VscHeart/></div>
                  <div><SlBag/></div>
                </div>
              
                <div className="card-title">
                   <p>{item.title.slice(0,20)}</p>
                   <div className="card-star">
                    Rating:{item.rating.rate}
                   </div>
                   <span>${item.price}</span>
                </div>
             </div>
              )

              )}
             
             </div>

        </div>
      
       </div>
    </section>
  )
}

export default Products