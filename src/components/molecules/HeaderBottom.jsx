import React from "react";
import { Link } from "react-router-dom";
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
        <Link className="text-link" to="/login">
          <span>Login</span>
        </Link>
        <Link className="text-link" to="/register">
          <span>Sign Up</span>
        </Link>
      </div>
    </HeaderBottomStyle>
  );
}

export default HeaderBottom;
