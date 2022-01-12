import React, { useState } from "react";
import { ProductQuantitySelectionStyle } from "./molecules.style";

function ProductQuantitySelection(props) {
  const [selectedQt, setSelectedQt] = useState("1");
  const [selectedUnit, setSelectedUnit] = useState("kg");
  return (
    <ProductQuantitySelectionStyle>
      <div className="title">
        Weight:{" "}
        {selectedUnit == "g" ? (parseInt(selectedQt) * 500) / 1000 : selectedQt}
        {" " + "kg"}
      </div>
      <div className="unit-selectors">
        <div
          className={selectedUnit == "g" ? "unit selected" : "unit"}
          onClick={() => setSelectedUnit("g")}
        >
          500 g
        </div>
        <div
          className={selectedUnit == "kg" ? "unit selected" : "unit"}
          onClick={() => setSelectedUnit("kg")}
        >
          1 Kg
        </div>
      </div>
      <div className="quantity-selector">
        <span>Quantity</span>
        <select name="dropdown" onChange={(e) => setSelectedQt(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="buttons">
        <div className="cart">Add to Cart</div>
        <div className="buy">But it Now</div>
      </div>
    </ProductQuantitySelectionStyle>
  );
}

export default ProductQuantitySelection;
