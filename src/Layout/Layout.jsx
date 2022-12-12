import Header from "../components/Header/Header";
import { LayoutContainer, LayoutChildren } from "./Layout.element";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Header />
      <LayoutChildren>
        <Outlet />
      </LayoutChildren>
    </LayoutContainer>
  );
};

export default Layout;
