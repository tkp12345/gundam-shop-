import React from "react";
import { Link } from "react-router-dom";
import GUNDAM_ICON from "./../img/gundam.png";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        {GUNDAM_ICON}
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/products">상품 목록</Link>
        </li>
        <li>
          <Link to="/cart">장바 구니</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
