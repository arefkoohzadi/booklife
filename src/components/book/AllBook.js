import React, { useState } from "react";
import { paginate } from "../../utility/paginate";
import Card from "../common/Card";
import Pagination from "../common/Pagination";

const AllBook = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const paginateBooks = paginate(books, currentPage, pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {paginateBooks.map((book) => (
        <React.Fragment key={book.id}>
          <Card
            id={book.id}
            title={book.title}
            image={book.imageUrl}
            author={book.author}
          />
          <hr className="border-t border-gray-300 mt-1" />
        </React.Fragment>
      ))}
      <Pagination
        itemCount={books.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default AllBook;
