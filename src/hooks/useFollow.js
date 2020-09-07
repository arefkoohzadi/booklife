import { useSelector } from "react-redux";

const useFollow = (authorId, userId) => {
  const authors = useSelector((state) => state.author.authors);
  const author = authors.find((author) => author.id === authorId);

  if (!!author.followers) {
    const userIds = Object.keys(author.followers);
    return userIds.some((id) => id === userId);
  }
  return false;
};

export default useFollow;
