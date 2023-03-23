import React from 'react'
import {AiFillCar} from "react-icons/ai"
import {FaMoneyBill} from "react-icons/fa"
import {MdSupport} from "react-icons/md"
import {FaHeadphonesAlt} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const ProductsImage = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios("https://fakestoreapi.com/products").then((res)=>{
          setData(res.data.slice(0,6))
         
        })
        .catch(error=>console.log(error))
      },[])

  return (
    <section id='products-img'>
        <div className="products-img-card">
            <div className="products-card">
               <div>
               <i><AiFillCar/></i>
                <div>
                <h3>Free Shipping</h3>
                <p>For all oder over $99</p>
                </div>
               </div>
            </div>
            <div className="products-card">
               <div>
               <i><FaMoneyBill/></i>
                <div>
                <h3>Money Back Guarantee</h3>
                <p>If good have Problems</p>
                </div>
               </div>
            </div>
            <div className="products-card">
               <div>
               <i><MdSupport/></i>
                <div>
                <h3>Online Support 24/7</h3>
                <p>Dedicated support</p>
                </div>
               </div>
            </div>
            <div className="products-card">
               <div>
               <i><FaHeadphonesAlt/></i>
                <div>
                <h3>Payment Secure</h3>
                <p>100% secure payment</p>
                </div>
               </div>
            </div>
        </div>
        <div className="products-img">
            {data.map(item=>(
                 <div className="products-card" key={item.id}>
               <img src={item.image} alt="image" />
                    <div className="img-hover">
                            <i><BsInstagram/></i>
                            <p>@ashion_shop</p>
                    </div>
            
            </div>
            ))}
           
        </div>
    </section>
  )
}

export default ProductsImage