import "./forU.css";
import React from "react";
import { Link } from "react-router-dom";

import ItemForU from "./itemForU/itemForU";

const style = {
  minHeight: "3vh", 
  maxHeight: "3vh"
}
export default function ForU() {
  return (
    <div className="forU">
      <div className="row" style={ style }>
        <div className="special">Специально для вас:</div>
        <button className="all">Все</button>
      </div>
      <Link to={`/itemCard`} style={{ textDecoration: 'none', color: "black" }}>
        <div className="itemsForU">
          <ItemForU />
          <ItemForU />
        </div>
        <div className="itemsForU">
          <ItemForU />
          <ItemForU />
        </div>
      </Link>
    </div>
  );
}
