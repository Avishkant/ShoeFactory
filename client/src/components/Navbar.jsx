import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/c-h-slider-2.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="logo" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="text-sm font-bold text-gray-800">Sports Shoes</div>
            <div className="text-xs text-gray-600 -mt-0.5">Factory</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
          <a href="#" className="hover:text-orange-600">
            Products
          </a>
          <a href="#" className="hover:text-orange-600">
            Advantages
          </a>
          <a href="#" className="hover:text-orange-600">
            Partners
          </a>
          <Link to="/about" className="hover:text-orange-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-orange-600">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* <div className="flex items-center gap-2 text-sm text-gray-700">
						<img src="https://flagcdn.com/gb.svg" alt="en" className="h-4 w-6 object-cover rounded-sm"/>
						<span className="hidden sm:inline">English</span>
					</div> */}
          <button
            aria-label="search"
            className="p-2 rounded-full text-orange-500 hover:bg-orange-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
