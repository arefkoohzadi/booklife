import React from "react";
import NavigationItems from "./NavigationItems";
import Logo from "./Logo";
import Backrdop from "./common/Backdrop";
import LoginRegisterLink from "./LoginRegisterLink";

const SideDrawer = (props) => {
  let classes =
    "fixed p-2 top-0 right-0 w-2/3 h-full z-40 rounded-l-lg items-start bg-primary box-border";
  if (!props.open) {
    classes =
      classes + " transition transform translate-x-full ease-out duration-200";
  } else {
    classes =
      classes + " transition transform translate-x-0 ease-out duration-200";
  }
  return (
    <div className="sm:hidden">
      <Backrdop show={props.open} clicked={props.closed} />
      <div className={classes}>
        <Logo backdrop={props.closed} />
        <nav>
          <NavigationItems backdrop={props.closed} />
        </nav>
        <div className="mt-4">
          <LoginRegisterLink backdrop={props.closed} />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
