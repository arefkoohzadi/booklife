import React, { useState } from "react";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";

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
      <main className="pt-12 px-5 bg-secondary w-full">{props.children}</main>
    </>
  );
};

export default Layout;
