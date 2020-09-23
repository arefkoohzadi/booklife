import React, { useContext } from "react";
import {
  ModalContext,
  ModalSetStateContext,
} from "../../context/modalProvider";

const Backdrop = (props) => {
  const show = useContext(ModalContext);
  const clicked = useContext(ModalSetStateContext);
  return show ? (
    <div
      onClick={() => clicked(false)}
      className="h-full w-full z-30 bg-gray-500 bg-opacity-50 fixed top-0 right-0"
    ></div>
  ) : null;
};

export default Backdrop;
