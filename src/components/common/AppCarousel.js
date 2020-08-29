import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Cover from "../../assets/images/cover.gif";

const AppCarousel = (props) => {
  return (
    <div className="mx-auto w-4/5 rounded-lg overflow-hidden">
      <Carousel
        rtl
        keepDirectionWhenDragging
        infinite
        autoPlay={5000}
        animationSpeed={1000}
      >
        <img className="w-full" src={Cover} alt="papillon" />
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <h1 className="text-5xl tracking-tighter select-none font-IRANSansBold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            کتاب زندگی ست
          </h1>
        </div>
      </Carousel>
    </div>
  );
};

export default AppCarousel;
