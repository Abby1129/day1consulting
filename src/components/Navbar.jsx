import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center w-screen h-24 bg-[#000300] fixed drop-shadow-lg px-4 z-50 text-white">
      <h1 className="text-[#ffc40a] text-3xl font-bold mr-4">
        Day1 Consulting.
      </h1>
      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-ful border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="text-[#ffc40a] text-3xl font-bold m-8 ">
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
