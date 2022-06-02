import React from "react";
import Service1 from "../assets/service1.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";

const Services = () => {
  return (
    <div className="w-full py-[3rem] px-4 bg-white">
      <h1 className="text-4xl text-center font-bold py-5 text-[#679BF1]">
        What We Offer
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-4 mt-8">
        <div className="w-full shadow-xl p-3 my-6 rounded-lg hover:scale-105 duration-300">
          <img className="mx-auto bg-white" src={Service3} alt="/" />
          <h2 className="text-3xl font-bold text-center py-5 text-[#679BF1]">
            Cloud Management
          </h2>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            id vero laboriosam animi? Quas quo dolor quisquam? Nemo, harum
            excepturi.
          </p>
        </div>
        <div className="w-full shadow-xl p-3 my-6 rounded-lg hover:scale-105 duration-300">
          <img className="mx-auto bg-white" src={Service3} alt="/" />
          <h2 className="text-3xl font-bold text-center py-5 text-[#679BF1]">
            AWS Development
          </h2>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            id vero laboriosam animi? Quas quo dolor quisquam? Nemo, harum
            excepturi.
          </p>
        </div>
        <div className="w-full shadow-xl p-3 my-6 rounded-lg hover:scale-105 duration-300">
          <img className="mx-auto bg-white" src={Service3} alt="/" />
          <h2 className="text-3xl font-bold text-center py-5 text-[#679BF1]">
            Pipeline Automation
          </h2>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            id vero laboriosam animi? Quas quo dolor quisquam? Nemo, harum
            excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
