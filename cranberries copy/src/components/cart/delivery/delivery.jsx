import React from "react";
import "./delivery.css";
import addAdress from "/Users/vera/Desktop/кодим/cranberries/src/images/addAdress.svg";
import activeCard from "/Users/vera/Desktop/кодим/cranberries/src/images/activeCard.svg";
import disabledCard from "/Users/vera/Desktop/кодим/cranberries/src/images/disabledCard.svg";
import addCard from "/Users/vera/Desktop/кодим/cranberries/src/images/addCard.svg";
import recipientIMG from "/Users/vera/Desktop/кодим/cranberries/src/images/recipientIMG.svg";

export default function Delivery() {
  return (
    <>
      <div className="column deliveryColumn">
        <h3>Условия доставки</h3>
        <div className="row">
          <div className="deliveryAdress box">
            <h4>Адрес</h4>
            <div className="adress">г. Белград, ул. Новая, д.4. кв.23</div>
            <input className="deliveryCheckbox" type="checkbox" />
          </div>
          <div className="deliveryAddAdress box">
            <h4 className="addAdress">Добавить <br/> адрес</h4>
            <img src={addAdress} alt="" />
          </div>
          <div className="deliveryRecipient">
            <h3 className="deliveryName">Получатель <img src={ recipientIMG } alt="" /> </h3>
            <div className="recipientName">Иван Иванов</div>
            <div className="recipientPhone">+7 000 000 00 00</div>
            <div className="recipientEmail">adress@gmail.com</div>
          </div>
        </div>
        <h3>Оплата</h3>
        <div className="row">
          <img className="firstCard" src={ activeCard } alt="" />
          <img className="secondCard" src={ disabledCard } alt="" />
          <img className="addCard" src={ addCard } alt="" />
        </div>
      </div>
    </>
  );
}