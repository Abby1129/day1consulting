import React from "react";
import Service1 from "../assets/service1.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";

const Services = () => {
  return (
    <section className="w-full px-4 py-[3rem] bg-white">
      <h1 className="text-4xl text-center mt-5 font-bold py-8 ">
        What We Offer
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-3 my-4 rounded-lg hover:scale-105 duration-300">
          {/* className="w-full shadow-xl flex flex-col p-8 my-7 rounded-lg hover:scale-105 duration-300" */}
          <img
            // className="w-20 mx-auto mt-[-3rem] bg-white"
            className="mx-auto bg-white"
            src={Service1}
            alt="/"
          />
          <h2 className="text-3xl font-bold text-center py-5 text-[#679BF1]">
            Cloud Development
          </h2>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            id vero laboriosam animi? Quas quo dolor quisquam? Nemo, harum
            excepturi.
          </p>
        </div>

        <div className="w-full shadow-xl p-3 my-4 rounded-lg hover:scale-105 duration-300">
          <img className=" mx-autobg-white" src={Service2} alt="/" />
          <h2 className="text-3xl font-bold text-center py-5 text-[#679BF1]">
            AWS Migration
          </h2>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            id vero laboriosam animi? Quas quo dolor quisquam? Nemo, harum
            excepturi.
          </p>
        </div>

        <div className="w-full shadow-xl p-3 my-4 rounded-lg hover:scale-105 duration-300">
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
    </section>
  );
};

export default Services;
