import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./productInTheCart.css"

export default function ProductInTheCart() {
  const row = {
    padding: "1vh 5vw 1vh 5vw",
  };

  const [ value, setValue] = useState(1);

  return (
    <>
      <div className="inTheCartRow" style={ row }>
        <Link to={`/itemCard`} style={{ textDecoration: 'none', color: "black" }}>
          <div className="inTheCartPicture" />
        </Link>
        <div className="column">
          <h3 className="cartItemName">Название товара</h3>
          <div className="selectedColor">Выбранная характеристика (цвет)</div>
          <input
            name="input"
            type="number"
            min="0"
            value={ value }
            className="cartInput"
            onChange={ (e) => setValue(e.target.value) }
          />
        </div>
        <div className="Cart column">
          <input type="checkbox" className="cartCheckbox" />
          <h3 className="cartPrice">€13</h3>

          <div className="cartDelivery">Доставим до 15 февраля</div>
          <button className="cartPayNow">Оплатить сейчас</button>
          <button className="cartDelete">Удалить из корзины</button>
        </div>
      </div>
    </>
  );
}
