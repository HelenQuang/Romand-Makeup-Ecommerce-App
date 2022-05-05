import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import LipProducts from "../components/LipProducts";
import EyeProducts from "../components/EyeProducts";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LipProducts />
      <EyeProducts />
    </>
  );
};

export default HomePage;
