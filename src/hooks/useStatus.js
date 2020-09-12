import { useSelector } from "react-redux";

const useStatus = (bookId, userId) => {
  const books = useSelector((state) => state.book.books);
  const book = books.find((book) => book.id === bookId);

  if (book && !!book.status) {
    const userIds = Object.keys(book.status);
    const userIdStatus = userIds.find((id) => id === userId);
    if (!!userIdStatus) {
      return book.status[userIdStatus];
    }
  }
  return false;
};

export default useStatus;
