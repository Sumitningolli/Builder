import React from "react";
import aboutimg from '../assets/about.jpg'

const About = () => {
  return (
    <div className="h-[100vh] w-full bg-gray-100 flex flex-col sm:flex-row items-center justify-center px-6 sm:px-20 py-10">
      {/* Left Content */}
      <div className="sm:w-1/2 text-center sm:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About <span className="text-blue-500">Us</span>
        </h2>
        <p className="text-gray-700 text-md md:text-lg mb-6 leading-relaxed">
          At Builder, we believe in turning visions into reality. With years of experience in the construction industry, we bring expertise, dedication, and precision to every project we undertake.
        </p>
        <p className="text-gray-600 text-sm md:text-md mb-6">
          Our mission is to deliver high-quality, sustainable, and innovative building solutions tailored to our clients' unique needs.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300">
          Learn More
        </button>
      </div>

      {/* Right Image (Optional) */}
      <div className="sm:w-1/2 mt-10 sm:mt-0 flex justify-center">
        <img
          src={aboutimg}
          alt="About Us"
          className="rounded-xl w-full max-w-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
