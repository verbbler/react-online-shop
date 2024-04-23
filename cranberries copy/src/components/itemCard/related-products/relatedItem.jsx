import React from "react";
import { Link } from "react-router-dom";

import rating from "/Users/vera/Desktop/кодим/cranberries/src/images/rating.svg";
import './relatedProducts.css'

export default function RelatedItem() {
  return (
    <Link to={`/itemCard`} style={{ textDecoration: 'none', color: "black" }}>
      <div className="relatedItem">
        <div className="relatedPicture" />
        <div className="relatedName">Товар</div>
        <div className="relatedRow">
          <div className="relatedPrice">€10</div>
          <div className="relatedRating">
            <img className="relatedImg" src={rating} alt="" />
            <div className="relatedPoints">4.8</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
