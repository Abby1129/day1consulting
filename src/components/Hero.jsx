import React from "react";
import Video from "../assets/video.mp4";

const Hero = () => {
  return (
    <header class="relative flex items-center justify-center h-screen  overflow-hidden">
      <div class="relative z-30 p-5 text-2xl text-white ">
        <p className="text-cyan-600  font-bold p-2">GROW YOUR BUSINESS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Manage your data.
        </h1>
        <p className="md:text-2xl text-xl font-bold text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          suscipit?
        </p>
        <button className="bg-[#FFC40A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#F8DE7E]">
          Get Started
        </button>
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
