"use client";

import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // anima só uma vez
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
