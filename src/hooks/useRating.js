import { useSelector } from "react-redux";

const useRating = (id, bookObject = null) => {
  const books = useSelector((state) => state.book.books);
  const userId = useSelector((state) => state.auth.userId);

  let bookId = id;
  if (id === null && bookObject !== null) {
    bookId = bookObject.id;
  }
  const book = books.find((book) => book.id === bookId);

  if (book && !!book.ratings) {
    const userIds = Object.keys(book.ratings);
    const userIdRating = userIds.find((id) => id === userId);
    if (!!userIdRating) {
      return book.ratings[userIdRating];
    }
  }
  return false;
};

export default useRating;
