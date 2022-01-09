import React from "react";
import { Link } from "react-router-dom";
import { HeaderLogoStyle } from "./atoms.style";

function HeaderLogo(props) {
  return (
    <HeaderLogoStyle>
      {/* <img src={`${process.env.PUBLIC_URL}/images/logo.png`} /> */}
      <Link to="/" className="no-dec">
        FoodKatta
      </Link>
    </HeaderLogoStyle>
  );
}

export default HeaderLogo;
