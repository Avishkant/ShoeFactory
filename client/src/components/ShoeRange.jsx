import React, { useEffect, useRef, useState } from "react";
import running from "../assets/ourShoeRange/running-shoes.png";
import basketball from "../assets/ourShoeRange/basketball-shoes.png";
import tennis from "../assets/ourShoeRange/tennis-shoes.png";
import football from "../assets/ourShoeRange/football-shoes-clarco.png";
import oem from "../assets/ourShoeRange/China-Sports-Shoes-Factory-Logo.png";

const items = [
  { img: running, title: "Running Shoes", subtitle: "In-Stock" },
  { img: basketball, title: "Basketball Shoes", subtitle: "In-Stock" },
  { img: tennis, title: "Tennis Shoes", subtitle: "In-Stock" },
  { img: football, title: "Football Shoes", subtitle: "In-Stock" },
  { img: oem, title: "OEM/ODM", subtitle: "Custom Shoes" },
];

export default function ShoeRange() {
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  // Responsive perPage calculation
  useEffect(() => {
    function calc() {
      const w = window.innerWidth;
      if (w >= 1200) setPerPage(4);
      else if (w >= 900) setPerPage(3);
      else if (w >= 640) setPerPage(2);
      else setPerPage(1);
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // maximum valid starting index for sliding
  const maxIndex = Math.max(0, items.length - perPage);

  // autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((i) => {
        const maxIndex = Math.max(0, items.length - perPage);
        return i >= maxIndex ? 0 : i + 1;
      });
    }, 3500);
    return () => clearInterval(autoplayRef.current);
  }, [perPage]);

  const goto = (i) => {
    const maxIndex = Math.max(0, items.length - perPage);
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);
  };

  // computed styles for items: each item width is 100% / perPage
  const itemWidth = 100 / perPage;

  // clamp index for rendering but keep state as-is; this avoids calling setState in effects
  const clampedIndex = Math.min(index, maxIndex);

  // center index used for scaling the prominent card
  const center = clampedIndex + Math.floor(perPage / 2);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-orange-500 h-14 w-14 flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 2v6M12 22v-6M4.2 6.2l4.2 4.2M19.8 17.8l-4.2-4.2M4.2 17.8l4.2-4.2M19.8 6.2l-4.2 4.2"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-800">
            Our Shoes Range
          </h2>
        </div>

        <div className="mt-10 relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)]"
              style={{ transform: `translateX(-${index * itemWidth}%)` }}
            >
              {items.map((it, idx) => {
                const isCenter = idx === center;
                return (
                  <div
                    key={idx}
                    className="carousel-item p-2 md:p-4 flex-shrink-0"
                    style={{ width: `${itemWidth}%` }}
                  >
                    <div
                      className={`relative bg-white rounded-xl p-6 shadow-lg transition-transform duration-500 ${
                        isCenter ? "scale-105 shadow-2xl" : "scale-100"
                      }`}
                    >
                      <div className="w-full h-56 md:h-72 flex items-center justify-center bg-white rounded-md overflow-hidden">
                        <img
                          src={it.img}
                          alt={it.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="mt-6 font-semibold text-gray-800 text-center">
                        {it.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2 text-center">
                        {it.subtitle}
                      </p>
                      <div className="flex justify-center">
                        <button className="mt-6 bg-white border border-gray-100 text-gray-600 px-6 py-2 rounded-full shadow-sm hover:shadow-md uppercase tracking-wider hero-cta">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* arrows */}
          <button
            aria-label="prev"
            onClick={() => goto(index - 1)}
            className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            aria-label="next"
            onClick={() => goto(index + 1)}
            className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {Array.from(
              { length: Math.max(1, items.length - perPage + 1) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => goto(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === index ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  aria-label={`go to slide ${i + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
