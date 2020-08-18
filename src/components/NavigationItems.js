import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className="sm:flex h-full items-center">
      <NavigationItem link="#">خانه</NavigationItem>
      <NavigationItem link="#">کتاب های من</NavigationItem>
      <NavigationItem link="#">جستجو در...</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
