import React from "react";
import NavBar from "../components/NavBar";
import LipHero from "../components/LipHero";
import EyeHero from "../components/EyeHero";
import LipProducts from "../components/LipProducts";
import EyeProducts from "../components/EyeProducts";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <LipHero />
      <LipProducts />
      <EyeHero />
      <EyeProducts />
      <CTA />
      <Footer />
    </>
  );
};

export default HomePage;
