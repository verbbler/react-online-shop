import React from "react";
import "./priceSection.css";

export default function PriceSection() {
    return (
      <>
        <div className="column priceSection">
          <div className="row priceSection">
            <div className="priceSectionSelected">Выбрано:</div>
            <div className="priceSectionAmount">4 товара</div>
          </div>
          <input
            className="promocode"
            type="text"
            placeholder="ввести промокод"
          />
          <div className="row priceSection">
            <h3>Итого:</h3>
            <h3 className="priceSectionPrice">€52</h3>
          </div>
          <button className="checkout">Оформить заказ</button>
        </div>
      </>
    );
}