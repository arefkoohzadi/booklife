import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className="sm:flex h-full items-center">
      <NavigationItem link="/">خانه</NavigationItem>
      <NavigationItem link="/my-books">کتاب‌های من</NavigationItem>
      <NavigationItem link="/search">جستجو در...</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
