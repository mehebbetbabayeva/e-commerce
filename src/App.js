import Header from "./components/Header";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Login from "./pages/Login";
import MobileMenu from "./pages/MobileMenu";
import Products from "./pages/Products";
import Carusel from "./pages/Carusel";
import Trend from "./pages/Trend";
import Countdownn from "./pages/Countdownn";
function App() {
  return (
    <>
    <Header/>
    <MobileMenu/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    <Products/>
    <Carusel/>
    <Trend />
    <Countdownn/>
    </>
  );
}

export default App;
