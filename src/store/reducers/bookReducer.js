import { FETCH_BOOKS } from "../actions/book";

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      const booksId = Object.keys(action.books);
      const cloneBooks = booksId.map((bookId) => ({
        id: bookId,
        ...action.books[bookId],
      }));
      return { ...state, books: [...cloneBooks] };

    default:
      return state;
  }
};
