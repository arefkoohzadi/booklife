import axios from "../../api/axios-books";

export const FETCH_BOOKS = "FETCH_BOOKS";

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
