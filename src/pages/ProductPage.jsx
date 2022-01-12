import React from "react";
import ProductSection from "../components/organisms/ProductSection";
import { ProductPageStyle } from "./pages.style";

function ProductPage(props) {
  return (
    <ProductPageStyle>
      <ProductSection />
    </ProductPageStyle>
  );
}

export default ProductPage;
