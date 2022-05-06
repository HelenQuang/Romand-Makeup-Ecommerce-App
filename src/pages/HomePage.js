import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import LipProducts from "../components/LipProducts";
import EyeProducts from "../components/EyeProducts";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LipProducts />
      <EyeProducts />
      <CTA />
      <Footer />
    </>
  );
};

export default HomePage;
