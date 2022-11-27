import { lazy } from "react";
import React from "react";
import GlobalLayout from "./pages/_layout";

const Index = lazy(() => import("./pages/index"));
const CartIndex = lazy(() => import("./pages/cart/index"));
const PaymentIndex = lazy(() => import("./pages/payment/index"));
const ProductsIndex = lazy(() => import("./pages/products/index"));
const ProductsId = lazy(() => import("./pages/products/[id]"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/cart", element: <CartIndex />, index: true },
      { path: "/payment", element: <PaymentIndex />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/products/:id", element: <ProductsId /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/cart" },
  { route: "/payment" },
  { route: "/products" },
  { route: "/products/:id" },
];
