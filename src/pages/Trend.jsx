import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Trend = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        axios("https://fakestoreapi.com/products").then((res)=>{
            setProduct(res.data.slice(0,4));
            
        })
        .catch(error=>console.log(error))
    },[])
  return (
    <section id='trend'>
        <div className="container">
        <div className="trend-content">
        <div className="trend-item">
            <div className="trend-item-title">
            <h1>hot trends</h1>
            <div className="line"></div>
            </div>
            {product.map(item=>
                (<div className="trend-item-card" key={item.id}>
                <div className="card-img">
                <img src={item.image} alt="image" />
            </div>
            <div className="card-title">
                <h1>{item.category.slice(0,10)}</h1>
                <p>Rating:{item.rating.rate}</p>
                <span>${item.price}</span>
            </div> 
            </div>)
                )}
           
                
                   
           
        </div>
        <div className="trend-item">
            <div className="trend-item-title">
            <h1>best seller</h1>
            <div className="line"></div>
            </div>
            {product.map(item=>
                (<div className="trend-item-card" key={item.id}>
                <div className="card-img">
                <img src={item.image} alt="image" />
            </div>
            <div className="card-title">
                <h1>{item.category.slice(0,10)}</h1>
                <p>Rating:{item.rating.rate}</p>
                <span>${item.price}</span>
            </div> 
            </div>)
                )}
           
                
                   
           
        </div>
        <div className="trend-item">
            <div className="trend-item-title">
            <h1>feature</h1>
            <div className="line"></div>
            </div>
            {product.map(item=>
                (<div className="trend-item-card" key={item.id}>
                <div className="card-img">
                <img src={item.image} alt="image" />
            </div>
            <div className="card-title">
                <h1>{item.category.slice(0,10)}</h1>
                <p>Rating:{item.rating.rate}</p>
                <span>${item.price}</span>
            </div> 
            </div>)
                )}
           
                
                   
           
        </div>
        </div>
        </div>
    </section>
  )
}

export default Trend