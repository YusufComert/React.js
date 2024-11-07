import React from "react";
import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.facebook.com/Hakyemez.Hakan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/hakan.hakyemez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>

        <a
          href="https://x.com/RTErdogan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon />
        </a>
      </div>
      <p>Tüm Hakları Saklıdır | BurgerYiyelim</p>
    </div>
  );
};

export default Footer;
