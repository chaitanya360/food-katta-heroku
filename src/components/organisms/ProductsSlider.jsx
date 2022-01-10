import React from "react";
import { ProductsSliderStyle } from "./organisms.style";
import "slick-carousel//slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderProduct from "../atoms/SliderProduct";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <img src={`${process.env.PUBLIC_URL}/images/icons/prev.svg`} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <img src={`${process.env.PUBLIC_URL}/images/icons/next.svg`} />
  </div>
);

function ProductsSlider(props) {
  return (
    <ProductsSliderStyle>
      <div className="section-title">Top Categories</div>
      <Slider
        {...settings}
        autoplay
        autoplaySpeed={3000}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        dots={false}
      >
        <SliderProduct src={1} />
        <SliderProduct src={2} />
        <SliderProduct src={3} />
        <SliderProduct src={1} />
        <SliderProduct src={2} />
        <SliderProduct src={3} />
        <SliderProduct src={3} />
        <SliderProduct src={1} />
        <SliderProduct src={2} />
        <SliderProduct src={3} />
      </Slider>
    </ProductsSliderStyle>
  );
}

export default ProductsSlider;
