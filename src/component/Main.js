import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import Footer from "./Footer";
import ECommerce from "./ECommerce";

export const ecommerceContext = createContext({});

function Main() {
  const [cart, setCart] = useState(
    localStorage.getItem("cartItems") === null
      ? []
      : JSON.parse(localStorage.getItem("cartItems"))
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <ecommerceContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ecommerceContext.Provider>
    </>
  );
}

export default Main;
