import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import exam from "../assets/exam.json";
import Section2 from "./LandingPages/Section2";
import Section3 from "./LandingPages/Section3";
import Section4 from "./LandingPages/Section4";
import Section5 from "./LandingPages/Section5";
import Footer from "./LandingPages/Footer";
import NavbarNeo from "../Components/Navbar";

const Home = () => {
  const aniRef = useRef<LottieRefCurrentProps>(null);

  return (
    <>
      <NavbarNeo />
      <div className="flex h-screen w-screen bg-primary font-montserrat ">
        <div className="flex-1  flex items-start justify-between flex-col py-8 pl-12  gap-4">
          <div
            className="border border-black 
          py-3 px-9 rounded-3xl font-medium hover:bg-white"
          >
            IntelliPrep
          </div>
          <div className="font-extrabold text-7xl ">
            The ultimate exam prep app
          </div>
          <div
            className="bg-white py-2 px-8 border-blue-950 rounded-3xl text-textColor font-medium hover:bg-primary
           "
          >
            Get Started
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <Lottie
            lottieRef={aniRef}
            // onComplete={() => {
            //   // console.log("complete");
            //   aniRef.current?.goToAndPlay(50);
            // }}
            animationData={exam}
            loop={2}
          />
        </div>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
};

export default Home;
