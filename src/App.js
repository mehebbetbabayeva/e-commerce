import Header from "./components/Header";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import MobileMenu from "./pages/MobileMenu";
function App() {
  return (
    <>
    <Header/>
    <MobileMenu/>
    <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/women" element={<Home/>}/>
    <Route path="/men" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/blog" element={<Home/>}/>
    <Route path="/contact" element={<Home/>}/>
    <Route path="/search" element={<Home/>}/>
    <Route path="/login" element={<Home/>}/>
    <Route path="/pages" element={<Home/>}/>
    </Routes> 
    
    </>
  );
}

export default App;
