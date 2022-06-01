import React from "react";
import supportImg from "../assets/support.png";

const About = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          className="w-[500px] mx-auto my-4 rounded-tl-lg rounded-br-[400px] rounded-tr-[100px]"
          src={supportImg}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#679BF1] font-bold ">DATA EXPERTISE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Let Us Solve Your Data Problems
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            provident aliquid, eius odio eaque et hic, nihil omnis culpa,
            delectus molestiae? Sed dolorum recusandae facere ex, autem velit
            blanditiis suscipit?
          </p>
          <button className="bg-[#FFC40A] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black hover:bg-[#F8DE7E]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
