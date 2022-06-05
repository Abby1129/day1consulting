import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
      scrollnav={getValue.toString()}
      className="flex justify-between items-center w-screen h-24 bg-[#2f2e2c] fixed drop-shadow-lg px-4 z-50 text-white "
    >
      <LinkR
        to="/"
        onClick={toggleHome}
        className="text-[#ffc40a] text-3xl font-bold mr-4 mx-8"
      >
        Day1 Consulting.
      </LinkR>
      <ul className="hidden md:flex mx-8">
        <LinkS
          className="p-4 text-xl cursor-pointer sm:hover:text-[#FFC40A] 	text-decoration-line: none;"
          to="/"
          onClick={toggleHome}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Home
        </LinkS>
        <LinkS
          className="p-4 text-xl cursor-pointer sm:hover:text-[#FFC40A] 	text-decoration-line: none;"
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          About
        </LinkS>
        <LinkS
          className="p-4 text-xl cursor-pointer sm:hover:text-[#FFC40A] 	text-decoration-line: none;"
          to="services"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Services
        </LinkS>
        <LinkS
          className="p-4 text-xl cursor-pointer sm:hover:text-[#FFC40A] 	text-decoration-line: none;"
          to="team"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Team
        </LinkS>
        <LinkR
          to="/contact"
          className="p-4 text-xl cursor-pointer sm:hover:text-[#FFC40A] 	text-decoration-line: none;"
        >
          Contact
        </LinkR>
      </ul>
      <div onClick={handleNav} className="block md:hidden m-8">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-ful border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
            : "ease-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="text-[#ffc40a] text-3xl font-bold m-7 ">
          Day1 Consulting.
        </h1>
        <li className="bg-[#2F2E2C] border-b border-gray-600">Home</li>
        <li className="bg-[#2F2e2c] border-b border-gray-600">About</li>
        <li className="bg-[#2F2e2c] border-b border-gray-600">Services</li>
        <li className="bg-[#2F2e2c] border-b border-gray-600">Team</li>
        <li className="bg-[#2F2e2c]">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
