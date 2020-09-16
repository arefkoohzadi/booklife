import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Details from "../common/Details";
import BookTable from "./BookTable";
import { authCheckState } from "./../../store/actions/auth";
import NumberStatus from "./NumberStatus";

const MyBooks = (props) => {
  const isAuth = !!useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isAuth) {
      const token = localStorage.getItem("token");
      if (!token) {
        history.replace("/");
      } else {
        dispatch(authCheckState());
      }
    }
  }, [history, dispatch, isAuth]);

  return (
    <div className="mt-3">
      <Details title="کتاب‌های من" />
      <div className="flex">
        <div className="w-2/12 mt-5">
          <NumberStatus />
        </div>
        <div className="w-10/12 mt-2">
          <BookTable />
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
