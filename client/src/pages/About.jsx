import React, { useEffect } from "react";
import bg from "../assets/about/marketing-bg6.png";
import downloadSvg from "../assets/about/download.svg";

export default function About() {
  useEffect(() => {
    const items = document.querySelectorAll(".about-card");
    if (!items.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.18 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero - full bleed with animated shapes */}
      <header className="relative overflow-hidden">
        <div
          className="full-bleed-viewport about-hero"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(232,91,25,0.94), rgba(232,91,25,0.82)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center relative z-10">
            <p className="uppercase tracking-widest text-sm text-orange-100 mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
              Sports Shoes Factory
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-orange-50 opacity-95 text-lg md:text-xl">
              Low minimum order, full OEM/ODM capability and rigorous quality
              control. We help brands scale with flexible production and ethical
              practices.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#how"
                className="about-cta inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-orange-600 font-semibold shadow-lg hover:scale-105 transition"
              >
                Learn How We Work
              </a>
              <a
                href="/assets/about/download.svg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
              >
                <img
                  src={downloadSvg}
                  alt="download"
                  className="w-5 h-5 opacity-90"
                />
                Download Brochure
              </a>
            </div>
          </div>

          {/* decorative floating shapes */}
          <svg
            className="about-shape shape-1"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#ffecd2" stopOpacity="0.12" />
                <stop offset="1" stopColor="#fcb69f" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="60" fill="url(#g1)" />
          </svg>
          <svg
            className="about-shape shape-2"
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <rect
              x="0"
              y="0"
              width="150"
              height="150"
              rx="24"
              fill="rgba(255,255,255,0.06)"
            />
          </svg>
        </div>
      </header>

      {/* Features / Who we are */}
      <main className="w-full px-6 py-16" id="how">
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="about-card p-8 bg-white rounded-2xl shadow-md">
              <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M3 7h4v10H3zM9 7h12v10H9z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible MOQ</h3>
              <p className="text-sm text-gray-600">
                Low minimum order quantities across styles and sizes.
              </p>
            </article>

            <article className="about-card p-8 bg-white rounded-2xl shadow-md">
              <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-pink-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M12 12a4 4 0 100-8 4 4 0 000 8zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">OEM / ODM</h3>
              <p className="text-sm text-gray-600">
                Full customization and private-label manufacturing support.
              </p>
            </article>

            <article className="about-card p-8 bg-white rounded-2xl shadow-md">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-gray-600">
                100% inspection and BSCI/SGS compliance for ethical production.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
