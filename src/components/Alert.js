import React from "react";
import { Link } from "react-router-dom";

const Alert = ({
  close,
  okTitle,
  okLink,
  cancelTitle,
  subject,
  description,
}) => {
  return (
    <>
      <div
        onClick={close}
        className="flex z-30 items-center justify-center fixed right-0 top-0 w-full h-full bg-gray-500 bg-opacity-75"
      >
        <div className="w-2/3 sm:w-1/2 lg:w-4/12 flex flex-row">
          <div className="flex w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-center items-center w-12 bg-yellow-500">
              <svg
                className="h-6 w-6 fill-current text-white"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
              </svg>
            </div>

            <div className="-mx-3 py-2 px-4">
              <div className="mx-3">
                <span className="text-yellow-500 font-semibold">{subject}</span>
                <p className="text-gray-600 text-sm mt-3">{description}</p>
                <div className="mt-4 mb-2">
                  {!!okLink ? (
                    <>
                      <Link
                        to={`${okLink}`}
                        className="ml-3 px-3 py-1 leading-normal font-semibold text-sm bg-white border border-gray-300 transition ease-in duration-150 hover:border-blue-500 cursor-pointer outline-none focus:outline-none focus:shadow-outline-blue focus:border-blue-600 rounded-lg text-blue-600 active:text-blue-500"
                      >
                        {okTitle}
                      </Link>
                      <span
                        onClick={close}
                        className="px-3 py-1 leading-normal font-semibold text-sm bg-white border border-gray-300 transition ease-in duration-150 hover:border-red-500 cursor-pointer outline-none focus:outline-none focus:shadow-outline-blue focus:border-red-600 rounded-lg text-red-600 active:text-red-500"
                      >
                        {cancelTitle}
                      </span>
                    </>
                  ) : (
                    <span className="px-3 py-1 leading-normal font-semibold text-sm bg-white border border-gray-300 transition ease-in duration-150 hover:border-blue-500 cursor-pointer outline-none focus:outline-none focus:shadow-outline-blue focus:border-blue-600 rounded-lg text-blue-600 active:text-blue-500">
                      {okTitle}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
