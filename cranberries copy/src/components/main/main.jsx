import React from "react";

import Header from "../header/header";
import Advertisement from "./advertisement/advertisement";
import ItemsPlace from "./itemsPlace/itemsPlace";

export default function Main() {
  return (
    <>
      <Header />
      <Advertisement />
      <ItemsPlace />
    </>
  );
}