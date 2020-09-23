import React, { useContext } from "react";
import NavigationItems from "./NavigationItems";
import Logo from "./Logo";
import Backrdop from "./common/Backdrop";
import LoginRegisterLink from "./LoginRegisterLink";
import { ModalContext } from "../context/modalProvider";

const SideDrawer = (props) => {
  const open = useContext(ModalContext);
  let classes =
    "fixed p-2 top-0 right-0 w-2/3 h-full z-40 rounded-l-lg items-start bg-primary box-border";
  if (!open) {
    classes =
      classes + " transition transform translate-x-full ease-out duration-200";
  } else {
    classes =
      classes + " transition transform translate-x-0 ease-out duration-200";
  }
  return (
    <div className="sm:hidden">
      <Backrdop />
      <div className={classes}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
        <div className="mt-4">
          <LoginRegisterLink />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
