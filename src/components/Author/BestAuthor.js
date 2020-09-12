import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Followers from "./Followers";
import Follow from "../Follow";
import { truncate } from "../../utility/truncate";
const BestAuthor = ({ authorId, numberOfFollowers }) => {
  const history = useHistory();
  const authors = useSelector((state) => state.author.authors);
  const author = authors.find((au) => au.id === authorId);
  if (!author) return null;
  return (
    <div className="flex my-2">
      <img
        onClick={() => history.push("/author/" + author.id)}
        className="w-40 h-40 rounded-md cursor-pointer ml-2"
        src={author.imageUrl}
        alt=""
      />

      <div>
        <div>
          <Link
            to={"/author/" + author.id}
            className="font-IRANSansMedium border-b border-transparent text-gray-900 hover:text-green-500 hover:border-green-500 tracking-tighter mb-2"
          >
            {author.name}
          </Link>
        </div>
        <Followers numberOfFollowers={numberOfFollowers} title="دنبال‌کننده" />
        <div className="w-11/12">
          {author.description.length > 40
            ? truncate(author.description, 40) + "..."
            : author.description}
        </div>
        <div className="mt-2">
          <Follow authorId={author.id} />
        </div>
      </div>
    </div>
  );
};

export default BestAuthor;
