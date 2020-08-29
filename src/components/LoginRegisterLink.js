import React from "react";
import { NavLink } from "react-router-dom";

const LoginRegisterLink = (props) => {
  return (
    <>
      <span className="hidden sm:block">
        <NavLink
          className="text-teal-800 hover:text-teal-600"
          activeStyle={{ color: "#e53e3e" }}
          to="/login"
        >
          ورود
        </NavLink>{" "}
        |{" "}
        <NavLink
          activeStyle={{ color: "#e53e3e" }}
          className="text-teal-800 hover:text-teal-600 tracking-tighter"
          to="/register"
        >
          ثبت نام
        </NavLink>
      </span>
    </>
  );
};

export default LoginRegisterLink;
