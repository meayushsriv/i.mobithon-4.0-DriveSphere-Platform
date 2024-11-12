import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopServices = () => {
  const navigate = useNavigate();
  const { services } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">DriveSphere's Top Features</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Explore the innovative solutions revolutionizing the automotive
        industry.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {(services || []).slice(0, 3).map((item, index) => {
          // Custom display for each feature
          const featureDetails = [
            {
              title: "AI & ML for OEMs",
              description:
                "Predictive analytics for production workflows, demand forecasting, and quality assurance.",
              image: "/path/to/ai-ml.jpg",
            },
            {
              title: "Mobile Applications",
              description:
                "Integrated apps for navigation, diagnostics, and infotainment.",
              image: "/path/to/mobile-apps.jpg",
            },
            {
              title: "Generative AI Solutions",
              description:
                "AI-driven design, immersive experiences, and in-car assistants.",
              image: "/path/to/gen-ai.jpg",
            },
          ];

          const feature = featureDetails[index];
          return (
            <div
              onClick={() => {
                navigate(`/service/${item?._id}`);
                scrollTo(0, 0);
              }}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                className="bg-blue-50"
                src={feature.image}
                alt={feature.title}
              />
              <div className="p-4">
                <p className="text-gray-900 text-lg font-medium">
                  {feature.title}
                </p>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          navigate("/services");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        Explore More
      </button>
    </div>
  );
};

export default TopServices;
