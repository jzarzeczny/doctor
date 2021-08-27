import React from "react";

export default function Button({ children, ghost }) {
  return (
    <button className={`btn ${ghost ? "btn--ghost" : ""}`}>{children}</button>
  );
}
