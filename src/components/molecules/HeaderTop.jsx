import React from "react";
import CartLogo from "../atoms/CartLogo";
import HeaderLogo from "../atoms/HeaderLogo";
import { HeaderTopStyle } from "./molecules.style";
import SearchBar from "./SearchBar";

function HeaderTop(props) {
  return (
    <HeaderTopStyle>
      <HeaderLogo />
      <SearchBar />
      <CartLogo />
    </HeaderTopStyle>
  );
}

export default HeaderTop;
