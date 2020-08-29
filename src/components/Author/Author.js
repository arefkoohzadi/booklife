import React from "react";
import { useSelector } from "react-redux";
import Details from "../common/Details";
import ListAutorBook from "./ListAutorBook";

const Author = (props) => {
  const authors = useSelector((state) => state.author.authors);
  const author = authors.find((au) => au.id === props.match.params.id);
  const books = useSelector((state) => state.book.books);
  const authorBooks = author
    ? books.filter((book) => book.author === author.name)
    : null;
  return (
    <>
      {author && (
        <div className="flex mt-2">
          <div className="w-3/12 flex-1 rounded-lg pt-2 px-8">
            <img
              className="w-48 h-48 rounded-lg mx-auto"
              src={author.imageUrl}
              alt={author.name}
            />
          </div>
          <div className="w-9/12 h-full px-8 pt-2">
            <Details title={author.name} />
            <div>
              <span className="block text-gray-700 my-2 text-justify">
                {author.description}
              </span>
            </div>
            <div className="mt-5">
              <Details title={`کتاب‌های ${author.name}`} size="text-base" />
            </div>
            <div>
              {authorBooks.map((book) => (
                <ListAutorBook key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Author;
