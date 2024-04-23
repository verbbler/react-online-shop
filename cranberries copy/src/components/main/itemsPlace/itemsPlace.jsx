import Item from "./item/item";
import ForU from "./forU/forU";
import './itemsPlace.css';
import React from "react";

export default function ItemsPlace() {
    return (
      <div className="itemsPlace">
        <div className="itemSection">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <ForU />
      </div>
    );
}