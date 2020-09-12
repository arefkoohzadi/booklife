import React from "react";
import { range } from "../../utility/range";

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = range(pageCount, 1);
  return (
    <div className="py-2 flex justify-center">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
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
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
