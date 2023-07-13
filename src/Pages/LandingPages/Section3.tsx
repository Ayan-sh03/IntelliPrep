import React from "react";
import svg from "./1311353_453.jpg";

const Section3 = () => {
  return (
    <div className="h-screen font-montserrat w-screen bg-bgColor1 grid grid-cols-2 ">
      <div className="flex justify-center flex-col gap-3 p-10 ">
        <h1 className="text-5xl font-extrabold   text-textColor2">
          Time management made easy
        </h1>
        <p className="text-textColor2 text-3xl">
          Stay on track with our app’s time management features and bid farewell
          to last-minute cramming.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={svg}
          alt="svg image"
          className="w-full  rounded-tl-[40px] rounded-tr-[205px] rounded-br-[200px] rounded-bl-[200px] bg-blend-color-burn max-h-38 max-w-sm"
        />
      </div>
    </div>
  );
};

export default Section3;
