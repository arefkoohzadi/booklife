import { useSelector } from "react-redux";

const useBestAuthor = (props) => {
  const authors = useSelector((state) => state.author.authors);
  let bestAuthorId = null;
  let maxNumber = 0;
  if (authors) {
    authors.forEach((author) => {
      if (!!author.followers) {
        const lngFollower = Object.keys(author.followers).length;
        if (lngFollower >= maxNumber) {
          maxNumber = lngFollower;
          bestAuthorId = author.id;
        }
      }
    });
  }
  return [maxNumber, bestAuthorId];
};

export default useBestAuthor;
