import React from "react";

const Input = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:shadow-outline-grey focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
      placeholder={props.placeholder}
    />
  );
};

export default Input;
