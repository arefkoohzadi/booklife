import React from "react";
import useUserBooks from "../../hooks/useUserBooks";

const NumberStatus = (props) => {
  const [myBooks, userId] = useUserBooks();
  const allMyBooks = myBooks.length;
  let currentReading = 0;
  let read = 0;
  let willRead = 0;

  myBooks.forEach((book) => {
    const userIds = Object.keys(book.status);
    const status = userIds.find((id) => id === userId);
    if (book.status[status] === "در حال خواندن") {
      currentReading++;
    } else if (book.status[status] === "می‌خواهم بخوانم") {
      willRead++;
    } else if (book.status[status] === "خواندم") {
      read++;
    }
  });

  return (
    <>
      <h1 className="font-IRANSansMedium text-gray-800 text-lg">قفسه کتاب</h1>
      <div className="flex md:flex-col">
        <div className="ml-3 md:ml-0">
          <h2 className="text-gray-700">
            همه{" "}
            <span className="font-IRANSansFaNum text-gray-700">
              ({allMyBooks})
            </span>
          </h2>
          <h2 className="text-gray-700">
            خوانده{" "}
            <span className="font-IRANSansFaNum text-gray-700">({read})</span>
          </h2>
        </div>
        <div>
          <h2 className="text-gray-700">
            در حال خواندن{" "}
            <span className="font-IRANSansFaNum text-gray-700">
              ({currentReading})
            </span>
          </h2>
          <h2 className="text-gray-700">
            در لیست خواندن{" "}
            <span className="font-IRANSansFaNum text-gray-700">
              ({willRead})
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default NumberStatus;
