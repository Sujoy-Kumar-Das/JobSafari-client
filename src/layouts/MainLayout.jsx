import React from "react";
import Header from "../pages/shared/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <div className=" w-11/12 mx-auto mb-20 mt-10">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
