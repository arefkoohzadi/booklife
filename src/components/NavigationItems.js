import React from "react";
import { useSelector } from "react-redux";
import NavigationItem from "./NavigationItem";

const NavigationItems = (props) => {
  const isAuth = !!useSelector((state) => state.auth.token);
  return (
    <ul className="sm:flex h-full items-center">
      <NavigationItem backdrop={props.backdrop} link="/">
        خانه
      </NavigationItem>
      {isAuth && (
        <NavigationItem backdrop={props.backdrop} link="/my-books">
          کتاب‌های من
        </NavigationItem>
      )}
      <NavigationItem backdrop={props.backdrop} link="/cv">
        درباره‌ی ما
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
