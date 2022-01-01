import React from "react";
import HeroSection from "../organisms/HeroSection";
import { LandingPageStyle } from "./pages.style";

function LandingPage(props) {
  return (
    <LandingPageStyle>
      <HeroSection />
    </LandingPageStyle>
  );
}

export default LandingPage;
