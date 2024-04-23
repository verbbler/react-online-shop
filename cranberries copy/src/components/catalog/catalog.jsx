import React from "react";

import SideMenu from "./sideMenu/sideMenu";
import Sale from "./sale/sale";
import Header from "../header/header";

export default function Catalog() {
    return (
      <>
        <Header />
        <div className="row">
          <SideMenu />
          <Sale />
        </div>
      </>
    );
}