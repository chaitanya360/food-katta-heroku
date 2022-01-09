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

function ProductsSlider(props) {
  return (
    <ProductsSliderStyle>
      <Slider {...settings} arrows={false} autoplay autoplaySpeed={3000}>
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
