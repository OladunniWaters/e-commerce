import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Products from "../pages/Products";
import CategoryProduct from "../pages/CategoryProduct";



export default function Homepage() {
  return (
    <div className="App">
      <Hero />
      <Banner />
      <Products />
      <CategoryProduct />
      <Banner /> 
    </div>
  );
}
