import React from "react";
import "./sale.css";

export default function Sale() {
  const bold = {
    fontWeight: "bolder",
    fontSize: "20px",
  }

  const row = {
    paddingBottom: "7vh"
  }

  return (
    <div className="saleSection">
      <h3 className="Sale">Распродажа</h3>
      <div className="row" style={ row }>
        <div className="column">
          <div style={bold}>Одежда</div>
          <div>Женская</div>
          <div>Мужская</div>
          <div>Детская</div>
          <div>Спортивная</div>
          <div>Уход за одеждой</div>
        </div>
        <div className="column">
          <div style={bold}>Обувь</div>
          <div>Женская</div>
          <div>Мужская</div>
          <div>Детская</div>
          <div>Аксессуары</div>
        </div>
        <div className="column">
          <div style={bold}>Дом</div>
          <div>Кухня</div>
          <div>Ванная</div>
          <div>Спальня</div>
          <div>Гостинная</div>
          <div>Декор</div>
          <div>Интерьер</div>
        </div>
      </div>
      <div className="row" style={ row }>
        <div className="column">
          <div style={bold}>Сад и дача</div>
          <div>Семена</div>
          <div>Для рстений</div>
          <div>
            Грили, мангалы
            <br />
            Барбекю
          </div>
          <div>Садовая мебель</div>
          <div>Садовая техника</div>
          <div>Другое</div>
        </div>
        <div className="column">
          <div style={bold}>Аксессуары</div>
          <div style={bold}>Красота</div>
          <div style={bold}>Канцелярия</div>
          <div style={bold}>Зоотовары</div>
          <div style={bold}>Досуг и развлечения</div>
        </div>
        <div className="column">
          <div style={bold}>Спорт</div>
          <div style={bold}>Книги</div>
          <div style={bold}>Детям и мамам</div>
          <div style={bold}>Электроника</div>
        </div>
      </div>
    </div>
  );
}
