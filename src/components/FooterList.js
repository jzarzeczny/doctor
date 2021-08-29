import React from "react";

export default function FooterList({ header, elements }) {
  return (
    <div className="footer__list">
      <h4 className="list__header">{header}</h4>
      <ul>
        {elements.map((element) => {
          return <li className="list__element">{element}</li>;
        })}
      </ul>
    </div>
  );
}
