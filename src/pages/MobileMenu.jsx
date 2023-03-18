import React from 'react'
import { MdClose} from "react-icons/md";
import { NavLink, Link } from 'react-router-dom';
import { VscSearch , VscHeart} from "react-icons/vsc";
import { SlBag} from "react-icons/sl";
import logo from "../assets/img/logo.png.webp";
import {BiMenu} from "react-icons/bi";
import { useState } from 'react';

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleButtonClick = () => {
        setIsMenuOpen(!isMenuOpen)
      }
 
    const [openMenu,setOpenMenu]= useState(true);
    const onHandleClick=()=>{
        setOpenMenu(!openMenu)
      }

    
   
    
 
      

  return (
    
   
    <div className='overlay'>

        {<div className="mobilemenu">
          <button className="cancel-btn">
          < MdClose/>
          </button>
        
         
          <ul className="social-nav">
          <li><Link to="/search"><VscSearch/></Link></li>
                <li><Link><VscHeart/></Link></li>
                <li><Link><SlBag/></Link></li>
          </ul>
          <div className="header-logo">
          <NavLink to="/"> <img src={logo} alt="header-logo" /></NavLink>
        </div>
           <div className="menu">
               <div className="menu-bar-btn">menu <button onClick={handleButtonClick}><BiMenu/></button></div>
               {isMenuOpen && (
        
          <ul className='menu-open'>
                <li ><NavLink to="/" exact activeClassName="active">home</NavLink></li>
                <li><NavLink to="/women"  activeClassName="active">women's</NavLink></li>
                <li><NavLink to="/men"  activeClassName="active">men's</NavLink></li>
                <li><NavLink to="/shop"  activeClassName="active">shop</NavLink></li>
                <li><NavLink to="/pages" activeClassName="active">pages</NavLink></li>
                <li><NavLink to="/blog" activeClassName="active">blog</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">contact</NavLink></li>
            </ul>
        
      )}
           
        
               
              
           </div>
           <div className="login-register">
           <Link to="/login">Login/Register</Link>
           </div>
        </div>}
    </div>
  )

}

export default MobileMenu