import { useEffect, useState } from "react";
import svg from "./1311353_453.jpg";
import "animate.css";

const Section3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("section3");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="section3"
      className={`h-screen font-montserrat w-screen bg-bgColor1 grid grid-cols-2  ${
        isVisible ? "animate__animated animate__fadeInRightBig" : ""
      } `}
    >
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
