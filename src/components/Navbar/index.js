import React from "react";
import "./navbar.styles.scss";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import TDLogo from "../../assets/Logo.png";
import TDMobile from "../../assets/MobileLogo.png";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar" id="navbar">
      <div className="navbar__container">
        <div className="navbar__Logo">
          <LinkR className="navbar__logo-link" to="/">
            <img src={TDLogo} alt="Logo" />
            <div className="mobileLogo">
              <img src={TDMobile} alt="Logo" />
            </div>
          </LinkR>
        </div>
        <div className="navbar__Links">
          <LinkR to="/">Home</LinkR>
          <LinkR to="about">About</LinkR>
          <LinkR to="Mycontact">Contact</LinkR>
          {location.pathname === "/" ? (
            <LinkS to="contact" smooth={true}>
              Social
            </LinkS>
          ) : (
            <LinkR to="/" state={{ scrollToContact: true }}>
               Social
            </LinkR>
          )}
          <a
            href="https://drive.google.com/drive/folders/1bOTNGM0oYRvQ9eumRjlXktCp3g24-p3z?usp=sharing "
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
