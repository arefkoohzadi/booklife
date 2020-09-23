import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { range } from "../../utility/range";
import { updateRating } from "../../store/actions/book";
import useRating from "../../hooks/useRating";
import Alert from "../Alert";

const StarRating = ({ length = 5, bookId }) => {
  const [authRequire, setAuthRequire] = useState(null);
  const currentRating = useRating(bookId);
  const dispatch = useDispatch();
  const [ratingHover, setRatingHover] = useState(currentRating);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);

  const url = `/books/${bookId}/ratings/.json?auth=${token}`;

  const mouseLeaveHandler = () => {
    setRatingHover(currentRating);
  };
  const handleClose = () => {
    setAuthRequire(false);
  };
  const handlerClick = (num) => {
    if (!token) {
      setAuthRequire(true);
      return;
    }
    dispatch(updateRating(num, url, userId, bookId, currentRating));
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {range(length, 1).map((num) => (
          <svg
            onClick={() => handlerClick(num)}
            onMouseEnter={() => {
              setRatingHover(num);
            }}
            onMouseLeave={mouseLeaveHandler}
            key={num}
            className={`mx-1 w-4 h-4 fill-current ${
              num > currentRating && num > ratingHover
                ? "text-gray-400"
                : "text-orange-500 scale-110"
            } hover:text-orange-500 cursor-pointer transition ease-in duration-200 transform hover:scale-110`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
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
    </div>
  );
};

export default StarRating;
