import React  from 'react'
import banner from "../assets/img/banner.jpg.webp"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
const Carusel = () => {
  return (
    <section id='carusel' style={{backgroundImage:`url(${banner})`}}>
<Carousel>
                <div>
                    <h1>The chloe collection</h1>
                    <p >the projects jacket</p>
                    <a href="">SHOP NOW</a>
                </div>
                <div>
                    <h1>The chloe collection</h1>
                    <p >the projects jacket</p>
                    <a href="">SHOP NOW</a>
                </div>
                <div>
                    <h1>The chloe collection</h1>
                    <p >the projects jacket</p>
                    <a href="">SHOP NOW</a>
                </div>
            </Carousel>
    </section>
  )
}

export default Carusel