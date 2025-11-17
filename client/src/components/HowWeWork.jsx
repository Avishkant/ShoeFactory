import React, { useEffect } from "react";

const steps = [
  {
    title: "Step 1",
    desc: "Discover our wide range of high-quality sports shoes. Select and Inquire.",
    color: "bg-purple-200",
  },
  {
    title: "Step 2",
    desc: "Submit inquiry, get quotation in 12 hours. If satisfied, feel free to place an order.",
    color: "bg-pink-200",
  },
  {
    title: "Step 3",
    desc: "We will prepare the products and print the OEM logo as per your specifications.",
    color: "bg-orange-200",
  },
  {
    title: "Step 4",
    desc: "Trust us for quality inspection and professional delivery, guaranteed satisfaction.",
    color: "bg-green-200",
  },
];

export default function HowWeWork() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".ww-card"));
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-24 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          How We Work With You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => {
            const iconColor =
              i === 0
                ? "text-violet-600"
                : i === 1
                ? "text-pink-600"
                : i === 2
                ? "text-orange-600"
                : "text-green-600";
            const renderIcon = () => {
              switch (i) {
                case 0:
                  // Discover / Browse (magnifier + grid)
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-7 h-7 ${iconColor}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35"
                      />
                      <rect x="3" y="4" width="8" height="8" rx="1" />
                      <rect x="13" y="4" width="8" height="8" rx="1" />
                      <rect x="3" y="14" width="8" height="6" rx="1" />
                    </svg>
                  );
                case 1:
                  // Contact / Quote (users)
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-7 h-7 ${iconColor}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 21v-2a4 4 0 014-4h1"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 14a4 4 0 018 0"
                      />
                    </svg>
                  );
                case 2:
                  // Production / Tools (wrench + hammer)
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-7 h-7 ${iconColor}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.7 9.3l-4 4"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.1 3.9a3.6 3.6 0 00-5.1 0L10 9"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 21l6-6"
                      />
                    </svg>
                  );
                default:
                  // Quality / Delivery (shield check)
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-7 h-7 ${iconColor}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2l7 4v6c0 5-3.4 9-7 11-3.6-2-7-6-7-11V6l7-4z"
                      />
                      <path
                        strokeLinecap="rou nd"
                        strokeLinejoin="round"
                        d="M9.5 12.5l1.8 1.8L15 10"
                      />
                    </svg>
                  );
              }
            };

            return (
              <article
                key={i}
                className="ww-card bg-white rounded-xl p-6 md:p-8 text-left relative overflow-visible"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`${s.color} w-14 h-14 rounded-full flex items-center justify-center shadow-sm icon-circle`}
                  >
                    {renderIcon()}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-8">{s.desc}</p>

                <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-bottom-6 mt-6 sm:mt-0">
                  {i === 0 ? (
                    <button className="ww-btn bg-white px-6 py-2 rounded-full text-sm font-semibold tracking-widest border border-orange-300 shadow-sm text-orange-500 hover:bg-orange-500 hover:text-white transition">
                      BROWSE NOW
                    </button>
                  ) : (
                    <button className="ww-btn bg-white px-6 py-2 rounded-full text-sm font-semibold tracking-widest border border-gray-100 shadow-sm text-gray-400 hover:text-gray-700 transition">
                      {i === 1
                        ? "CONTACT US"
                        : i === 2
                        ? "LOGO OPTIONS"
                        : "LEARN MORE"}
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
