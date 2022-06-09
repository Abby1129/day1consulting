import React from "react";
import Typed from "react-typed";
import teamImg from "../assets/team.svg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section
      id="team"
      className="bg-[#2F2E2C] text-white py-4  w-full sm:h-screen md:h-[850px] px-9  font-lato"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:mt-20 sm:mt-12 mb-6">
        <div className="flex flex-col justify-center  sm:mt-0 ">
          <h1 className="text-[#679BF1] font-bold uppercase text-3xl">
            Our Team
          </h1>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-7">
            Obtain solutions for
            <Typed
              className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#F8DE7E]"
              strings={["Cloud", "AWS", "Azure"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit similique ullam beatae, quasi nam velit id veritatis
            accusantium quisquam! Magnam aspernatur fuga laboriosam sequi!
            Numquam consequuntur ipsam ducimus dolores? Minima facilis earum
            quis perferendis magni sapiente voluptate eos sed quaerat error?
            Omnis excepturi architecto accusamus eligendi reiciendis beatae,
            optio sint?
          </p>
          <Link to="/contact">
            <button className="bg-[#FFC40A] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black hover:bg-[#F8DE7E]">
              Request Consultation
            </button>
          </Link>
        </div>
        <img
          className="w-[500px] mx-auto my-9 mt-24 sm:mt-8"
          src={teamImg}
          alt="/"
        />
      </div>
    </section>
  );
};

export default Team;
