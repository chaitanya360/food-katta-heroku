import React from "react";
import { DropDownMenuStyle } from "./molecules.style";

function DropDownMenu(props) {
  return (
    <DropDownMenuStyle>
      <label for="touch">
        <img src={`${process.env.PUBLIC_URL}/images/icons/menu.svg`} />
      </label>
      <input type="checkbox" id="touch" />
      <div className="slide">
        <ul>
          <li>
            <a href="#">Sweets</a>
          </li>
          <li>
            <a href="#">Namkeens</a>
          </li>
          <li>
            <a href="#">Dry Fruits</a>
          </li>
          <li>
            <a href="#">Sev</a>
          </li>
          <li>
            <a href="#">Papad</a>
          </li>
          <li>
            <a href="#">Chutney</a>
          </li>
        </ul>
      </div>
    </DropDownMenuStyle>
  );
}

export default DropDownMenu;
