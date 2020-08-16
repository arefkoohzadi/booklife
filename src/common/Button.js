import React from "react";

const Button = (props) => {
  return (
    <button className="font-BYekan px-4 py-2 mx-3 leading-normal text-sm  bg-white border border-gray-300 transition ease-in duration-150 hover:border-gray-500 outline-none focus:outline-none focus:shadow-outline-grey focus:border-gray-600 rounded-lg text-gray-600 active:text-gray-500">
      {props.children}
    </button>
  );
};

export default Button;
