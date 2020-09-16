import React from "react";
import { useSelector } from "react-redux";
import NavigationItem from "./NavigationItem";

const NavigationItems = (props) => {
  const isAuth = !!useSelector((state) => state.auth.token);
  return (
    <ul className="sm:flex h-full items-center">
      <NavigationItem link="/">خانه</NavigationItem>
      {isAuth && <NavigationItem link="/my-books">کتاب‌های من</NavigationItem>}
      <NavigationItem link="/cv">درباره‌ی ما</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
