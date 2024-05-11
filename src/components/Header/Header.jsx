import React from "react";
import "./Header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const LOGO = process.env.PUBLIC_URL + "/images/TasteBite.png";
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <div className="header-box">
      <img src={LOGO}></img>
      <div className="links-wider-page">
        <a href="#">Homepage</a>
        <a href="#">Recipes</a>
        <a href="#">Pages</a>
        <a href="#">Buy</a>
      </div>
      <div className="header-buttons">
        <FontAwesomeIcon icon={faSearch} size="xl" />
        <FontAwesomeIcon icon={faBars} size="xl" onClick={openNav} />
      </div>
      <div
        id="mySidenav"
        className={`sidenav ${isOpen ? "open" : ""}`}
        style={{ width: isOpen ? "250px" : "0" }}
      >
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">Homepage</a>
        <a href="#">Recipe Page</a>
        <a href="#">Pages</a>
        <a href="#">Buy</a>
      </div>
    </div>
  );
}

export default Header;
