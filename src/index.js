import React from "react";
import ReactDOM from "react-dom/client";
import "sass/main.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "queryClient";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
