import React from "react";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";
import DrawerToggle from "./DrawerToggle";

const Toolbar = (props) => {
  return (
    <header className="justify-between w-full h-12 px-5 flex flex-row-reverse sm:flex-row items-center fixed top-0 right-0 bg-primary border-b-2 border-gray-300 border-opacity-25 shadow-sm">
      <Logo />
      <nav className="h-full hidden sm:flex">
        <NavigationItems />
      </nav>
      <DrawerToggle clicked={props.sideDrawerToggle} />
    </header>
  );
};

export default Toolbar;
