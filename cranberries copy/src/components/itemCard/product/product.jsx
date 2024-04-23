import "./product.css";
import React from "react";

import rating from "/Users/vera/Desktop/кодим/cranberries/src/images/rating.svg";

const style = {
  alignItems: "center",
  maxHeight: "3vh",
  padding: "1vh 0vh 1vh 0vh"
}

const ratingStyle = {
  maxWidth: "1rem"
}

export default function Product() {
  return (
    <div className="product">
      <div className="tags">
        <div className="tag">Каталог</div>
        <div className="tag">Категория</div>
        <div className="tag">Бренд</div>
        <div className="tag">Товар</div>
      </div>
      <div className="container">
        <div className="miniPictures">
          <div className="mini" />
          <div className="mini" />
          <div className="mini" />
          <div className="mini" />
          <div className="mini" />
          <div className="mini" />
        </div>
        <div className="mainPicture" />
        <div className="column">
          <h2 className="name">Название</h2>
          <div className="row" style={ style }>
            <img className="rating" src={rating} alt="" style={ ratingStyle }/>
            <div className="rate">4.8 (27)</div>
          </div>
          <h3 className="options">Варианты</h3>
          <div className="row">
            <div className="option" />
            <div className="option" />
            <div className="option" />
            <div className="option" />
          </div>
          <div className="about">
            О товаре:
            <div className="prop">Свойство.....Свойство</div>
            <div className="prop">Свойство.....Свойство</div>
            <div className="prop">Свойство.....Свойство</div>
            <div className="prop">Свойство.....Свойство</div>
            <div className="prop">Свойство.....Свойство</div>
          </div>
        </div>
        <div className="column sec">
          <h2 className="price">€13</h2>
          <div className="delivery">Доставим до 15 февраля</div>
            <button className="toCart">В корзину</button>
          <button className="buyNow">Купить сейчас</button>
          <button className="toFavourites">В избранное </button>
        </div>
      </div>
    </div>
  );
}
