import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStatus } from "../../store/actions/book";
import httpRequest from "../../api/axios-books";

const DeleteBook = ({ bookId }) => {
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const url = `/books/${bookId}/status/${userId}.json?auth=${token}`;
  const handleDelete = async () => {
    try {
      await httpRequest.delete(url);
      dispatch(deleteStatus(bookId, userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <svg
      onClick={handleDelete}
      className="w-8 h-8 text-gray-600 hover:text-gray-700 hover:bg-blue-200 hover:bg-opacity-25 cursor-pointer rounded-full p-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default DeleteBook;
