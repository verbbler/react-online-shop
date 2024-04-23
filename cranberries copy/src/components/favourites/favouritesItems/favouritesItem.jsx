import React from "react";
import { Link } from "react-router-dom";

import "./favouritesItem.css";
import rating from "/Users/vera/Desktop/кодим/cranberries/src/images/rating.svg";

export default function FavouritesItem() {
    return (
      <div className="favouritesItem">
        <Link
          to={`/itemCard`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="favouritesPicture" />
          <div className="favouritesName">Товар</div>
          <div className="favouritesRow">
            <div className="favouritesPrice">€10</div>
            <div className="favouritesRating">
              <img className="favouritesImg" src={ rating } alt="" />
              <div className="favouritesPoints">4.8</div>
            </div>
          </div>
        </Link>
        <button className="favouritesToCart">В корзину</button>
      </div>
    );
}