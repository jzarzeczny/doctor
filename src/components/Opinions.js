import React from "react";
import Opinion from "./Opinion";
import Avatar from "../images/opinions/avatar1.svg";

export default function Opinions() {
  return (
    <section className="opinions">
      <h3 className="opinions__header line line--white">
        What our customer are saying
      </h3>
      <Opinion
        avatar={Avatar}
        name="Edward Newgate"
        role="Founder Circle"
        para="“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
      />
    </section>
  );
}
