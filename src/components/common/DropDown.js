import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import httpRequest from "../../api/axios-books";
import { addStatus } from "../../store/actions/book";
import useStatus from "../../hooks/useStatus";
import Alert from "../Alert";

const DropDown = ({ bookId }) => {
  const [authRequire, setAuthRequire] = useState(null);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const books = useSelector((state) => state.book.books);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const status = useStatus(bookId, userId);

  const handleClose = () => {
    setAuthRequire(false);
  };

  const selectHandler = (item) => {
    if (!token) {
      setAuthRequire(true);
      return;
    }
    const book = books.find((book) => book.id === bookId);
    const url = `/books/${bookId}/.json?auth=${token}`;
    const data = {
      status: { ...book.status, [userId]: item },
    };

    httpRequest
      .patch(url, data)
      .then((res) => {
        dispatch(addStatus(bookId, userId, item));
      })
      .catch((err) => {
        console.log(err);
      });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        type="submit"
        className="relative w-40 flex px-4 py-2 leading-normal text-sm bg-white border border-gray-300 transition ease-in duration-150 hover:border-gray-500 outline-none focus:outline-none focus:shadow-outline-blue focus:border-gray-600 rounded-lg text-gray-600 active:text-gray-500"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="chevron-down w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="font-IRANSans text-sm">
          {!!status ? status : "تغییر وضعیت"}
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 bg-white rounded-lg py-2 w-40 mt-1 shadow-md">
          <span
            onClick={() => selectHandler("می‌خواهم بخوانم")}
            className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            می‌خواهم بخوانم
          </span>
          <span
            onClick={() => selectHandler("در حال خواندن")}
            className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            در حال خواندن
          </span>
          <span
            onClick={() => selectHandler("خواندم")}
            className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            خواندم
          </span>
        </div>
      )}
      {!!authRequire && (
        <Alert
          cancelTitle="انصراف"
          okTitle="ورود"
          okLink="/login"
          subject="وارد حسابتان شوید"
          description="برای فعالیت در سایت باید وارد حساب کاربری خود بشوید!"
          close={handleClose}
        />
      )}
    </div>
  );
};

export default DropDown;
