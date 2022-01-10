import React from "react";
import HeaderBottom from "../molecules/HeaderBottom";
import HeaderTop from "../molecules/HeaderTop";
import { HeaderStyle } from "./organisms.style";

function Header(props) {
  return (
    <HeaderStyle>
      <HeaderTop />
      {/* <HeaderBottom /> */}
    </HeaderStyle>
  );
}

export default Header;
