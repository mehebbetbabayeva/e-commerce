import React from 'react'
import { MdClose} from "react-icons/md";
import { NavLink, Link } from 'react-router-dom';
import { VscSearch , VscHeart} from "react-icons/vsc";
import { SlBag} from "react-icons/sl";
import logo from "../assets/img/logo.png.webp";
import {BiMenu} from "react-icons/bi";
import { useState } from 'react';
import {GoTriangleRight} from "react-icons/go"

const MobileMenu = () => {
  //menu icinde menu click olduqda acilib baglansin
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleButtonClick = () => {   
       setIsMenuOpen(!isMenuOpen);  
      }
   //x btnuna click olduqda menu baglansin
    
 
    const onHandleMenuClickSlide =()=>{

    //  let overlaySlide= document.querySelector(".overlay");
    //  overlaySlide.classList.remove("overlay-active");
    //  overlaySlide.classList.add("overlay-deactive");
     }
   
    const cancelMenu=()=>{
      let overlaySlide= document.querySelector(".overlay");
      overlaySlide.classList.remove("overlay-active");
      overlaySlide.classList.add("overlay-deactive");
     }

    
    //pages menuya click olduqda
    const [pagesOpen, setIPagesOpen] = useState(false);
    const openPagesMenu =()=>{
      setIPagesOpen(!pagesOpen)
    }
    
 
      

  return (
    
   
    <div className="overlay overlay-active  overlay-deactive" onClick={onHandleMenuClickSlide}  >
       
        <div className="mobilemenu"  >
          <button className="cancel-btn" onClick={cancelMenu} >
          < MdClose/>
          </button>
       
         
          <ul className="social-nav">
          <li><Link to="/search"><VscSearch/></Link></li>
          <li><Link><VscHeart/><span>2</span></Link></li>
                <li><Link><SlBag/><span>2</span></Link></li>
          </ul>
          <div className="header-logo">
          <NavLink to="/"> <img src={logo} alt="header-logo" /></NavLink>
        </div>
           <div className="menu">
               <div className="menu-bar-btn" >menu <button onClick={handleButtonClick}><BiMenu/></button></div>
               {isMenuOpen && (
        
          <ul className='menu-open'>
                <li ><NavLink to="/" exact activeClassName="active">home</NavLink></li>
                <li><NavLink to="/women"  activeClassName="active">women's</NavLink></li>
                <li><NavLink to="/men"  activeClassName="active">men's</NavLink></li>
                <li><NavLink to="/shop"  activeClassName="active">shop</NavLink></li>
                <li><NavLink to="/pages" activeClassName="active" className="pages" onClick={openPagesMenu}><p>pages<GoTriangleRight/></p>
                {pagesOpen &&(
                  <ul className='pages-nav pages-open pages-close'>
                  <li><Link>Product details</Link></li>
                  <li><Link>Shop Cart</Link></li>
                  <li><Link>Checkout</Link></li>
                  <li><Link>Blog details</Link></li>
                </ul>
                )}
                
                </NavLink></li>
                <li><NavLink to="/blog" activeClassName="active">blog</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">contact</NavLink></li>
            </ul>
        
      )}
           
        
               
              
           </div>
           <div className="login-register">
           <Link to="/login">Login/Register</Link>
           </div>
        </div>
    </div>
  )

}

export default MobileMenu