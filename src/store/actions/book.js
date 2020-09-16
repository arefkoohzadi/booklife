import axios from "../../api/axios-books";

export const FETCH_BOOKS = "FETCH_BOOKS";
export const ADD_STATUS = "ADD_STATUS";
export const DELETE_STATUS = "DELETE_STATUS";

export const deleteStatus = (bookId, userId) => {
  return {
    type: DELETE_STATUS,
    bookId,
    userId,
  };
};

export const addStatus = (bookId, userId, item) => {
  return {
    type: ADD_STATUS,
    bookId,
    userId,
    item,
  };
};

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const books = await axios.get("/books.json");
      dispatch({
        type: FETCH_BOOKS,
        books: books.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
