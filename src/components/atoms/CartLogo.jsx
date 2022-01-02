import React from "react";
import { CartLogoStye } from "./atoms.style";

function CartLogo(props) {
  return (
    <CartLogoStye>
      <img src={`${process.env.PUBLIC_URL}/images/cart.svg`} />
    </CartLogoStye>
  );
}

export default CartLogo;
