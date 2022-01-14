import React from "react";
import { Link } from "react-router-dom";
import { FooterStyle } from "./organisms.style";

function Footer(props) {
  return (
    <FooterStyle>
      <div className="top">
        <div className="item-wrapper">
          <div className="item-body">
            <div className="title">Get to Know Us</div>
            <div className="item">About Us</div>
            <div className="item">Careers</div>
            <div className="item">Foodkatta Cares</div>
            <div className="item">
              <Link to="/seller-register" className="no-dec">
                Seller Register
              </Link>
            </div>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item-body">
            <div className="title">Connect with Us</div>
            <div className="item">Facebook</div>
            <div className="item">Instagram</div>
            <div className="item">Twitter</div>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item-body">
            <div className="title">Let Us Help You</div>
            <div className="item">Your Account</div>
            <div className="item">Return Center</div>
            <div className="item">100% Purchase Protection</div>
            <div className="item">Help</div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="item">Conditions of Use & Sale</div>
        <div className="item">Privary Notice</div>
        <div className="item">
          <span>c</span>
          2021, Footkatta.in
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
