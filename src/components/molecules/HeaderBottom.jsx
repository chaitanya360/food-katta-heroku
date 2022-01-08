import React from "react";
import { Link } from "react-router-dom";
import { HeaderBottomStyle } from "./molecules.style";

function HeaderBottom(props) {
  return (
    <HeaderBottomStyle>
      <div className="category">
        <ul>
          <li>Sweets</li>
          <li>Snacks</li>
          <li>Staples 1</li>
          <li>Staples 2</li>
          <li>Staples 3</li>
          <li>Shop by Foor Brands</li>
        </ul>
      </div>
    </HeaderBottomStyle>
  );
}

export default HeaderBottom;
