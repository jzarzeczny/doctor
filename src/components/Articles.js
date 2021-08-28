import React from "react";
import Article from "./Article";
import Button from "./Button";
import { Art1, Art2, Art3 } from "../images/art";
export default function Articles() {
  return (
    <section className="article">
      <h3 className="article__header line">Check out our latest article</h3>
      <Article
        image={Art1}
        header="Disease detection, check 
up in the laboratory"
        p="In this case, the role of the health laboratory is very important to do
a disease detection..."
      />
      <Article
        image={Art2}
        header="Herbal medicines that are 
safe for consumption"
        p="Herbal medicine is very widely used at this time because of its very good for your health..."
      />
      <Article
        image={Art3}
        header="Natural care for healthy 
facial skin"
        p="A healthy lifestyle should start from now and also for your skin health.
There are some..."
      />
      <Button ghost>View all</Button>
    </section>
  );
}
