import axios from "../../api/axios-books";
export const FETCH_AUTHORS = "FETCH_AUTHORS";

export const fetchAuthors = () => {
  return async (dispatch) => {
    try {
      const authors = await axios.get("/authors.json");
      dispatch({
        type: FETCH_AUTHORS,
        authors: authors.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
