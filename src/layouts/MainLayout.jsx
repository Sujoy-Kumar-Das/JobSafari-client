import React from "react";
import Header from "../pages/shared/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
