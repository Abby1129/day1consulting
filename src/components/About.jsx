import React from "react";
import supportImg from "../assets/support.png";
// import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 h-[800px]">
        <img
          className="mt-24  rounded-tl-lg rounded-br-[400px] rounded-tr-[100px]"
          src={supportImg}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#679BF1] font-bold uppercase text-3xl">
            DATA EXPERTS
          </h1>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-7">
            Your Day1 Tech Partner.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            provident aliquid, eius odio eaque et hic, nihil omnis culpa,
            delectus molestiae? Sed dolorum recusandae facere ex, autem velit
            blanditiis suscipit?
          </p>
          <LinkS
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <button className="bg-[#FFC40A] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black hover:bg-[#F8DE7E]">
              Get Started
            </button>
          </LinkS>
        </div>
      </div>
    </section>
  );
};

export default About;
