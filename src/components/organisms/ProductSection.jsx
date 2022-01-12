import React from "react";
import ProductInfo from "../atoms/ProductInfo";
import ProductQuantitySelection from "../molecules/ProductQuantitySelection";
import ProductViewer from "../molecules/ProductViewer";
import { ProductSectionStyle } from "./organisms.style";

function ProductSection(props) {
  return (
    <ProductSectionStyle>
      <ProductViewer />
      <ProductInfo />
      <ProductQuantitySelection />
    </ProductSectionStyle>
  );
}

export default ProductSection;
