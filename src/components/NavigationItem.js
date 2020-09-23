import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModalSetStateContext } from "../context/modalProvider";

const NavigationItem = (props) => {
  const backdrop = useContext(ModalSetStateContext);
  return (
    <li className="my-3 sm:m-0">
      <span className="text-teal-800 hover:text-teal-600">
        <NavLink
          onClick={backdrop ? () => backdrop(false) : undefined}
          exact
          className="py-2 px-1 sm:px-5 border-b-4 border-transparent transition ease-in duration-300 sm:hover:border-teal-600 font-IRANSansMedium tracking-tighter select-none"
          activeClassName="sm:border-teal-600 text-red-600 sm:text-teal-800"
          to={props.link}
        >
          {props.children}
        </NavLink>
      </span>
    </li>
  );
};

export default NavigationItem;
