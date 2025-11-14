import React from "react";

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white text-gray-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 6l-2 2m0 0l-2-2m2 2V4"
                opacity="0.0"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Who We Are
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Clarco, an SGS- and BSCI-certified sports shoes factory, specializes
          in OEM/ODM services for private label and unbranded footwear. We offer
          a wide range of styles including running, basketball, tennis, and
          football shoes to meet diverse market demands. With a 100% quality
          inspection system and competitive pricing, we have maintained ZERO
          customer complaints since 2014.
        </p>

        <div>
          <button className="inline-block px-8 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold tracking-widest hover:bg-orange-50 transition">
            MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
}
