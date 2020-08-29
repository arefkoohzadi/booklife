import React from "react";

const SubDetails = ({ subject, details }) => {
  return (
    <div className="my-3">
      <span className="font-IRANSansMedium text-lg text-gray-600">
        {subject}:
      </span>{" "}
      <span className="text-gray-700">{details}</span>
    </div>
  );
};

export default SubDetails;
