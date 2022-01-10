import React, { useState } from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSection from "./HeroSection";
import { CarouselStyle } from "./organisms.style";

function Carousel(props) {
  const [selectedItem, setSelectedItem] = useState(0);
  console.log(selectedItem);
  return (
    <CarouselStyle>
      <ReactCarousel
        selectedItem={selectedItem}
        showArrows
        infiniteLoop
        autoPlay
        interval={3000}
        showThumbs={false}
        showStatus={false}
        renderArrowNext={() => (
          <div
            className="arrow next"
            onClick={() => setSelectedItem((item) => (item + 1) % 3)}
          >
            <img src={`${process.env.PUBLIC_URL}/images/icons/next.svg`} />
          </div>
        )}
        renderArrowPrev={() => (
          <div
            className="arrow prev"
            onClick={() =>
              selectedItem > 0 && setSelectedItem((item) => item - 1)
            }
          >
            <img src={`${process.env.PUBLIC_URL}/images/icons/prev.svg`} />
          </div>
        )}
      >
        <div style={{ height: "70vh" }}>
          <HeroSection />
        </div>
        <div style={{ height: "70vh" }}>
          <HeroSection />
        </div>
        <div style={{ height: "70vh" }}>
          <HeroSection />
        </div>
      </ReactCarousel>
    </CarouselStyle>
  );
}

export default Carousel;
