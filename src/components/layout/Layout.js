import React, { useState } from "react";
import { useSelector } from "react-redux";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import ProgressBar from "../common/ProgressBar";

const Layout = (props) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(true);
  const loading = useSelector((state) => state.auth.loading);
  const handleBackdrop = () => {
    setOpenSideDrawer(false);
  };

  const sideDrawerToggle = () => {
    setOpenSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Toolbar sideDrawerToggle={sideDrawerToggle} />
      <SideDrawer open={openSideDrawer} closed={handleBackdrop} />
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
