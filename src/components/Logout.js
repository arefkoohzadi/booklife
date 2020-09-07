import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogout } from "../store/actions/auth";

const Logout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authLogout());
  }, [dispatch]);

  return <Redirect to="/" />;
};

export default Logout;
