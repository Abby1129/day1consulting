import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F6C40A] text-[#2F2E2C]  font-lato">
      <div className="max-w-[1240px] flex lg:flex-row sm:flex-col mx-auto items-center py-8 px-4 justify-around">
        <div className="flex justify-between w-[200px] text-xl py-3 mr-3">
          <a href="www.github.com">
            <FaGithub />
          </a>
          <a href="www.linkedin.com">
            <FaLinkedin />
          </a>
          <FaFacebook />
          <FaTwitter />
          <FaTwitch />
        </div>
        <h1 className="font-bold lg:text-2xl sm:text-lg">
          Day1 Consulting&#8482; © 2022 All rights reserved.
        </h1>

        <Link to="/contact">
          <p className="lg:text-xl sm:text-lg bg-[#679BF1] rounded-lg text-center font-medium my-3 md:mx-0 py-2 hover:bg-[#F8DE7E] lg:px-3 px-2">
            Contact us
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
