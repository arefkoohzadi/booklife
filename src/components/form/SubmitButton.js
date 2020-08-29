import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, children }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <div className="mt-4">
      <button
        onClick={handleSubmit}
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline active:bg-indigo-700 transition duration-150 ease-in-out"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {children}
        </span>
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
