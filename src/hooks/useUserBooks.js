import { useSelector } from "react-redux";

const useUserBooks = () => {
  const books = useSelector((state) => state.book.books);
  const userId = useSelector((state) => state.auth.userId);

  const myBooks = books.filter((book) => {
    if (!!book.status) {
      const userIds = Object.keys(book.status);
      return userIds.some((id) => id === userId);
    }
    return false;
  });

  return [myBooks, userId];
};

export default useUserBooks;
