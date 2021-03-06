import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../common/DropDown";
import StarRating from "../common/StarRating";

const ListAutorBook = ({ book }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full sm:justify-between sm:items-center">
        <div className="my-2 py-2 px-2">
          <div className="flex">
            <Link to={"/book/" + book.id}>
              <img
                className="ml-2 h-auto rounded w-20"
                src={book.imageUrl}
                alt={book.title}
              />
            </Link>
            <div className="flex-1">
              <Link
                to={"/book/" + book.id}
                className="font-IRANSansBold inline-block text-gray-900 border-b border-transparent hover:text-green-500 hover:border-green-500 pb-1"
              >
                {book.title}
              </Link>

              <p className="mt-2">
                <span className="hidden md:inline">نویسنده: </span>
                <span className="text-gray-900 tracking-tighter">
                  {book.author}
                </span>
              </p>
              <div className="mt-4">
                <StarRating bookId={book.id} />
              </div>
              <div className="mt-4 sm:hidden">
                <DropDown bookId={book.id} />
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 py-2 px-2 hidden sm:flex">
          <DropDown bookId={book.id} />
        </div>
      </div>
      <hr className="border-t border-gray-400" />
    </>
  );
};

export default ListAutorBook;
