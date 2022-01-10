import React from "react";
import { ProductCardStyle } from "./molecules.style";

function ProductCard(props) {
  return (
    <ProductCardStyle>
      <div className="img-wrapper">
        <img src={`${process.env.PUBLIC_URL}/images/item1.png`} />
      </div>
      <div className="body">
        <div className="category">Sweets</div>
        <div className="title">Kandi Pedha</div>
        <div className="rate">₹ 100 </div>
        <div className="buttons">
          <div className="btn">
            <img src={`${process.env.PUBLIC_URL}/images/icons/heart.svg`} />
          </div>
          <div className="btn">
            <img src={`${process.env.PUBLIC_URL}/images/icons/cart-add.svg`} />
          </div>
        </div>
      </div>
    </ProductCardStyle>
  );
}

export default ProductCard;
