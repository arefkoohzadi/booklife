import React from "react";
import Button from "./common/Button";
import Card from "./common/Card";

const App = (props) => {
  return (
    <>
      <div className="flex h-40 w-full bg-gray-400 hover:bg-gray-200 transition duration-200 ease-in">
        <h1 className="font-IRANSans  mr-3">زندگی کتاب</h1>
        <h1 className="font-IRANSansMedium  mr-3">زندگی کتاب</h1>
        <h1 className="font-IRANSansBold text-lg font-bold leading-6 mr-3">
          برنامه‌های رمزگشا برای
        </h1>
        <h1 className="font-IRANSansFaNum  mr-3">123456789</h1>
        <h1 className="font-IRANSansFaNumMedium  mr-3">123456789</h1>
      </div>
      <div className="flex">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex flex-row">
        <div className="mt-5">
          <Button>ورود</Button>
        </div>
      </div>
    </>
  );
};

export default App;
