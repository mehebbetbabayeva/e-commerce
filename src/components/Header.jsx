import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import logo from "../assets/img/logo.png.webp";
import { VscSearch , VscHeart} from "react-icons/vsc";
import { SlBag} from "react-icons/sl";
import {BiMenu} from "react-icons/bi";


const Header = () => {
    //menu icona click olduqda menu slide acilsin

  const onHandleMenuClick =()=>{
    let overlay = document.querySelector(".overlay-deactive");
    overlay.classList.remove("overlay-deactive");
    overlay.classList.add("overlay-active")
  }

  return (
    <header>
        <div className="header-logo">
          <NavLink to="/"> <img src={logo} alt="header-logo" /></NavLink>
        </div>
        <nav>
            <ul>
                <li ><NavLink to="/" exact activeClassName="active">home</NavLink></li>
                <li><NavLink to="/women"  activeClassName="active">women's</NavLink></li>
                <li><NavLink to="/men"  activeClassName="active">men's</NavLink></li>
                <li><NavLink to="/shop"  activeClassName="active">shop</NavLink></li>
                <li><NavLink to="/pages" activeClassName="active">pages</NavLink></li>
                <li><NavLink to="/blog" activeClassName="active">blog</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">contact</NavLink></li>
            </ul>
        </nav>
        <div className="social-nav">
            <ul>
                <li className='login-register'><Link to="/login">Login/Register</Link></li>
                <li><Link to="/search"><VscSearch/></Link></li>
                <li><Link><VscHeart/></Link></li>
                <li><Link><SlBag/></Link></li>
            </ul>
        </div>
        <button className='header-btn' onClick={onHandleMenuClick}><BiMenu/></button>   
    </header>
  )
}


export default Header