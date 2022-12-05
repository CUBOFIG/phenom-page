import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import GlobalStyle from "./globalStyles";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
