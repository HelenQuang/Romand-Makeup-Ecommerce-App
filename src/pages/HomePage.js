import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import LipHero from "../components/LipHero";
import EyeHero from "../components/EyeHero";
import LipProducts from "../components/LipProducts";
import EyeProducts from "../components/EyeProducts";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const HomePage = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const headerClass = sticky ? "header sticky" : "header";

  return (
    <>
      <NavBar headerClass={headerClass} />
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
