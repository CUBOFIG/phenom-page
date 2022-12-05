import React from "react";
import Header from "../components/Header/Header";
import { LayoutContainer, LayoutChildren } from "./Layout.element";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutChildren>
        <Outlet />
      </LayoutChildren>
    </LayoutContainer>
  );
};

export default Layout;
