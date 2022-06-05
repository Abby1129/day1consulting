import React from "react";
import supportImg from "../assets/support.png";
// import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="bg-[#2F2E2C]">
      <div className="">
        <img className="" src={supportImg} alt="/" />
        <div className="">
          <h1 className="">DATA EXPERTS</h1>
          <h2 className="">Your Day1 Tech Partner.</h2>
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
            <button className="">Get Started</button>
          </LinkS>
        </div>
      </div>
    </section>
  );
};

export default About;
