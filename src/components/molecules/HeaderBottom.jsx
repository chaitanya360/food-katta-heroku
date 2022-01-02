import React from "react";
import { HeaderBottomStyle } from "./molecules.style";

function HeaderBottom(props) {
  return (
    <HeaderBottomStyle>
      <div className="category">
        <span>Sweets</span>
        <span>Snacks</span>
        <span>Staples</span>
        <span>Shop by Foor Brands</span>
      </div>
      <div className="logins">
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </HeaderBottomStyle>
  );
}

export default HeaderBottom;
