import { FETCH_BOOKS, ADD_STATUS, DELETE_STATUS } from "../actions/book";

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
    case ADD_STATUS:
      const book = state.books.find((book) => book.id === action.bookId);
      const updateStatus = {
        ...book.status,
        [action.userId]: action.item,
      };
      const updateBook = { ...book, status: updateStatus };
      const bookIndex = state.books.findIndex(
        (book) => book.id === action.bookId
      );
      const cloneBooksStatus = [...state.books];

      cloneBooksStatus.splice(bookIndex, 1, updateBook);

      return { ...state, books: [...cloneBooksStatus] };
    case DELETE_STATUS:
      const bookForDelete = state.books.find(
        (book) => book.id === action.bookId
      );
      const statusForDelete = { ...bookForDelete.status };
      delete statusForDelete[action.userId];
      const updateBookForDelete = {
        ...bookForDelete,
        status: statusForDelete,
      };

      const bookIndexDelete = state.books.findIndex(
        (book) => book.id === action.bookId
      );
      const cloneBooksStatusDelete = [...state.books];

      cloneBooksStatusDelete.splice(bookIndexDelete, 1, updateBookForDelete);
      return { ...state, books: [...cloneBooksStatusDelete] };
    default:
      return state;
  }
};
