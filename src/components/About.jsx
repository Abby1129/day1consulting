import React from "react";
import supportImg from "../assets/support.svg";
// import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#2F2E2C] text-white py-16  w-full sm:h-screen md:h-[850px]  font-lato"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:py-12  px-8 sm:mt-9">
        <img
          className=" my-10 "
          src={supportImg}
          alt="/"
          
        />
        <div className="flex flex-col justify-center ml-12 ">
          <h1 className="text-[#679BF1] font-bold uppercase text-3xl">
            DATA EXPERTS
          </h1>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-7">
            Your Day1 Tech Partner.
          </h2>
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            dolore ea doloribus, quasi ullam adipisci obcaecati facere itaque
            provident est pariatur molestias sed omnis, error ratione optio eum
            tenetur non dicta debitis fuga sint. Repudiandae accusantium,
            perferendis reiciendis alias eveniet fuga. Sit tempore nobis
            incidunt, sed quod, quaerat inventore, fuga sint cumque expedita
            porro cupiditate architecto reprehenderit sequi soluta libero.
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
