import React from "react";

const Backdop = (props) => {
  return props.show ? (
    <div
      onClick={props.clicked}
      className="h-full w-full z-30 bg-gray-500 bg-opacity-50 fixed top-0 right-0"
    ></div>
  ) : null;
};

export default Backdop;
