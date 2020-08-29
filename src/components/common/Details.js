import React from "react";

const Details = ({ title, size = "text-xl" }) => {
  return (
    <div>
      <h1 className={`font-IRANSansMedium ${size} text-gray-600`}>{title}</h1>
      <hr className="border-t border-gray-400 mt-1" />
    </div>
  );
};

export default Details;
