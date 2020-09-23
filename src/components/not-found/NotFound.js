import React from "react";

const NotFound = (props) => {
  return (
    <div className="w-full h-screen flex flex-col sm:flex-row justify-center items-center">
      <h1 className="font-IRANSansMedium text-teal-700 text-xl sm:text-3xl">
        صفحه مورد نظر یافت نشد!
      </h1>
      <svg
        className="w-32 h-32 sm:w-64 sm:h-64 text-yellow-400 mr-1 order-first sm:order-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    </div>
  );
};

export default NotFound;
