import React from "react";

const Card = (props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
        <div
          className="relative z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0,100% calc(100% - 4vw) ,0 100% )",
          }}
        >
          <img
            className="w-full"
            src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg"
            alt="Profile image"
          />
          <div
            className="text-center absolute w-full"
            style={{ bottom: "4rem" }}
          >
            <p className="text-white tracking-wide uppercase text-lg font-bold">
              John Doe
            </p>
            <p className="text-gray-400 text-sm">@johndoe</p>
          </div>
        </div>
        <div className="relative flex flex-row justify-between items-center px-6 z-50 -mt-10">
          <button className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none appearance-none">
            <svg
              viewBox="0 0 20 20"
              enable-background="new 0 0 20 20"
              className="w-6 h-6"
            >
              <path
                fill="#FFFFFF"
                d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                        C15.952,9,16,9.447,16,10z"
              />
            </svg>
          </button>
        </div>
        <div className="pt-6 pb-8 text-gray-600 text-center">
          <p>Fullstack Developer </p>
          <p className="text-sm">Coding from Planet Earth</p>
        </div>

        <div className="pb-10 uppercase text-center tracking-wide flex justify-around">
          <div>
            <p className="text-gray-400 text-sm">Posts</p>
            <p className="text-lg font-semibold text-blue-300">76</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Followers</p>
            <p className="text-lg font-semibold text-blue-300">964</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Following</p>
            <p className="text-lg font-semibold text-blue-300">34</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
