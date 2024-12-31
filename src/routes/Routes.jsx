import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Dashboard from "../components/Dashboard/Dashboard";
import Products from "../components/Products/Products";
import AllProducts from "../components/AllProducts/AllProducts";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Laptop from "../components/Laptop/Laptop";
import Phones from "../components/Phones/Phones";
import Accessories from "../components/Accessories/Accessories";
import CartDetails from "../components/CartDetails/CartDetails";
import WishDetails from "../components/WishDetails/WishDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/allProducts.json'),
      },
      {
        path: '/cartList',
        element: <CartDetails></CartDetails>,
        loader: () => fetch('/allProducts.json'),
      },
      {
        path: '/wishList',
        element: <WishDetails></WishDetails>,
        loader: () => fetch('/allProducts.json'),
      },

      {
        path: '/products',
        element: <Products></Products>,
        loader: () => fetch('allProducts.json'),
        children: [
          {
            path: '',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('/allProducts.json'),
          },
          {
            path: 'laptops',
            element: <Laptop></Laptop>,
            loader: () => fetch('/laptop.json'),
          },
          {
            path: 'phones',
            element: <Phones></Phones>,
            loader: () => fetch('/phones.json'),
          },
          {
            path: 'accessories',
            element: <Accessories></Accessories>,
            loader: () => fetch('/accessories.json'),
          },
        ]

      },
      {
        path: '/product/:product_id',
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('/allProducts.json'),
      },

    ]
  },
]);

export default routes;