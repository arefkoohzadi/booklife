import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Details from "../common/Details";
import ListAutorBook from "./ListAutorBook";
import Follow from "../Follow";
import Followers from "./Followers";
import { Helmet } from "react-helmet";

const Author = (props) => {
  const authors = useSelector((state) => state.author.authors);
  const author = authors.find((au) => au.id === props.match.params.id);
  const books = useSelector((state) => state.book.books);
  const authorBooks = author
    ? books.filter((book) => book.author === author.name)
    : null;
  const numberOfFollowers =
    author && author.followers ? Object.keys(author.followers).length : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {author && (
        <>
          <Helmet>
            <title>نویسنده | {author.name}</title>
          </Helmet>
          <div className="sm:flex mt-2">
            <div className="w-full sm:w-3/12 flex-1 rounded-lg pt-2 px-8 sm:px-1 lg:px-8">
              <img
                className="w-48 h-48 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg mx-auto"
                src={author.imageUrl}
                alt={author.name}
              />
              <div className="w-full flex justify-center mt-2">
                <Follow authorId={author.id} />
              </div>
              <div className="w-full flex justify-center mt-2">
                <Followers
                  numberOfFollowers={numberOfFollowers}
                  title="دنبال‌کننده"
                />
              </div>
            </div>
            <div className="w-full sm:w-9/12 h-full px-8 pt-2">
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
        </>
      )}
    </>
  );
};

export default Author;
