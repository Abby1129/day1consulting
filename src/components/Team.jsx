import React from "react";
import Typed from "react-typed";
import teamImg from "../assets/team.png";

const Team = () => {
  return (
    <section
      id="team"
      className="w-full bg-black text-white py-16 px-6 h-screen"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <div className="flex flex-col justify-between">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            provident aliquid, eius odio eaque et hic, nihil omnis culpa,
            delectus molestiae? Sed dolorum recusandae facere ex, autem velit
            blanditiis suscipit?
          </p>
          <button className="bg-[#FFC40A] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black hover:bg-[#F8DE7E]">
            Request Consultation
          </button>
        </div>
        <img
          className="w-[500px] mx-auto my-4 rounded-tr-lg rounded-tl-[100px] rounded-br-[100px] rounded-bl-lg "
          src={teamImg}
          alt="/"
        />
      </div>
    </section>
  );
};

export default Team;
