import React from "react";

const DrawerToggle = (props) => {
  return (
    <svg
      onClick={props.clicked}
      className="h-6 w-6 fill-current text-teal-800 sm:hidden cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
};

export default DrawerToggle;
