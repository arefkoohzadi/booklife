// import AUTHORS from "../../dummy-data/data/author";
import { FETCH_AUTHORS } from "../actions/author";
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

    default:
      return state;
  }
};
