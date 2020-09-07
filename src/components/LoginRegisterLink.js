import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginRegisterLink = (props) => {
  const isAuth = !!useSelector((state) => state.auth.token);

  return (
    <>
      <span className="hidden sm:block">
        {!isAuth ? (
          <>
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
          </>
        ) : (
          <NavLink
            activeStyle={{ color: "#e53e3e" }}
            className="font-IRANSansMedium text-teal-800 hover:text-teal-600 tracking-tighter"
            to="/logout"
          >
            خروج
          </NavLink>
        )}
      </span>
    </>
  );
};

export default LoginRegisterLink;
