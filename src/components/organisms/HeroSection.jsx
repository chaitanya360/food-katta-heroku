import React from "react";
import { HeroSectionStyle } from "./organisms.style";

function HeroSection(props) {
  return (
    <HeroSectionStyle>
      <img src={`${process.env.PUBLIC_URL}/images/hero-section.png`} />
      <div className="right-text">
        <span className="grd-text title">SHOPPING</span>
        <span className="grd-text sub-title">ONLINE</span>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia sed
          quasi eum adipisci, distinctio magni iure iusto. Asperiores, debitis
          fuga.
        </div>
        <button>BUY</button>
      </div>
    </HeroSectionStyle>
  );
}

export default HeroSection;
