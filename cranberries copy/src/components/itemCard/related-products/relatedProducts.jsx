import "./relatedProducts.css";
import RelatedItem from "./relatedItem";
import React from "react";

export default function RelatedProducts() {
  return (
    <div className="relatedProducts">
      <h3 className="related">Похожие товары</h3>
      <div className="relatedItems">
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
      </div>
    </div>
  );
}
