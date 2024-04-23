import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

import logo from "/Users/vera/Desktop/кодим/cranberries/src/images/logo.png";
import profile from "/Users/vera/Desktop/кодим/cranberries/src/images/profile.svg";
import catalogue from "/Users/vera/Desktop/кодим/cranberries/src/images/threeLines.svg";
import search from "/Users/vera/Desktop/кодим/cranberries/src/images/search.svg";


export default function Header() {
  const input = {
    padding: "1vh 1vw 1vh 1vw",
    border: "1px solid lightgray",
    borderRadius: "20px",
    outline: "none",
    boxShadow: "0 4px 7px 0 lightgray",
    textAlign: "left",
    backgroundImage: `url("${ search }")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "7%",
    backgroundPositionX: "14vw",
    backgroundPositionY: "center"
  }
  return (
    <div className="header">
      {/* <Link to={`/`} style={{ textDecoration: 'none', color: "black" }}> */}
        <img className="logo" src={ logo } alt="logo" />
      {/* </Link> */}
      <Link to={`/`} style={{ textDecoration: 'none', color: "black" }}>
        <h3 className="companyName">
          The
          <br />
          Cranberries
        </h3>
      </Link>
      <h5 className="beASeller">
        Стать
        <br />
        продавцом
      </h5>
      <input className="find" placeholder={"Поиск"} style={ input } />
      <Link to={`/catalog`} style={{ textDecoration: 'none', color: "black" }}>
        <h5 className="catalogue">
          <img className="imgCatalogue" src={ catalogue } alt=""></img>
          Каталог
        </h5>
      </Link>
      <Link to={`/favourites`} style={{ textDecoration: 'none', color: "black"}}>
        <button className="favourites">Избранное</button>
      </Link>
      <Link to={`/cart`} style={{ textDecoration: 'none', color: "black"}}>
        <button className="cart">Корзина</button>
      </Link>
      <img className="profile" src={ profile } alt=""></img>
    </div>
  );
}
