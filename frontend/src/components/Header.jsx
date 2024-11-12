import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading">
          Revolutionize Your DriveSphere Experience
          <br className="hidden sm:block" />
          With Smart, AI-Driven Solutions
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="User Profiles"
          />
          <p>
            Explore predictive analytics, mobile apps, and generative AI tools
            to enhance
            <br className="hidden sm:block" />
            production efficiency and customer engagement.
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          href="#solutions"
        >
          Explore Solutions{" "}
          <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="DriveSphere Header"
        />
      </div>
    </div>
  );
};

export default Header;
