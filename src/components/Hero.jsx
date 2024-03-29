import React from "react";
import Video from "../assets/video.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header
      id="home"
      className="relative flex items-center justify-center h-screen  overflow-hidden  font-lato"
    >
      <div className="relative z-30 p-5 text-2xl text-white  ">
        <p className="text-[#679BF1]  font-bold p-2">GROW YOUR BUSINESS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Manage your data.
        </h1>
        <p className="md:text-2xl text-xl font-bold text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          suscipit?
        </p>
        <Link to="/contact">
          <button className="bg-[#FFC40A] w-[200px] rounded-md font-medium text-black hover:bg-[#F8DE7E] my-6 mx-auto py-3 ">
            Learn More
          </button>
        </Link>
      </div>
      <video
        playsInline
        autoPlay
        loop
        muted
        src={Video}
        type="video/mp4"
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none "
      />
    </header>
  );
};

export default Hero;
