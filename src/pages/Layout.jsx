import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../composants/Header";
import Footer from "../composants/Footer";

const Layout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
