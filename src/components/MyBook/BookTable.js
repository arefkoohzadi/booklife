import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useUserBooks from "../../hooks/useUserBooks";
import DropDown from "../common/DropDown";
import DeleteBook from "./DeleteBook";

const BookTable = (props) => {
  const authors = useSelector((state) => state.author.authors);

  const [myBooks] = useUserBooks();

  const getAuthorId = (book) => {
    let author = authors.find((au) => au.name === book.author);
    return author ? author.id : null;
  };

  return (
    <div className="container mx-auto sm:px-8">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal table-fixed">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 w-16 border-gray-200 bg-gray-100 text-right text-xs font-semibold font-IRANSans text-gray-600 uppercase tracking-wider">
                  تصویر
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold font-IRANSans text-gray-600 uppercase tracking-wider">
                  عنوان
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold font-IRANSans text-gray-600 uppercase tracking-wider">
                  نویسنده
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold font-IRANSans text-gray-600 uppercase tracking-wider">
                  وضعیت
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold font-IRANSans text-gray-600 uppercase tracking-wider">
                  حذف
                </th>
              </tr>
            </thead>
            <tbody>
              {myBooks.map((book) => (
                <tr
                  key={book.id}
                  className="odd:bg-white even:bg-gray-100 hover:bg-gray-100"
                >
                  <td className="px-5 py-5 border-b w-16 border-gray-200 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={book.imageUrl}
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <Link
                      to={`/book/${book.id}`}
                      className="text-gray-900 border-b border-transparent whitespace-no-wrap hover:border-gray-900"
                    >
                      {book.title}
                    </Link>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <Link
                      to={`/author/${getAuthorId(book)}`}
                      className="text-gray-900 border-b border-transparent whitespace-no-wrap hover:border-gray-900"
                    >
                      {book.author}
                    </Link>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <DropDown bookId={book.id} />
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <DeleteBook bookId={book.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
