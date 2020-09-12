import { useSelector } from "react-redux";

const useBestBook = (props) => {
  const books = useSelector((state) => state.book.books);
  let bestBookId = null;
  let maxNumber = 0;
  if (books) {
    books.forEach((book) => {
      if (!!book.status) {
        const lngStatus = Object.keys(book.status).length;
        if (lngStatus >= maxNumber) {
          maxNumber = lngStatus;
          bestBookId = book.id;
        }
      }
    });
  }

  return [maxNumber, bestBookId];
};

export default useBestBook;
