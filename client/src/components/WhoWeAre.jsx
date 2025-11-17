import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
      when: "beforeChildren",
    },
  },
};

// smoother entrance variant for text and button
const item = {
  hidden: { opacity: 0, y: 26, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: [0.16, 0.84, 0.24, 1] },
  },
};

// icon uses a spring for a snappy but smooth pop
const iconVariant = {
  hidden: { opacity: 0, scale: 0.82, rotate: -6 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 220, damping: 20, mass: 0.6 },
  },
};

export default function WhoWeAre() {
  return (
    <motion.section
      className="py-12 md:py-20 bg-white text-gray-700"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          className="flex items-center justify-center mb-6 motion-smooth"
          variants={iconVariant}
        >
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
            </svg>
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          variants={item}
        >
          Who We Are
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
          variants={item}
        >
          Clarco, an SGS- and BSCI-certified sports shoes factory, specializes
          in OEM/ODM services for private label and unbranded footwear. We offer
          a wide range of styles including running, basketball, tennis, and
          football shoes to meet diverse market demands. With a 100% quality
          inspection system and competitive pricing, we have maintained ZERO
          customer complaints since 2014.
        </motion.p>

        <motion.div variants={item}>
          <button className="inline-block px-8 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold tracking-widest hover:bg-orange-50 transition">
            MORE ABOUT US
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
