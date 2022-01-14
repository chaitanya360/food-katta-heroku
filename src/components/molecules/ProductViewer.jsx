import React, { useEffect, useState } from "react";
import { ProductViewerStyle } from "./molecules.style";

function ProductViewer({ images = ["item1", "item2", "item3"] }) {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [viewerClass, setViewerClass] = useState("viewer");

  let time_out_id_1;
  let time_out_id_2;
  let time_out_id_3;
  let animating = false;

  const changeImg = (img) => {
    if (selectedImg === img || animating) return;
    animating = true;
    clearTimeout(time_out_id_1);
    clearTimeout(time_out_id_2);
    clearTimeout(time_out_id_3);
    setViewerClass("viewer fade-out");
    time_out_id_1 = setTimeout(() => {
      setSelectedImg(img);
      time_out_id_2 = setTimeout(() => {
        setViewerClass("viewer fade-in");
      }, 20);
      time_out_id_3 = setTimeout(() => {
        setViewerClass("viewer");
        clearTimeout(time_out_id_1);
        clearTimeout(time_out_id_2);
        clearTimeout(time_out_id_3);
        animating = false;
      }, 200);
    }, 200);
  };

  return (
    <ProductViewerStyle>
      <div className={viewerClass}>
        <img src={`${process.env.PUBLIC_URL}/images/${selectedImg}.png`} />
      </div>
      <div className="img-selector">
        {images.map((img) => (
          <div
            className={img === selectedImg ? "thumb selected" : "thumb"}
            key={img}
            onClick={() => changeImg(img)}
          >
            <img src={`${process.env.PUBLIC_URL}/images/${img}.png`} />
          </div>
        ))}
      </div>
    </ProductViewerStyle>
  );
}

export default ProductViewer;
