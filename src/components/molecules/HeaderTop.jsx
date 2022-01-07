import React from "react";
import { Link } from "react-router-dom";
import CartLogo from "../atoms/CartLogo";
import HeaderLogo from "../atoms/HeaderLogo";
import { HeaderTopStyle } from "./molecules.style";
import SearchBar from "./SearchBar";

function HeaderTop(props) {
  return (
    <HeaderTopStyle>
      <HeaderLogo />
      <SearchBar />
      <div className="auth">
        <div>
          <Link to="/login" className="no-dec">
            Login
          </Link>
        </div>
        <div>
          <Link to="/register" className="no-dec">
            Sin up
          </Link>
        </div>
        <div>
          <Link to="/seller-register" className="no-dec">
            Seller Register
          </Link>
        </div>
      </div>
      <CartLogo />
    </HeaderTopStyle>
  );
}

export default HeaderTop;
