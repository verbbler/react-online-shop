import React from "react";

import Header from "../header/header";
import FavouritesItem from "./favouritesItems/favouritesItem";
import RelatedItemsFavourites from "./relatedItems/relatedItems";

export default function Favourites() {
    const fItem = {
        padding: "1vh 4vw 1vh 4vw",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    }

    const button = {
        backgroundColor: "lightgray",
        color: "white",
        minWidth: "12vw",
        maxWidth: "12vw",
        minHeight: "4vh",
        maxHeight: "4vh",
        borderRadius: "2vh",
        margin: "3vh 44vw 3vh 44vw"
    }

    const text = {
        padding: "1vh 5vw 1vh 6vw",
        fontSize: "20px"
    }

    const fItems = {
      margin: "1vh 5vw 1vh 4vw",
      display: "flex",
      flexDirection: "row",
      overflow: "scroll"
    }

    return (
      <>
        <Header />
        <div className="FavouritesItems" style={ fItem }>
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
          <FavouritesItem />
        </div>
        <button className="toOtherPurchase" style={ button }>К другим покупкам</button>
        <h4 style={ text }>Похожие товары</h4>
        <div className="favouritesRelated" style={ fItems }>
            <RelatedItemsFavourites />
            <RelatedItemsFavourites />
            <RelatedItemsFavourites />
            <RelatedItemsFavourites />
            <RelatedItemsFavourites />
            <RelatedItemsFavourites />
            <RelatedItemsFavourites />
            <RelatedItemsFavourites />
            <RelatedItemsFavourites />
            <RelatedItemsFavourites />
        </div>
      </>
    );
}