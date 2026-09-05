import React from "react";
import App from "./App";
import Product from "./components/Product";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import Error from "./components/Error";
import Home from "./components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    {/* Second way of calling header but it is also not best way */}
    {/* <Header />    */}

    <RouterProvider router={router} />
  </>,
);
