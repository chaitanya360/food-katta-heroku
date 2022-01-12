import React from "react";
import { ProductViewerStyle } from "./molecules.style";

function ProductViewer(props) {
  return (
    <ProductViewerStyle>
      <div className="viewer">
        <img src={`${process.env.PUBLIC_URL}/images/item1.png`} />
      </div>
      <div className="img-selector">
        <div className="thumb">
          <img src={`${process.env.PUBLIC_URL}/images/item1.png`} />
        </div>
        <div className="thumb">
          <img src={`${process.env.PUBLIC_URL}/images/item1.png`} />
        </div>
        <div className="thumb">
          <img src={`${process.env.PUBLIC_URL}/images/item1.png`} />
        </div>
      </div>
    </ProductViewerStyle>
  );
}

export default ProductViewer;
