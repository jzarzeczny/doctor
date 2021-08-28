import React from "react";
import Feature from "./Feature";
import { App, Providers } from "../images/features";

export default function Features() {
  return (
    <section className="features">
      <Feature
        header="Leading healthcare providers"
        para="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
        button="Learn more"
        image={App}
      />
      <Feature
        header="Download our mobile apps"
        para="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
        button="Download"
        image={Providers}
      />
    </section>
  );
}
