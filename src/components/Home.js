import React from "react";
import { useSelector } from "react-redux";
import Card from "./common/Card";
import AppCarousel from "./common/AppCarousel";

const Home = (props) => {
  const books = useSelector((state) => state.book.books);
  return (
    <div className="flex w-full h-full">
      <div className="w-1/3">
        <h1 className="font-IRANSansMedium tracking-normal text-gray-900 text-sm mt-3">
          در حال خواندن
        </h1>
        {books.map((book) => (
          <Card
            key={book.id}
            id={book.id}
            title={book.title}
            image={book.imageUrl}
            author={book.author}
          />
        ))}
      </div>
      <div className="w-2/3 pt-2">
        <AppCarousel />
      </div>
    </div>
  );
};

export default Home;
