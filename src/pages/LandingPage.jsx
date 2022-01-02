import React from "react";
import { LandingPageStyle } from "./pages.style";
import HeroSection from "../components/organisms/HeroSection";

function LandingPage(props) {
  return (
    <LandingPageStyle>
      <HeroSection />
    </LandingPageStyle>
  );
}

export default LandingPage;
