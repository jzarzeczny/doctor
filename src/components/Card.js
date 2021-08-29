import React from "react";

export default function Card({ header, para, img }) {
  return (
    <div className="card">
      <img className="card__img" src={img} alt="" />
      <h3 className="card__header">{header}</h3>
      <p className="card__para">{para}</p>
    </div>
  );
}
