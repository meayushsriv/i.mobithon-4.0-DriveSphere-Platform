import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const AIEnhancedVehicleManagementPage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          AI-Enhanced Vehicle Management
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Optimize your fleet's performance, reduce downtime, and enhance
          maintenance processes with AI-driven vehicle management solutions.
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary py-3 px-6 rounded-full text-lg font-medium"
        >
          Fleet Solutions
        </Link>
      </section>

      {/* Key Features Section */}
      <section className="features py-16">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">
          Key Features of AI-Enhanced Vehicle Management
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="feature-card text-center">
            <img
              src={assets.verified_icon}
              alt="Predictive Maintenance"
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">
              Predictive Maintenance
            </h3>
            <p className="text-gray-600">
              Leverage AI to predict vehicle breakdowns before they happen,
              reducing costly repairs and unexpected downtime.
            </p>
          </div>
          <div className="feature-card text-center">
            <img
              src={assets.header_img}
              alt="Real-Time Tracking"
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Real-Time Tracking</h3>
            <p className="text-gray-600">
              Monitor the location and condition of every vehicle in your fleet,
              optimizing routes and ensuring timely deliveries.
            </p>
          </div>
          <div className="feature-card text-center">
            <img
              src={assets.about_image}
              alt="Performance Analytics"
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">
              Performance Analytics
            </h3>
            <p className="text-gray-600">
              Analyze vehicle performance data to optimize fuel consumption,
              driver behavior, and overall fleet efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits bg-gray-100 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why Choose AI-Enhanced Vehicle Management?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          <div className="benefit-card text-center bg-white p-6 rounded-lg shadow-md">
            <img
              src={assets.reducedDowntimeIcon}
              alt="Reduced Downtime"
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Reduced Downtime</h3>
            <p className="text-gray-600">
              Minimize vehicle downtime with AI-powered diagnostics, preventing
              unplanned maintenance and extending vehicle lifespan.
            </p>
          </div>
          <div className="benefit-card text-center bg-white p-6 rounded-lg shadow-md">
            <img
              src={assets.costSavingsIcon}
              alt="Cost Savings"
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Cost Savings</h3>
            <p className="text-gray-600">
              Save on repair and maintenance costs by identifying issues early,
              allowing for timely interventions.
            </p>
          </div>
          <div className="benefit-card text-center bg-white p-6 rounded-lg shadow-md">
            <img
              src={assets.sustainabilityIcon}
              alt="Sustainability"
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
            <p className="text-gray-600">
              Optimize fuel consumption and reduce emissions, contributing to
              sustainability goals and lowering operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-16">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">
          How AI-Enhanced Vehicle Management Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="how-it-works-step">
            <img
              src={assets.dataCollectionIcon}
              alt="Data Collection"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">1. Data Collection</h3>
            <p className="text-gray-600">
              Collect data from your fleet, including real-time vehicle metrics,
              usage patterns, and driver behaviors.
            </p>
          </div>
          <div className="how-it-works-step">
            <img
              src={assets.aiProcessingIcon}
              alt="AI Processing"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">2. AI Processing</h3>
            <p className="text-gray-600">
              AI analyzes the data and identifies trends, patterns, and
              potential issues that need attention.
            </p>
          </div>
          <div className="how-it-works-step">
            <img
              src={assets.maintenancePredictionIcon}
              alt="Maintenance Prediction"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              3. Maintenance Prediction
            </h3>
            <p className="text-gray-600">
              Predict when maintenance is needed, reducing downtime and
              preventing unexpected vehicle breakdowns.
            </p>
          </div>
          <div className="how-it-works-step">
            <img
              src={assets.optimizedRoutingIcon}
              alt="Optimized Routing"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">4. Optimized Routing</h3>
            <p className="text-gray-600">
              Suggest optimized routes based on real-time traffic data, reducing
              fuel consumption and delivery times.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta bg-gradient-to-r from-primary to-secondary text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Revolutionize Your Fleet Management with AI
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Discover how AI can transform your vehicle management, reduce costs,
          and improve efficiency.
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary py-3 px-6 rounded-full text-lg font-medium"
        >
          Get Started with AI Solutions
        </Link>
      </section>
    </div>
  );
};

export default AIEnhancedVehicleManagementPage;
