import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { HeroSectionStyle } from "./organisms.style";
function HeroSection(props) {
  const [selectedItem, setSelectedItem] = useState(0);
  console.log(selectedItem);
  return (
    <HeroSectionStyle>
      <img src={`${process.env.PUBLIC_URL}/images/hero-section.png`} />
      <div className="right-text">
        <div>
          <div>
            <span className="grd-text title">SHOPPING</span>
            <span className="grd-text sub-title">ONLINE</span>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            sed quasi eum adipisci, distinctio magni iure iusto. Asperiores,
            debitis fuga.
          </div>
          <button>BUY</button>
        </div>
      </div>
    </HeroSectionStyle>
  );
}

export default HeroSection;
