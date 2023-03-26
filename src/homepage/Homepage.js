import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Products from "../pages/Products";
import Footer from "../components/Footer";


export default function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}
