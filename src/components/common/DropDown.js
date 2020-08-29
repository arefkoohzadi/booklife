import React, { useState } from "react";

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const selectHandler = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        type="submit"
        className="relative w-40 flex px-4 py-2 leading-normal text-sm bg-white border border-gray-300 transition ease-in duration-150 hover:border-gray-500 outline-none focus:outline-none focus:shadow-outline-blue focus:border-gray-600 rounded-lg text-gray-600 active:text-gray-500"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="chevron-down w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="font-IRANSans text-sm">
          {!!selectedItem ? selectedItem : "تغییر وضعیت"}
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 bg-white rounded-lg py-2 w-40 mt-1 shadow-md">
          <span
            onClick={() => selectHandler("می‌خواهم بخوانم")}
            className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            می‌خواهم بخوانم
          </span>
          <span
            onClick={() => selectHandler("در حال خواندن")}
            className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            در حال خواندن
          </span>
          <span
            onClick={() => selectHandler("خواندم")}
            className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            خواندم
          </span>
        </div>
      )}
    </div>
  );
};

export default DropDown;
