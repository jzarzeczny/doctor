import React from "react";
import Card from "./Card";
import Button from "./Button";
import {
  details,
  firstAid,
  forget,
  medicine,
  notes,
  patient,
} from "../images/services/index";

export default function Services() {
  return (
    <section className="services">
      <h2 className="services__header">Our services</h2>
      <p className="services__para">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="servrices__container">
        <Card
          header="Search doctor"
          para="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          img={forget}
        ></Card>
        <Card
          header="Online pharmacy"
          para="Buy  your medicines with our mobile application with a simple delivery system"
          img={medicine}
        ></Card>
        <Card
          header="Consultation"
          para="Free consultation with our trusted doctors and get the best recomendations"
          img={patient}
        ></Card>
        <Card
          header="Details info"
          para="Free consultation with our trusted doctors and get the best recomendations"
          img={details}
        ></Card>
        <Card
          header="Emergency care"
          para="You can get 24/7 urgent care for yourself or your children and your lovely family"
          img={firstAid}
        ></Card>
        <Card
          header="Tracking"
          para="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          img={notes}
        ></Card>
      </div>
      <Button ghost>Learn more</Button>
    </section>
  );
}
