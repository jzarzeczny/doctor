import React from "react";
import FooterList from "./FooterList";
import logo from "../images/mainLogo--white.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Trafalgar" />

      <div className="footer__information">
        <p className="information__para">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className="information__rights">
          ©Trafalgar PTY LTD 2020. All rights reserved
        </p>
      </div>
      <div className="list__container">
        <FooterList
          header="Company"
          elements={["About", "Testimonials", "Find a doctor", "Apps"]}
        />
        <FooterList
          header="Region"
          elements={["Indonesia", "Singapore", "Hongkong", "Canada"]}
        />
        <FooterList
          header="Help"
          elements={[
            "Help center",
            "Contact support",
            "Instructions",
            "How it works",
          ]}
        />
      </div>
    </footer>
  );
}
