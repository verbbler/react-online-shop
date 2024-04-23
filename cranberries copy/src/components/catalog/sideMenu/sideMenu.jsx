import React from "react";
import "./sideMenu.css";
import { useState } from "react";

import arrow from "/Users/vera/Desktop/кодим/cranberries/src/images/arrow.svg";
import sale from "/Users/vera/Desktop/кодим/cranberries/src/images/sale.svg";
import clothes from "/Users/vera/Desktop/кодим/cranberries/src/images/clothes.svg";
import shoes from "/Users/vera/Desktop/кодим/cranberries/src/images/shoes.svg";
import house from "/Users/vera/Desktop/кодим/cranberries/src/images/house.svg";
import garden from "/Users/vera/Desktop/кодим/cranberries/src/images/garden.svg";
import zoo from "/Users/vera/Desktop/кодим/cranberries/src/images/zoo.svg";
import sport from "/Users/vera/Desktop/кодим/cranberries/src/images/sport.svg";
import accessories from "/Users/vera/Desktop/кодим/cranberries/src/images/accessories.svg";
import beauty from "/Users/vera/Desktop/кодим/cranberries/src/images/beauty.svg";
import office from "/Users/vera/Desktop/кодим/cranberries/src/images/office.svg";
import books from "/Users/vera/Desktop/кодим/cranberries/src/images/books.svg";
import electronics from "/Users/vera/Desktop/кодим/cranberries/src/images/electronics.svg";
import entertainment from "/Users/vera/Desktop/кодим/cranberries/src/images/entertainment.svg";
import momNkid from "/Users/vera/Desktop/кодим/cranberries/src/images/momNkid.svg";


export default function SideMenu() {
  const sidebarMenu = [
    {firstIMG: sale, name: "Распродажа", secondIMG: arrow, id: "sale"},
    {firstIMG: clothes, name: "Одежда", secondIMG: arrow, id: "clothes"},
    {firstIMG: shoes , name: "Обувь", secondIMG: arrow, id: "shoes"},
    {firstIMG: house, name: "Дом", secondIMG: arrow, id: "house"},
    {firstIMG: garden, name: "Сад и дача", secondIMG: arrow, id: "garden"},
    {firstIMG: zoo, name: "Зоотовары", secondIMG: arrow, id: "zoo"},
    {firstIMG: sport, name: "Спорт", secondIMG: arrow, id: "sport"},
    {firstIMG: accessories, name: "Аксессуары", secondIMG: arrow, id: "accessories"},
    {firstIMG: beauty, name: "Красота", secondIMG: arrow, id: "beauty"},
    {firstIMG: office, name: "Канцелярия", secondIMG: arrow, id: "office"},
    {firstIMG: books, name: "Книги", secondIMG: arrow, id: "books"},
    {firstIMG: electronics, name: "Электроника", secondIMG: arrow, id: "electronics"},
    {firstIMG: entertainment, name: "Досуг и развлечения", secondIMG: arrow, id: "entertainment"},
    {firstIMG: momNkid, name: "Детям и мамам", secondIMG: arrow, id: "momNkid"},
  ]

  const [backgroundColor, setBackgroundColor] = useState("white");
  const handleClick = (e) => {
    setBackgroundColor(e.target.innerText);
  };

  return (
    <div className="sideMenu">
      {sidebarMenu.map((item) => (
        <div key={ item.id } className={`menu${" " + item.id}`} style={{ background: backgroundColor === `${item.name}` ? "rgba(192, 192, 192, 0.2)" : "white" }} onClick={ handleClick }>
          <img src={ item.firstIMG } alt="" />
          <p className="menuText">{ item.name }</p>
          <img src={ item.secondIMG } alt="" />
        </div>
      ))}
    </div>
  );
}
