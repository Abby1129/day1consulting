import React from "react";
import Service1 from "../assets/service1.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";

const Services = () => {
  return (
    <section id="services" className="">
      <h1 className="">What We Offer</h1>
      <div className="">
        <div className="">
          <img className="" src={Service3} alt="/" />
          <h2 className="">Cloud Management</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            id vero laboriosam animi? Quas quo dolor quisquam? Nemo, harum
            excepturi.
          </p>
        </div>
        <div className="">
          <img className="" src={Service3} alt="/" />
          <h2 className="">AWS Development</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            id vero laboriosam animi? Quas quo dolor quisquam? Nemo, harum
            excepturi.
          </p>
        </div>
        <div className="">
          <img className="" src={Service3} alt="/" />
          <h2 className="">Pipeline Automation</h2>
          <p className="">
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
