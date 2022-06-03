import React from "react";
import Typed from "react-typed";

const Contact = () => {
  return (
    <section className="bg-[#2F2E2C] w-full h-full fixed overflow-hidden top-0 bottom-0 left-0 right-0 ">
      <div className="h-full flex justify-center sm:max-h-[80%]">
        <h1 className="py-8 text-end text-[#FFC40A] font-bold text-4xl sm:ml-4 sm:mt-2">
          Day1 Consulting
        </h1>
        <div>
          <form action="">
            <h1>Need pricing?</h1>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter name.." />
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter email..." />
          </form>
          <button type="submit">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
