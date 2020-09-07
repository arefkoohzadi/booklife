// import AUTHORS from "../../dummy-data/data/author";
import {
  FETCH_AUTHORS,
  ADD_FOLLOWER,
  DELETE_FOLLOWER,
} from "../actions/author";
const initialState = {
  authors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS:
      const authorsId = Object.keys(action.authors);
      const cloneAuthors = authorsId.map((authorId) => ({
        id: authorId,
        ...action.authors[authorId],
      }));
      return { ...state, authors: [...cloneAuthors] };
    case ADD_FOLLOWER:
      const author = state.authors.find(
        (author) => author.id === action.authorId
      );
      const updateFollowers = {
        ...author.followers,
        [action.userId]: action.userId,
      };
      const updateAuthor = { ...author, followers: updateFollowers };
      const authorIndex = state.authors.findIndex(
        (author) => author.id === action.authorId
      );
      const cloneAuthorsFollowers = [...state.authors];

      cloneAuthorsFollowers.splice(authorIndex, 1, updateAuthor);

      return { ...state, authors: [...cloneAuthorsFollowers] };
    case DELETE_FOLLOWER:
      const authorForDelete = state.authors.find(
        (author) => author.id === action.authorId
      );
      const followerForDelete = { ...authorForDelete.followers };
      delete followerForDelete[action.userId];
      const updateAuthorForDelete = {
        ...authorForDelete,
        followers: followerForDelete,
      };

      const authorIndexDelete = state.authors.findIndex(
        (author) => author.id === action.authorId
      );
      const cloneAuthorsFollowersDelete = [...state.authors];

      cloneAuthorsFollowersDelete.splice(
        authorIndexDelete,
        1,
        updateAuthorForDelete
      );
      return { ...state, authors: [...cloneAuthorsFollowersDelete] };
    default:
      return state;
  }
};
