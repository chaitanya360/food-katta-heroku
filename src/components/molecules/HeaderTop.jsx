import React from "react";
import { Link } from "react-router-dom";
import CartLogo from "../atoms/CartLogo";
import HeaderLogo from "../atoms/HeaderLogo";
import DropDownMenu from "./DropDownMenu";
import { HeaderTopStyle } from "./molecules.style";
import SearchBar from "./SearchBar";

function HeaderTop(props) {
  return (
    <HeaderTopStyle>
      <div style={{ display: "flex", alignItems: "center" }}>
        <DropDownMenu />
        <HeaderLogo />
      </div>
      <SearchBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
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
      </div>
    </HeaderTopStyle>
  );
}

export default HeaderTop;
