import React, { useState } from "react";
import { truncate } from "../../utility/truncate";

const DescriptionTruncate = ({ description }) => {
  const [text, setText] = useState(
    description.length > 200 ? truncate(description, 200) : description
  );
  const [isMore, setIsMore] = useState(description.length > 200 ? true : false);

  const handleClick = () => {
    isMore ? setText(description) : setText(truncate(description, 200));
    setIsMore((prevState) => !prevState);
  };

  return (
    <>
      <p className="text-justify">
        {text}
        {isMore && <span>... </span>}
        {description.length > 200 && (
          <span
            onClick={handleClick}
            className="text-sm text-indigo-500 hover:text-indigo-600 cursor-pointer"
          >
            ({isMore ? "بیشتر" : "کمتر"})
          </span>
        )}
      </p>
    </>
  );
};

export default DescriptionTruncate;
