import httpRequest from "../../api/axios-books";

export const FETCH_BOOKS = "FETCH_BOOKS";
export const ADD_STATUS = "ADD_STATUS";
export const DELETE_STATUS = "DELETE_STATUS";
export const UPDATE_RATING = "UPDATE_RATING";

export const updateRating = (num, url, userId, bookId, currentRating) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_RATING,
        rating: num,
        bookId,
        userId,
      });
      const data = { [userId]: num };
      await httpRequest.patch(url, data);
    } catch (err) {
      dispatch({
        type: UPDATE_RATING,
        rating: currentRating,
        bookId,
        userId,
      });
    }
  };
};

export const deleteStatus = (bookId, userId) => {
  console.log("hellllooooo");
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
      const books = await httpRequest.get("/books.json");
      dispatch({
        type: FETCH_BOOKS,
        books: books.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
