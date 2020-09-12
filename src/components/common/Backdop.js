import React from "react";

const Backdop = ({ show, clicked }) => {
  return show ? (
    <div
      onClick={clicked}
      className="h-full w-full z-30 bg-gray-500 bg-opacity-50 fixed top-0 right-0"
    ></div>
  ) : null;
};

export default Backdop;
