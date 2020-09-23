import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalSetStateContext } from "../context/modalProvider";

const Logo = (props) => {
  const backdrop = useContext(ModalSetStateContext);
  return (
    <Link
      onClick={backdrop ? () => backdrop(false) : undefined}
      to="/"
      className="flex items-center ml-0 sm:ml-3 sm:h-full group cursor-pointer my-auto"
    >
      <svg
        className="h-10 w-10 ml-1 fill-current text-teal-800 transition ease-in duration-300 group-hover:text-teal-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z" />
      </svg>
      <p className="font-IRANSansMedium select-none text-lg tracking-tighter text-teal-800 transition ease-in duration-300 group-hover:text-teal-600">
        کتاب خوان
      </p>
    </Link>
  );
};

export default Logo;
