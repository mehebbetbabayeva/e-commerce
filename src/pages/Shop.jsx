import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome} from "react-icons/ai";
import {IoIosArrowForward} from "react-icons/io";
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const Shop = () => {
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

const [isOpen1, setIsOpen1] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);
const [isOpen4, setIsOpen4] = useState(false);
const [isOpen5, setIsOpen5] = useState(false);
const toggleMenu1 = () => {
  setIsOpen1(!isOpen1);
};

const toggleMenu2 = () => {
  setIsOpen2(!isOpen2);
};

const toggleMenu3 = () => {
  setIsOpen3(!isOpen3);
};

const toggleMenu4 = () => {
  setIsOpen4(!isOpen4);
};
const toggleMenu5 = () => {
  setIsOpen5(!isOpen5);
};
 

const [value, setValue] = useState(33);

const handleChange = (event) => {
  setValue(event.target.value);
};

const sizeList = [
  { value: "xxs", label: "XXS" },
  { value: "xs", label: "XS" },
  { value: "xs-s", label: "XS_S" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "m-l", label: "M-L" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" }
];
const colorList = [
  { value: "blacks", label: "Blacks" },
  { value: "whites", label: "Whites" },
  { value: "reds", label: "Reds" },
  { value: "greys", label: "Greys" },
  { value: "blues", label: "Blues" },
  { value: "beigeTones", label: "Beige Tones" },
  { value: "greens", label: "Greens" },
  { value: "yellows", label: "Yellows" }
];
  const style ={
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    color:"gray",
    paddingLeft:"40px",
  }

  return (
    <div className='shop-content'>
      <div className="container">
       <div className="shop">
       <div className="shop-link">
        <Link to="/">
        <i><AiFillHome/></i>
        Home
         <i><IoIosArrowForward/></i>
        </Link>
        <p>Shop</p>
      </div>
      <div className="shop-product">
      <div className="shop-product-item">
        <div className="shop-category">
          <h1>categories</h1>
        <List
      sx={{ width: '100%', maxWidth: 300 }} 
    >
    
      <ListItemButton onClick={toggleMenu1}>
        <ListItemText primary="Women" style={{borderBottom:"1px solid gray"}}/>
        {isOpen1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen1}>
        <List component="div">
          <ListItemButton style={style} >
            <ListItemText primary="Coats" />
            <ListItemText primary="Jackets" />
            <ListItemText primary="Dresses" />
            <ListItemText primary="Shirts" />
            <ListItemText primary="T-shirts" />
            <ListItemText primary="Jeans" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 300 }} 
    >
    
      <ListItemButton onClick={toggleMenu2}>
        <ListItemText primary="Men"  style={{borderBottom:"1px solid gray"}}/>
        {isOpen2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen2} >
        <List component="div">
          <ListItemButton style={style} >
            <ListItemText primary="Coats" />
            <ListItemText primary="Jackets" />
            <ListItemText primary="Dresses" />
            <ListItemText primary="Shirts" />
            <ListItemText primary="T-shirts" />
            <ListItemText primary="Jeans" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 300 }} 
    >
    
      <ListItemButton onClick={toggleMenu3}>
        <ListItemText primary="Kids"  style={{borderBottom:"1px solid gray"}}/>
        {isOpen3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen3} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton style={style} >
            <ListItemText primary="Coats" />
            <ListItemText primary="Jackets" />
            <ListItemText primary="Dresses" />
            <ListItemText primary="Shirts" />
            <ListItemText primary="T-shirts" />
            <ListItemText primary="Jeans" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 300 }} 
    >
    
      <ListItemButton onClick={toggleMenu4}>
        <ListItemText primary="Accessories"  style={{borderBottom:"1px solid gray"}}/>
        {isOpen4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen4} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton style={style} >
            <ListItemText primary="Coats" />
            <ListItemText primary="Jackets" />
            <ListItemText primary="Dresses" />
            <ListItemText primary="Shirts" />
            <ListItemText primary="T-shirts" />
            <ListItemText primary="Jeans" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 300 }} 
    >
    
      <ListItemButton onClick={toggleMenu5}>
        <ListItemText primary="Cosmetic"  style={{borderBottom:"1px solid gray"}} />
        {isOpen5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen5} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton style={style} >
            <ListItemText primary="Coats" />
            <ListItemText primary="Jackets" />
            <ListItemText primary="Dresses" />
            <ListItemText primary="Shirts" />
            <ListItemText primary="T-shirts" />
            <ListItemText primary="Jeans" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
        </div>
        <div className="shop-range">
        <h1>SHOP BY PRICE</h1>
        <div>
      <input
        type="range"
        min="33"
        max="99"
        value={value}
        onChange={handleChange}
      />
      <p>Price: $33 -${value}</p>
    </div>
      <button>FILTER</button>
        </div>
        <div className="shop-size">
        <h1>SHOP BY SIZE</h1>
      {sizeList.map((x, i) => <label key={i}>
        <input
          type="checkbox"
          name="lang"
          value={x.value}
        /> {x.label}
      </label>)}
        </div>
        <div className="shop-color">
        <h1>SHOP BY COLOR</h1>
      {colorList.map((x, i) => <label key={i}>
        <input
          type="checkbox"
          name="lang"
          value={x.value}
        /> {x.label}
      </label>)}
        </div>
      </div>
    <div className="shop-products">
      
    </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Shop


// //{/* <div className="categories">
// <h1>categories</h1>
// <div className="categories-title">
//  <h3>women</h3>

// </div>
// </div> */}