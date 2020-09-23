import React, { useState } from "react";
import { useSelector } from "react-redux";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import ProgressBar from "../common/ProgressBar";
import ModalProvider from "../../context/modalProvider";

const Layout = (props) => {
  const loading = useSelector((state) => state.auth.loading);

  return (
    <>
      <ModalProvider>
        <Toolbar />
        <SideDrawer />
      </ModalProvider>
      <main className="py-12 min-h-screen px-2 sm:px-4 lg:px-10 bg-secondary w-full">
        <Helmet>
          <title>کتاب خوان</title>
        </Helmet>
        <ProgressBar loading={loading} />
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
