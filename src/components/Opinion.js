import React from "react";

export default function Opinion({ avatar, name, role, para }) {
  return (
    <div className="opinion__container">
      <div className="opinion__author">
        <img src={avatar} alt="" className="author__avatar" />
        <h4 className="author__name">{name}</h4>
        <p className="author__role">{role}</p>
      </div>
      <p className="opinion__para">{para}</p>
    </div>
  );
}
