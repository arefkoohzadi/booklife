import React, { useState } from "react";
import { truncate } from "../../utility/truncate";

const DescriptionTruncate = ({ description, number }) => {
  const [text, setText] = useState(
    description.length > number ? truncate(description, number) : description
  );
  const [isMore, setIsMore] = useState(
    description.length > number ? true : false
  );

  const handleClick = () => {
    isMore ? setText(description) : setText(truncate(description, number));
    setIsMore((prevState) => !prevState);
  };

  return (
    <>
      <p className="text-justify">
        {text}
        {isMore && <span>... </span>}
        {description.length > number && (
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
