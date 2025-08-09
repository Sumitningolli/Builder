import React from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars ,faLandmarkDome} from "@fortawesome/free-solid-svg-icons";

import "../App.css";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4 fixed top-0 right-0 z-50 bg-black">
      {/* Logo */}
      <div className="flex items-center gap-3">
       <FontAwesomeIcon icon={faLandmarkDome} className="text-red-600 text-xl md:text-2xl"/>
        <p className="font-bold text-xl text-red-600 font-mono italic md:text-2xl transition ease-in-out duration-500">
          Builder
        </p>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden sm:flex gap-6 text-sm md:text-xl text-white font-semibold font-mono italic">
        <a href="#home" className="hover:text-red-500 transition">Home</a>
        <a href="#about" className="hover:text-red-500 transition">About</a>
        <a href="#services" className="hover:text-red-500 transition">Services</a>
        <a href="#projects" className="hover:text-red-500 transition">Projects</a>
      </div>

      {/* Hamburger Menu for Small Devices */}
      <div className="flex sm:hidden">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-sm p-2 min-h-0 h-9 w-9">
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2 text-sm shadow-md"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </div>

      {/* Register Button */}
      <div className="hidden md:flex sm:flex">
        <button className="btn hover:bg-gray-600 px-4 py-2 text-sm rounded">
          <a href="#contact">Register</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
