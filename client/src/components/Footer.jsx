import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, when: "beforeChildren" } },
};

const col = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 0.84, 0.24, 1] } },
};

export default function Footer() {
  return (
    <footer className="site-footer-olive full-bleed-viewport relative overflow-hidden text-white">
      {/* top wave */}
      <svg
        className="footer-top-wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,40 C150,120 300,0 450,40 C600,80 750,20 900,40 C1050,60 1200,10 1320,40 L1440,80 L1440,0 L0,0 Z"
          fill="#b5b061"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
          <motion.div className="contacts" variants={col}>
            <h3 className="text-2xl font-bold mb-4">Our Contacts</h3>
            <p className="mb-4 max-w-xs text-gray-100 leading-relaxed">
              Plot No. 341, Sector 17, New York.
            </p>
            <p className="mb-4 text-gray-100">Sales@shoefactory.Com</p>

            <div className="flex items-center gap-4">
              <div className="phone-circle bg-white text-[#b5b061] p-3 rounded-full motion-smooth">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h2l2 5v6l3 3 4-2 3-6V5h2"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold">+91-9999999999</div>
                <div className="text-lg font-semibold">+91-8888888888</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="quick-links flex justify-center" variants={col}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Link</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-100">
                <a className="footer-item" href="#">
                  About Us
                </a>
                <a className="footer-item" href="#">
                  Men's Collection
                </a>
                <a className="footer-item" href="#">
                  Contact Us
                </a>
                <a className="footer-item" href="#">
                  Women's Collection
                </a>
                <a className="footer-item" href="#">
                  Kid's Collection
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="hours" variants={col}>
            <h3 className="text-2xl font-bold mb-4">Open Hours</h3>
            <p className="mb-6 text-gray-100">
              Mon - Sat 9am - 7pm
              <br />
              Sunday Closed
            </p>

            <div className="flex items-center gap-3">
              <a className="social-white" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M22 12.073C22 6.48 17.523 2 11.931 2 6.34 2 1.862 6.48 1.862 12.073 1.862 16.64 4.98 20.55 9.186 21.7v-6.6H6.5v-3.03h2.686V8.02c0-2.66 1.594-4.12 4.03-4.12 1.17 0 2.392.208 2.392.208v2.64h-1.35c-1.33 0-1.744.827-1.744 1.674v2.01h2.97l-.475 3.03h-2.495v6.6C19.02 20.55 22 16.64 22 12.073z" />
                </svg>
              </a>
              <a className="social-white" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.6 0-4.7 2.5-4.1 5A12.94 12.94 0 013 4s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="social-white" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zM12 5.8A6.2 6.2 0 105.8 12 6.2 6.2 0 0012 5.8zm0 10.2A4 4 0 118 12a4 4 0 014 4z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <hr className="my-8 border-white/10" />

        <div className="flex items-center justify-between text-sm text-white/90">
          <div>
            © 2025{" "}
            <span className="company-highlight">
              Shoe Factory Footwear Pvt. Ltd.
            </span>{" "}
            . All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a className="footer-item" href="#">
              Privacy
            </a>
            <a className="footer-item" href="#">
              Terms
            </a>
            {/* <a className="footer-item" href="#">
              Powered By
            </a> */}
          </div>
        </div>
      </div>

      {/* decorative stars left-bottom */}
      <svg className="footer-stars" viewBox="0 0 120 120" aria-hidden>
        <g fill="none" stroke="#fff" strokeWidth="1.8" opacity="0.35">
          <path d="M10 90 l6 -8 8 2 -6 8z" />
          <path d="M30 100 l6 -8 8 2 -6 8z" />
          <path d="M50 110 l6 -8 8 2 -6 8z" />
        </g>
      </svg>
    </footer>
  );
}
