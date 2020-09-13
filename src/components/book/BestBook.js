import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useAuthorIdWithBook from "../../hooks/useAuthorIdWithBook";
import Followers from "../Author/Followers";
import DropDown from "../common/DropDown";
const BestBook = ({ numberOfReader, bestBookId }) => {
  const history = useHistory();
  const books = useSelector((state) => state.book.books);
  const book = books.find((book) => book.id === bestBookId);
  const authorId = useAuthorIdWithBook(book);
  if (!book) return null;
  return (
    <div className="flex mt-2">
      <img
        className="w-40 h-40 ml-2 cursor-pointer rounded-lg"
        src={book.imageUrl}
        onClick={() => history.push("/book/" + book.id)}
        alt=""
      />
      <div>
        <Link
          to={"/book/" + book.id}
          className="font-IRANSansMedium border-b border-transparent text-gray-900 hover:text-green-500 hover:border-green-500 tracking-tighter mb-2"
        >
          {book.title}
        </Link>
        {authorId && (
          <p>
            نویسنده:{" "}
            <Link
              className="border-b border-transparent text-gray-900 hover:text-green-500 hover:border-green-500 tracking-tighter"
              to={`/author/${authorId}`}
            >
              {book.author}
            </Link>
          </p>
        )}
        <Followers numberOfFollowers={numberOfReader} title="خواننده" />
        <div className="mt-2">
          <DropDown bookId={book.id} />
        </div>
      </div>
    </div>
  );
};

export default BestBook;
