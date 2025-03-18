import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/mainFooter/Footer";
import NavBar from "../components/navbar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
