import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./common/Button";
import httpRequest from "../api/axios-books";
import { addFollower, deleteFollower } from "../store/actions/author";
import useFollow from "../hooks/useFollow";

const Follow = ({ authorId }) => {
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const authors = useSelector((state) => state.author.authors);
  const dispatch = useDispatch();
  const isFollow = useFollow(authorId, userId);

  const handleFollow = () => {
    const author = authors.find((author) => author.id === authorId);
    let url = null;
    if (!isFollow) {
      url = `/authors/${authorId}/.json?auth=${token}`;
      const data = {
        followers: { ...author.followers, [userId]: userId },
      };

      httpRequest
        .patch(url, data)
        .then((res) => {
          dispatch(addFollower(authorId, userId));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      url = `/authors/${authorId}/followers/${userId}.json?auth=${token}`;
      httpRequest
        .delete(url)
        .then((res) => {
          dispatch(deleteFollower(authorId, userId));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Button onClick={handleFollow}>
        {isFollow ? "لغو دنبال کردن" : "دنبال کردن"}
      </Button>
    </div>
  );
};

export default Follow;
