import React from "react";

const Followers = ({ numberOfFollowers, title }) => {
  if (!numberOfFollowers) return null;
  return (
    <span className="font-IRANSansMedium">
      <span className="font-IRANSansFaNumMedium">{numberOfFollowers}</span>{" "}
      {title}
    </span>
  );
};

export default Followers;
