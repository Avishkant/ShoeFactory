// Simple scroll reveal utility
// Usage: import { initScrollReveal } from './hooks/scrollReveal'; initScrollReveal();
// Observes elements with [data-reveal] or common selectors and adds `in-view` when visible.

export function initScrollReveal(options = {}) {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return;

  const preferReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (preferReduced) return;

  const rootMargin = options.rootMargin || "0px 0px -8% 0px";
  const threshold = options.threshold || 0.12;

  const selector =
    options.selector ||
    "[data-reveal], .ww-card, .about-card, .about-shape, .footer-brand, .footer-links, .hero, .shoe-wrap, img.reveal-img, .reveal-on-scroll";

  const els = () => Array.from(document.querySelectorAll(selector));
  if (!els().length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          const delay =
            el.getAttribute("data-reveal-delay") || el.dataset.delay || "";
          if (delay) el.style.transitionDelay = delay;
          // add direction class if specified
          const dir = el.getAttribute("data-reveal") || el.dataset.reveal || "";
          if (dir) el.classList.add(`reveal-${dir}`);
          el.classList.add("in-view");
          // if element sets data-reveal-once="false" we keep observing
          const once = el.getAttribute("data-reveal-once");
          if (once === "false") return;
          obs.unobserve(el);
        }
      });
    },
    { root: null, rootMargin, threshold }
  );

  els().forEach((el) => {
    // initial state
    if (!el.classList.contains("reveal-initialized")) {
      el.classList.add("revealable");
      el.classList.add("reveal-initialized");
      observer.observe(el);
    }
  });

  // expose for debugging
  return {
    disconnect: () => observer.disconnect(),
  };
}
