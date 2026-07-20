"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div 
        className="relative flex items-center justify-center cursor-pointer group w-12 h-12 lg:w-14 lg:h-14"
        onClick={scrollToTop}
        title="Scroll to top"
      >
        <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 border border-[#6497B1]/20"></div>
        
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="transform -rotate-90 relative z-10 group-hover:scale-110 transition-transform duration-300">
          <circle
            cx="50"
            cy="50"
            r="44"
            className="stroke-slate-200 dark:stroke-slate-700"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            className="stroke-[#6497B1]"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-[#6497B1] dark:text-[#82c4e5] z-20 group-hover:scale-110 transition-transform duration-300">
          <ArrowUp size={22} strokeWidth={2.5} className="lg:w-6 lg:h-6" />
        </div>
      </div>
    </div>
  );
}
