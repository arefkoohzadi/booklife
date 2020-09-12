import { useSelector } from "react-redux";
const useReading = (props) => {
  const books = useSelector((state) => state.book.books);
  const userId = useSelector((state) => state.auth.userId);
  if (!!books) {
    const booksReading = books.filter((book) => {
      if (!!book.status) {
        const statusArray = Object.keys(book.status);
        const userStatusId = statusArray.find((uid) => uid === userId);
        if (!userStatusId) return false;
        if (book.status[userStatusId] === "در حال خواندن") return true;
      }
      return false;
    });
    return booksReading;
  }
};

export default useReading;
