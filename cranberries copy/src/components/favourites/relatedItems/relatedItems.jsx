import React from "react";
import { Link } from "react-router-dom";

import "./relatedItems.css";
import rating from "/Users/vera/Desktop/кодим/cranberries/src/images/rating.svg";

export default function RelatedItemsFavourites() {
    return (
      <>
      <Link to={`/itemCard`} style={{ textDecoration: 'none', color: "black" }}>
          <div className="favRelatedItem">
            <div className="favRelatedPicture" />
            <div className="favRelatedName">Товар</div>
            <div className="favRelatedRow">
              <div className="favRelatedPrice">€10</div>
              <div className="favRelatedRating">
                <img className="favRelatedImg" src={rating} alt="" />
                <div className="favRelatedPoints">4.8</div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
}