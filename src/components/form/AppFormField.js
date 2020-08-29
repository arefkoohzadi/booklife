import React from "react";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...rest }) => {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <React.Fragment>
      <input
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:shadow-outline-grey focus:border-blue-300 sm:text-sm sm:leading-5"
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      {touched[name] && errors[name] && (
        <div className="-mb-5 flex items-center justify-between">
          <div className="text-sm leading-5">
            <p className="font-medium text-red-600 select-none">
              {errors[name]}
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AppFormField;
