import React from "react";

export default function ArrowNav() {
  return (
    <div className="arrowNav">
      <div className="leftArrow "></div>
      <div className="dots">
        <div className="dot dot--active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="rightArrow arrow--active"></div>
    </div>
  );
}
