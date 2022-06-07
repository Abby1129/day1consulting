import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section id="contact" className="text-gray-700 relative bg-[#2F2E2C] ">
        <div className="px-3 py-8 mx-auto">
          <Link
            to="/"
            className="px-7 mx-7 text-4xl font-bold text-[#F6C40A] 	text-decoration-line: none"
          >
            Day1 Consulting
          </Link>

          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-4xl font-bold py-7 mt-20 text-[#679BF1]">
              Contact us for
              <Typed
                className="md:text-5xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#F8DE7E]"
                strings={["Pricing", "Consultation", "Inquiries"]}
                typeSpeed={100}
                backSpeed={90}
                loop
              />
            </h1>
            <p className="w-2/3 mx-auto leading-relaxed  text-white text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              praesentium dolore perspiciatis nisi consequuntur et nihil,
              perferendis eius assumenda facilis.
            </p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto ">
            <div className="flex flex-wrap m-2">
              <div className="p-2 w-1/2 ">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-lg  font-medium text-[#679BF1]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-lg  font-medium text-[#679BF1]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-lg  font-medium text-[#679BF1]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-[300px] bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <button className="flex mx-auto text-black bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-[#679BF1] rounded text-lg">
                  Button
                </button>
              </div>

              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="www.gmail.com" className="text-[#679BF1]">
                  Consult.Day1@email.com
                </a>
                <p className="leading-normal my-5 text-[#679BF1]">
                  505 Burrard St.
                  <br />
                  Vancouver, BC V7X 1M5
                </p>
                <span className="inline-flex"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
