import React from "react";
import Typed from "react-typed";
import teamImg from "../assets/team.png";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section id="team" className="">
      <div className="">
        <div className="">
          <h1 className="">Our Team</h1>
          <h2 className="">
            {/* Obtain solutions for */}
            {/* <Typed
              className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#F8DE7E]"
              strings={["Cloud", "AWS", "Azure"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            /> */}
          </h2>
          <p>
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            provident aliquid, eius odio eaque et hic, nihil omnis culpa,
            delectus molestiae? Sed dolorum recusandae facere ex, autem velit
            blanditiis suscipit? */}
          </p>
          <Link to="/contact">
            {/* <button className="">Request Consultation</button> */}
          </Link>
        </div>
        <img className="" src={teamImg} alt="/" />
      </div>
    </section>
  );
};

export default Team;
