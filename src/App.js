import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './Components/Home'
import Header from './Components/Header'
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
function App() {

  return (
    <>
    
    <div className="   lg:w-screen w-full h-screen">
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productList/:section" element={<ProductList />}/>
      <Route path="/productDetails/:section/:id" element={<ProductDetails />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="*" element={<div>404 Error Page Not Found</div>}/>
    </Routes>
    </div>



    </>
  );
}

export default App;
