import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#ffc40a]">
        Day1 Consulting.
      </h1>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#ffc40a] m-4">
          Day1 Consulting.
        </h1>
        <li className="border-b border-gray-600">Home</li>
        <li className="border-b border-gray-600">Company</li>
        <li className="border-b border-gray-600">Resources</li>
        <li className="border-b border-gray-600">About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
