import React from "react";
import NavigationItems from "./NavigationItems";
import Logo from "./Logo";
import Backdop from "./common/Backdop";

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
      <Backdop show={props.open} clicked={props.closed} />
      <div className={classes}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
