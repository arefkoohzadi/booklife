import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./common/Card";
import AppCarousel from "./common/AppCarousel";
import useReading from "../hooks/useReading";
import Details from "./common/Details";
import useBestAuthor from "../hooks/useBestAuthor";
import BestAuthor from "./Author/BestAuthor";
import useBestBook from "../hooks/useBestBook";
import BestBook from "./book/BestBook";
import { Link } from "react-router-dom";
import AllBook from "./book/AllBook";

const Home = (props) => {
  const books = useSelector((state) => state.book.books);

  const booksReading = useReading();
  const [maxNumber, bestAuthorId] = useBestAuthor();
  const [maxNumberOfReader, bestBookId] = useBestBook();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex w-full h-full">
      <div className="w-3/12 pt-4">
        <Details title="در حال خواندن" size="text-sm" />
        {booksReading.length > 0 ? (
          booksReading.map((book) => (
            <Card
              key={book.id}
              id={book.id}
              title={book.title}
              image={book.imageUrl}
              author={book.author}
            />
          ))
        ) : (
          <Link to="/login" className="hover:text-teal-600 animate-pulse">
            برای مشاهده‌ی کتاب‌های در حال خواندن لطفا وارد حساب کاربری خود شوید
          </Link>
        )}
      </div>
      <div className="w-6/12 pt-2 mx-2">
        <AppCarousel />
        <div className="mt-2">
          <Details title="همه‌ی کتاب‌ها" size="text-sm" />
        </div>
        <AllBook books={books} />
      </div>
      <div className="w-3/12 ">
        <div className="mt-4">
          <Details title="پرمخاطب‌ترین نویسنده" />
          <BestAuthor authorId={bestAuthorId} numberOfFollowers={maxNumber} />
        </div>
        <div className="mt-4">
          <Details title="پرمخاطب‌ترین کتاب" />
          <BestBook
            numberOfReader={maxNumberOfReader}
            bestBookId={bestBookId}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
