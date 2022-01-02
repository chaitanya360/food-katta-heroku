import React from "react";
import { HeaderLogoStyle } from "./atoms.style";

function HeaderLogo(props) {
  return (
    <HeaderLogoStyle>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} />
    </HeaderLogoStyle>
  );
}

export default HeaderLogo;
