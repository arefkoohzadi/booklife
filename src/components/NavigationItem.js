import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className="my-3 sm:m-0">
      <NavLink
        exact
        className="py-2 px-1 sm:px-5 border-b-4 border-transparent transition ease-in duration-300 sm:hover:border-teal-600 font-IRANSansMedium text-teal-800 hover:text-teal-600 tracking-tighter select-none"
        activeStyle={{ borderColor: "#319795" }}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
