import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./Montserrat/static/Montserrat-Regular.ttf";

import App from "./App";
import Cart from "./components/cart/cart";
import Catalog from "./components/catalog/catalog";
import Favourites from "./components/favourites/favourites";
import ItemCard from "./components/itemCard/ItemCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/favourites',
    element: <Favourites />,
  },
  {
    path: '/itemCard',
    element: <ItemCard />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <> 
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>
  </>
);