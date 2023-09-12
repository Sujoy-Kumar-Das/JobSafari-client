import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../pages/shared/header/Header"
const ResgistrationLayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default ResgistrationLayout;