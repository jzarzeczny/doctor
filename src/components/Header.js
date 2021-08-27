import React, { useState } from "react";
import logo from "../images/mainLogo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggle() {
    console.log(open);
    setOpen(!open);
  }
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Trafalgar" />

      <nav className={`navigation ${open && "navigation--open"}`}>
        <button className="hamburger__button" onClick={toggle}>
          <span className={`hamburger`}></span>
        </button>
        <ul className="nav__list">
          <li className="nav__element">
            <a href="#">Home</a>
          </li>
          <li className="nav__element">
            <a href="#">Find a doctor</a>
          </li>
          <li className="nav__element">
            <a href="#">Apps</a>
          </li>
          <li className="nav__element">
            <a href="#">Testimonials</a>
          </li>
          <li className="nav__element">
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
