import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

import footerImg from "../assets/footer.png";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-[#2F2E2C] text-[#F8DE7E] py-8 px-2 ">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-[#8AB9F1] ">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">How it works</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Automation</li>
            <li className="py-1">Integration</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Team</h6>
          <ul>
            <li className="py-1">Support</li>
            <li className="py-1">Development</li>
            <li className="py-1">Operation</li>
            <li className="py-1">Infrastructure</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Careers</li>
            <li className="py-1">Services</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Contact</h6>
          <ul>
            <li className="py-1">Consultation</li>
            <li className="py-1">Pricing</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <img
            className="py-9 ml-2 rounded-tr-lg rounded-tl-[80px] rounded-br-[400px] rounded-bl-lg md:hover:rotate-180 duration-300 ease-in-out mb-4 "
            src={footerImg}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-[ #FFC40A]">
        <p className="py-4 ">Day1 Consulting © 2022 All rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
        </div>
      </div>
    </div>
  );
};

export default Footer;
