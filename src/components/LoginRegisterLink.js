import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModalSetStateContext } from "../context/modalProvider";

const LoginRegisterLink = (props) => {
  const backdrop = useContext(ModalSetStateContext);
  const isAuth = !!useSelector((state) => state.auth.token);

  return (
    <>
      <span>
        {!isAuth ? (
          <>
            <span className="text-teal-800 hover:text-teal-600">
              <NavLink
                onClick={backdrop ? () => backdrop(false) : undefined}
                activeClassName="text-red-600"
                to="/login"
              >
                ورود
              </NavLink>
            </span>{" "}
            |{" "}
            <span className="text-teal-800 hover:text-teal-600">
              <NavLink
                onClick={backdrop ? () => backdrop(false) : undefined}
                activeClassName="text-red-600"
                className="tracking-tighter"
                to="/register"
              >
                ثبت نام
              </NavLink>
            </span>
          </>
        ) : (
          <NavLink
            onClick={backdrop ? () => backdrop(false) : undefined}
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
