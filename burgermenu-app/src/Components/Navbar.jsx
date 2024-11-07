import React from "react";
import BurgerLogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <Link to="/">
          <img src={BurgerLogo} alt="" />
        </Link>

        <div className="mainLink">
          <Link to="/">ANASAYFA</Link>
          <Link to="/menu">MENU</Link>
          <Link to="/about">HAKKIMIZDA</Link>
          <Link to="/contact">İLETİŞİM</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
