import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  text-sm justify-center">
        <div className="flex overflow-hidden flex-col">
          <img className="mb-5 w-60 cursor-pointer " src={Logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
          Empowering your financial journey, one stock at a time. Discover, learn, and invest with confidence. Together, we grow stronger and brighter every day. Your dreams are the seeds of a prosperous future—let us nurture them with insights, opportunities, and a platform designed to help you thrive. Because at the heart of every great investment is a story worth building.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="hover:text-orange-600 duration-300 cursor-pointer">Home</li>
            <li className="hover:text-orange-600 duration-300 cursor-pointer">About us </li>
            <li className="hover:text-orange-600 duration-300 cursor-pointer">Delivery</li>
            <li className="hover:text-orange-600 duration-300 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-9480350683</li>
            <li>abhilashhadagali67@gmail.com</li>
          </ul> 
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center ">Copyright 2024@ Abhilash_Hadagali.dev All Right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

