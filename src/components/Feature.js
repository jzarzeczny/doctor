import React from "react";
import Button from "./Button";

export default function Feature({ header, para, button, image }) {
  return (
    <div className="feature__container">
      <div className="feature__text">
        <h3 className="feature__header line">{header}</h3>
        <p className="feature__para">{para}</p>
        <Button ghost>{button}</Button>
      </div>
      <img src={image} alt="" className="feature__image" />
    </div>
  );
}
