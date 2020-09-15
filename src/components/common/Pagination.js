import React from "react";
import { range } from "../../utility/range";

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;
  const pages = range(pageCount, 1);
  return (
    <div className="py-2 flex justify-center">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            <span
              className={`first:mr-0 ${
                currentPage === 1
                  ? "text-teal-200 border-teal-200 cursor-not-allowed"
                  : "text-teal-500 border-teal-500"
              }  text-xs font-semibold bg-white font-IRANSansFaNum flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid cursor-pointer`}
              onClick={
                currentPage !== 1
                  ? () => onPageChange(currentPage - 1)
                  : undefined
              }
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <span
                className={`first:mr-0 text-xs ${
                  page === currentPage
                    ? "bg-teal-500 text-white"
                    : "text-teal-500 bg-white"
                } font-semibold font-IRANSansFaNum flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 cursor-pointer`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </span>
            </li>
          ))}
          <li>
            <span
              className={`first:mr-0 ${
                currentPage === pageCount
                  ? "text-teal-200 border-teal-200 cursor-not-allowed"
                  : "text-teal-500 border-teal-500"
              } bg-white text-xs font-semibold font-IRANSansFaNum flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid cursor-pointer`}
              onClick={
                currentPage !== pageCount
                  ? () => onPageChange(currentPage + 1)
                  : undefined
              }
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
