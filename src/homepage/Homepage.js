import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
//import Products from "../pages/Products";
import Footer from "../components/Footer";


export default function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <Footer />
    </div>
  );
}
