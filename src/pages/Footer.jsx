import React from 'react'
import logo from "../assets/img/logo.png.webp";
import {Link} from "react-router-dom";
import payment1 from "../assets/img/payment1.png.webp";
import payment2 from "../assets/img/payment2.png.webp";
import payment3 from "../assets/img/payment3.png.webp";
import payment4 from "../assets/img/payment4.png.webp";
import payment5 from "../assets/img/payment5.png.webp";
import {FaFacebookF , FaTwitter , FaYoutube , FaInstagram , FaPinterest} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <div className="container">
         <div className="footer-content">
            <div className="footer-item-left">
                <div className="footer-logo">
                    <img src={logo} alt="logo" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                <ul>
                    <li>
                        <Link>
                        <img src={payment1} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                        <img src={payment2} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                        <img src={payment3} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                        <img src={payment4} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                        <img src={payment5} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-item-links">
                <h1>QUICK LINKS</h1>
                <ul>
                    <li><Link>About</Link></li>
                    <li><Link>Blogs</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>FAQ</Link></li>

                </ul>
            </div>
            <div className="footer-item-links">
                <h1>ACCOUNT</h1>
                <ul>
                    <li><Link>My Account</Link></li>
                    <li><Link>Orders Tracking</Link></li>
                    <li><Link>Checkout</Link></li>
                    <li><Link>Wishlist</Link></li>

                </ul>
            </div>
            <div className="footer-email">
                <h1>NEWSLETTER</h1>
                <div className="email">
                    <input type="email" placeholder='Email'/>
                    <div className="subscribe">
                        SUBSCRIBE
                    </div>
                </div>
                <div className="icons">
                    <i><FaFacebookF/></i>
                    <i><FaTwitter/></i>
                    <i><FaYoutube/></i>
                    <i><FaInstagram/></i>
                    <i><FaPinterest/></i>
                </div>
            </div>
         </div>

        </div>
    </footer>
  )
}

export default Footer