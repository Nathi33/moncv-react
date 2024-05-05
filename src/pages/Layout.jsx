import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../composants/Header";

const Layout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
