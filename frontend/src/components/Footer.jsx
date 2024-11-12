import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img
            className="mb-5 w-40"
            src={assets.driveSphereLogo}
            alt="DriveSphere Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            DriveSphere is transforming the automotive industry with innovative
            AI-driven solutions. From predictive analytics and generative AI for
            OEMs to integrated mobile applications for vehicle connectivity, our
            platform empowers businesses and enhances user experiences. Together
            with Volkswagen, we aim to set new benchmarks in technology,
            efficiency, and customer satisfaction. Discover how DriveSphere is
            driving the future of mobility.
          </p>
        </div>
        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Solutions</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+0123456789</li>
            <li>info@drivesphere.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ DriveSphere - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
