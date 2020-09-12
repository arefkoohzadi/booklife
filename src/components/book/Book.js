import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropDown from "../common/DropDown";
import Details from "../common/Details";
import DescriptionTruncate from "./DescriptionTruncate";
import Follow from "../Follow";

const Book = (props) => {
  const books = useSelector((state) => state.book.books);
  const book = books.find((book) => book.id === props.match.params.id);
  const authors = useSelector((state) => state.author.authors);
  const authorPreson = authors.find((ath) => ath.name === book.author);
  return (
    <div className="md:flex pt-4">
      <div className="flex w-full lg:w-9/12 md:w-7/12">
        <div className="w-full my-2 py-2 pl-2">
          {book && (
            <div className="flex">
              <img
                className="ml-2 h-48 rounded w-32"
                src={book.imageUrl}
                alt={book.title}
              />
              <div className="flex-1">
                <span className="font-IRANSansBold inline-block text-gray-900 pb-1">
                  {book.title}
                </span>

                <p className="mt-2">
                  نویسنده:{" "}
                  {authorPreson && (
                    <Link
                      to={"/author/" + authorPreson.id}
                      className="border-b border-transparent text-gray-900 hover:text-green-500 hover:border-green-500 tracking-tighter"
                    >
                      {book.author}
                    </Link>
                  )}
                </p>
                <div className="my-2">
                  <DropDown bookId={book.id} />
                </div>
                <span className="font-IRANSansFaNum text-sm ml-4">
                  {book.pages} صفحه
                </span>
                <span className="text-sm">انتشارات: {book.publisher}</span>
                <div className="w-full lg:w-1/3 md:w-2/3">
                  <DescriptionTruncate
                    description={book.description}
                    number={80}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full lg:w-3/12 md:w-5/12">
        {authorPreson && (
          <div>
            <Details
              title={
                <Link
                  to={"/author/" + authorPreson.id}
                  className=" hover:text-green-500 tracking-tighter"
                >
                  درباره‌ی {book.author}
                </Link>
              }
            />
            <div className="flex mb-2 md:mb-0 mt-2 w-full items-center">
              <img
                className="w-20 h-20 rounded-full ml-3"
                src={authorPreson.imageUrl}
                alt={authorPreson.name}
              />
              <div>
                <p className="mb-1">{authorPreson.name}</p>
                <Follow authorId={authorPreson.id} />
              </div>
            </div>
            <DescriptionTruncate
              description={authorPreson.description}
              number={200}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
