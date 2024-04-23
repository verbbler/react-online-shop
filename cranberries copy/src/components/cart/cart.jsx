import React from "react";

import ProductInTheCart from "./productInTheCart/productInTheCart";
import Delivery from "./delivery/delivery";
import PriceSection from "./priceSection/priceSection";
import Header from "../header/header";

export default function Cart() {
    const row = {
        padding: "2vh 5vw 1vh 5vw",
        minWidth: "45vw",
        maxWidth: "45vw",
        alignItems: "center"
    }
    
    const form = {
        display: "flex",
        alignItems: "center"
    }

    const input = {
        minWidth: "2vw",
        maxWidth: "2vw",
        accentColor: "#334E34"
    }

    const style = {
      color: "gray"
    }

  return (
    <>
      <Header />
      <div className="row" style={ row }>
        <h2>Корзина</h2>
        <form style={ form } >
          <input type="checkbox" id="selectAll" style={ input } />
          <label htmlFor="selectAll">Выбрать все</label>
        </form>
        <div style={ style }>Удалить все</div>
      </div>
      <ProductInTheCart />
      <ProductInTheCart />
      <ProductInTheCart />
      <div className="row">
        <Delivery />
        <PriceSection />
      </div>
    </>
  );
}
