import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { truncate } from "../../utility/truncate";

const Card = ({ title, image, author, id }) => {
  const authors = useSelector((state) => state.author.authors);
  const authorPreson = authors.find((ath) => ath.name === author);
  return (
    <div className="w-full my-2 py-2 pl-2">
      <div className="flex">
        <Link to={"/book/" + id}>
          <img className="ml-2 h-auto rounded w-32" src={image} alt={title} />
        </Link>
        <div className="flex-1">
          <Link
            to={"/book/" + id}
            className="font-IRANSansBold inline-block border-b-2 border-transparent text-gray-900 hover:text-green-500 hover:border-green-500 pb-1"
          >
            {title.length > 40 ? truncate(title, 40) + "..." : title}
          </Link>

          <p className="mt-2">
            نویسنده:{" "}
            {authorPreson && (
              <Link
                className="border-b border-transparent text-gray-900 hover:text-green-500 hover:border-green-500 tracking-tighter"
                to={`/author/${authorPreson.id}`}
              >
                {author}
              </Link>
            )}
          </p>
          <div className="mt-2">
            <DropDown bookId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
