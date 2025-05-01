import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const naviaget = useNavigate();
  return (
    <div className="header_bg_container">
      <p className="logo">ARIZON-SHOPPING</p>
      <div className="header_icons_container">
        <IoIosHome className="header_icon" onClick={() => naviaget("/")} />
        <FaCartShopping
          className="header_icon"
          onClick={() => naviaget("/cart")}
        />
      </div>
    </div>
  );
}

export default Header;
