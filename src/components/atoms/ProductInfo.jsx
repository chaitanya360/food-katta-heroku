import React from "react";
import { ProductInfoStyle } from "./atoms.style";
import Star from "./Star";

function ProductInfo(props) {
  return (
    <ProductInfoStyle>
      <div className="name">Satari Kandi Pedha</div>
      <div className="by">
        by <span>Modi’s Narayan Pedhawale, Satara</span>
      </div>
      <div className="rating">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <span className="reviews">8 reviews</span>
      </div>
      <div className="price">M.R.P.: ₹395.00</div>
      <div className="desc-container">
        <div>Description</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
          arcu eget est pharetra congue sit amet quis nibh. Donec id ligula
          purus. Fusce sit amet consectetur metus. Integer sed ipsum odio.
          Aenean sit amet rhoncus mi. Phasellus ullamcorper eros lectus, et
          viverra lacus viverra sit amet. Donec mollis egestas risus, ac congue
          urna efficitur eget. Fusce in interdum ante. Mauris sodales neque
          vitae sem feugiat, nec mollis justo sodales. Maecenas viverra, metus
          eu dapibus eleifend, neque tortor pharetra lorem, a finibus tellus
          justo ac erat. Ut aliquam mattis orci vitae eleifend.
        </p>
      </div>
    </ProductInfoStyle>
  );
}

export default ProductInfo;
