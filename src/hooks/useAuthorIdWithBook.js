import { useSelector } from "react-redux";
const useAuthorIdWithBook = (book) => {
  const authors = useSelector((state) => state.author.authors);
  let author = null;
  if (!!book) {
    author = authors.find((au) => au.name === book.author);
  }
  return author ? author.id : null;
};

export default useAuthorIdWithBook;
