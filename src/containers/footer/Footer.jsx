import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <div className="footer__hero">
          <img src={logo} alt="" className="footer__hero-logo" />
          <h1 className="footer__hero-subtext">
            The One Card To Rule Them All
          </h1>
        </div>
        <div className="footer__links">
          <a href="">Cards</a>
          <a href="">Resources</a>
          <a href="">Reach Us</a>
        </div>
      </div>
      <div className="footer__secondary-links">
        <div className="footer-terms">
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
        </div>
        <p>© All rights reserved to TAPI</p>
      </div>
    </div>
  );
};

export default Footer;
