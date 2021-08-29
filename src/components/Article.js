import React from "react";

export default function Article({ image, header, para }) {
  return (
    <div className="article">
      <img src={image} alt="" className="article__image" />
      <div className="article__text">
        <h3 className="article__header">{header}</h3>
        <p className="article__para">{para}</p>
        <div className="link__container">
          <a href="#" className="article__link">
            Read more
          </a>
          <div className="rightArrow arrow--active"></div>
        </div>
      </div>
    </div>
  );
}
