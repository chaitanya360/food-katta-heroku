import React from "react";
import { LandingPageStyle } from "./pages.style";
import HeroSection from "../components/organisms/HeroSection";
import Carousel from "../components/organisms/Carousel";
import ProductsSlider from "../components/organisms/ProductsSlider";
import BrowsProducts from "../components/organisms/BrowsProducts";

function LandingPage(props) {
  return (
    <LandingPageStyle>
      <Carousel />
      <ProductsSlider />
      <BrowsProducts />
    </LandingPageStyle>
  );
}

export default LandingPage;
