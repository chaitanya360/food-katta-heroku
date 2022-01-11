import React from "react";
import ProductCard from "../molecules/ProductCard";
import { BrowseProductsStyle } from "./organisms.style";

function BrowsProducts(props) {
  return (
    <BrowseProductsStyle>
      <div className="section-title">Special for you</div>
      <div className="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </BrowseProductsStyle>
  );
}

export default BrowsProducts;
