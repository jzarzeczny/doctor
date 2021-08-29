import React from "react";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Options from "../components/Opinions";
import ArrowNav from "../components/ArrowNav";
import Articles from "../components/Articles";

export default function Main() {
  return (
    <Layout>
      <Intro />
      <Services />
      <Features />
      <Options />
      <ArrowNav />
      <Articles />
    </Layout>
  );
}
