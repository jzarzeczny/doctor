import React from "react";
import image from "../images/mainImage.png";
import Button from "./Button";
export default function Intro() {
  return (
    <section className="intro">
      <img className="intro__image" src={image} alt="" />
      <div className="information">
        <h1 className="information__header">Virtual healthcare for you</h1>
        <p className="information__para">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Button>Consult today</Button>
      </div>
    </section>
  );
}
