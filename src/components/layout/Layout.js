import React, { useState } from "react";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(true);

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
      <main className="py-12 min-h-screen px-10 bg-secondary w-full">
        <Helmet>
          <title>کتاب خوان</title>
        </Helmet>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
