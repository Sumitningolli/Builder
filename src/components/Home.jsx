import React, { useEffect, useRef } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import building from '../assets/building.avif'
import building1 from '../assets/building1.jpg'
import building2 from '../assets/building2.jpg'
import building3 from '../assets/building3.jpg'
import building4 from '../assets/building4.jpg'
import building5 from '../assets/building5.jpg'
import building6 from '../assets/building6.jpg'
import building7 from '../assets/building7.jpg'

const Home = () => {
  const carouselRef = useRef(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    const interval = setInterval(() => {
      if (carousel) {
        carousel.scrollBy({
          left: carousel.offsetWidth,
          behavior: "smooth",
        });

        // Loop back to start if end is reached
        if (
          carousel.scrollLeft + carousel.offsetWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, 3000); 
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[100vh] w-[100%] mx-4 mt-2 rounded-3xl sm:flex">
      {/* Foreground content */}
      <div className=" flex flex-col pt-10 mt-10 px-1 text-white sm:justify-center sm:p-20 sm:pt-30 md:m-2 sm:w-1/2 md:items-start  md:pl-20 md:justify-center lg:pl-30">
        <h1 className="font-bold text-5xl sm:text-5xl md:text-7xl lg:text-8xl ">
          <span className="flex-wrap text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
            Welcome to
          </span>
          <br /> Builder
        </h1>
        <p className="mt-4 text-xl text-red-200">
          Your dream project starts here
        </p>

        {/* Button  */}
        <div className="flex flex-col text-white items-start py-2">
          <button className="text-black font-semibold bg-white text-md items-center rounded-3xl flex py-1 px-2">
            <FontAwesomeIcon
              icon={faBook}
              className="bg-black text-white text-sm rounded-2xl p-2 mr-1"
            />
            Book Now
          </button>
        </div>
      </div>



      {/* left */}
      <div className="flex items-center justify-center mt-3 sm:w-1/2 sm:pt-20">
        <div className="carousel rounded-box w-50 md:w-60 lg:w-70 h-[300px] sm:h-[400px]" ref={carouselRef}>
          <div className="carousel-item w-full">
            <img
              src={building}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          <div className="carousel-item w-full">
            <img
              src={building1}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={building2}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={building3}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={building4}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={building5}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={building6}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={building7}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
