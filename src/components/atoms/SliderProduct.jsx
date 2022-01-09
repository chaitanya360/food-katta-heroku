import React from "react";
import { SliderProductStyle } from "./atoms.style";

function SliderProduct({ src }) {
  return (
    <SliderProductStyle>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/item${src}.png`} />
      </div>
      <span>Product {src}</span>
    </SliderProductStyle>
  );
}

export default SliderProduct;
