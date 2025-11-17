import React, { useEffect, useState } from "react";
import heroImg from "../assets/heroImage.jpg";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // slight delay so CSS transitions apply after paint
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative">
      <div
        className="full-bleed-viewport min-h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white ${
            mounted ? "hero-animate" : "hero-init"
          }`}
        >
          <h2 className="hero-title text-[48px] sm:text-[72px] md:text-[120px] leading-[0.85] font-extrabold drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)]">
            10+ YEARS
          </h2>
          <h3 className="hero-sub mt-2 text-3xl md:text-4xl font-bold tracking-wide drop-shadow-sm">
            SPORTS SHOES FACTORY
          </h3>

          <p className="hero-copy mt-6 max-w-3xl text-gray-200 text-base md:text-lg">
            Step up your business with Sports Shoes Factory — your source for
            premium private label and unbranded sports shoes. With low MOQ,
            ready-to-ship inventory, and OEM/ODM options, we make importing all
            the shoes you need easy and convenient.
          </p>

          <div className="hero-ctas mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold uppercase tracking-wider shadow-lg"
            >
              Inquire Now
            </a>
            <a
              href="#"
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold uppercase tracking-wider shadow-lg"
            >
              View Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
