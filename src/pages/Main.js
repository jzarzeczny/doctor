import React from "react";
import Features from "../components/Features";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Options from "../components/Opinions";
import ArrowNav from "../components/ArrowNav";
import Articles from "../components/Articles";

export default function Main() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <Features />
      <Options />
      <ArrowNav />
      <Articles />
    </>
  );
}
