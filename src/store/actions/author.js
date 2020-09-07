import axios from "../../api/axios-books";
export const FETCH_AUTHORS = "FETCH_AUTHORS";
export const ADD_FOLLOWER = "ADD_FOLLOWER";
export const DELETE_FOLLOWER = "DELETE_FOLLOWER";

export const deleteFollower = (authorId, userId) => {
  return {
    type: DELETE_FOLLOWER,
    userId,
    authorId,
  };
};

export const addFollower = (authorId, userId) => {
  return {
    type: ADD_FOLLOWER,
    userId,
    authorId,
  };
};

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
