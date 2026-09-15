import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCart from "./components/AddCart";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <AddCart />,
      },
    ],
  },
]);

createRoot(document.querySelector("#root")).render(
  <RouterProvider router={router} />,
);