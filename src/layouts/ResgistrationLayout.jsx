import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";
const ResgistrationLayout = () => {
  return (
    <>
      <Header></Header>
      <div className=" w-11/12 lg:w-4/5 mx-auto mb-20 mt-10">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default ResgistrationLayout;
