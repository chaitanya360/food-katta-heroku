import React from "react";
import { LandingPageStyle } from "./pages.style";
import HeroSection from "../components/organisms/HeroSection";
import Carousel from "../components/organisms/Carousel";
import ProductsSlider from "../components/organisms/ProductsSlider";

function LandingPage(props) {
  return (
    <LandingPageStyle>
      <Carousel />
      <ProductsSlider />
    </LandingPageStyle>
  );
}

export default LandingPage;
