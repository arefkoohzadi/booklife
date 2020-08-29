import React from "react";

const UniItem = ({ title, uni, timefrom, timeto }) => {
  return (
    <>
      <ul className="list-disc list-inside">
        <li className="text-gray-700 my-2 font-IRANSansMedium">{title}</li>
      </ul>
      <div className="flex items-center">
        <svg
          className="h-5 w-5 fill-current text-gray-700 ml-2 -mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z" />
        </svg>
        <span className="text-gray-700 my-1">{uni}</span>
      </div>
      <div className="flex items-center">
        <svg
          className="h-5 w-5 fill-current text-gray-700 ml-2 -mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z" />
        </svg>
        <span className="text-gray-700 my-2">
          از
          <span className="font-IRANSansFaNum"> {timefrom} </span>
          تا
          <span className="font-IRANSansFaNum"> {timeto}</span>
        </span>
      </div>
    </>
  );
};

export default UniItem;
