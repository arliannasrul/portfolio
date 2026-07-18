"use client";

import React, { forwardRef, useRef, useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./AnimatedBeam";
import Icons from "../../assets/data/Icons";
import { useInView } from "framer-motion";
import { useLanguage } from "../../app/LanguageContext";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-20 flex size-14 hover:scale-150 transition-all lg:size-20 duration-300 items-center justify-center rounded-full border-2 bg-white dark:bg-slate-700 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null); // Center
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);
  
  // TAMBAHAN REF BARU UNTUK PRISMA DAN NEON
  const div12Ref = useRef<HTMLDivElement>(null); 
  const div13Ref = useRef<HTMLDivElement>(null); 

  const isInView = useInView(containerRef, { once: true });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVisible(true);
    }
  }, [isInView]);

  return (
    <div
      className="relative flex lg:h-[600px] h-[400px] w-full items-center justify-center overflow-hidden p-16"
      ref={containerRef}
    >
      <div className="flex size-full lg:h-[500px] h-[300px] max-h-[700px] max-w-4xl flex-col items-stretch justify-between gap-12">
        
        {/* BARIS ATAS (5 Items) - Prisma masuk ke sini */}
        <div className="flex flex-row items-center lg:justify-between justify-center gap-8 sm:gap-16 md:gap-24 lg:gap-32">
          <Circle ref={div1Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000`}>
            <a href="https://drive.google.com/file/d/1FrhowE9yQ7YxdpwD0sXElxxkjQNg9bJ_/view?usp=sharing" target="_blank" className="lg:grayscale-100 hover:grayscale-0 active:grayscale-0 flex flex-row cursor-pointer transition-all">
              <Icons.html />
              <Icons.css />
            </a>
          </Circle>
          <Circle ref={div10Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-200`}>
            <a href="https://playvalorant.com/id-id/" target="_blank" className="lg:grayscale-100 hover:grayscale-0 active:grayscale-0">
              <Icons.valorant />
            </a>
          </Circle>
          
          {/* PRISMA DI PINDAH KE ATAS TENGAH */}
          <Circle ref={div12Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-900`}>
            <a href="https://www.prisma.io/" target="_blank" className="dark:text-white lg:text-gray-500 hover:text-black dark:hover:text-white active:grayscale-0 lg:dark:text-gray-400">
              <Icons.prisma />
            </a>
          </Circle>

          <Circle ref={div11Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-400`}>
            <a href="https://nextjs.org/" target="_blank" className="lg:text-gray-500 hover:text-black dark:hover:text-white active:grayscale-0 lg:dark:text-gray-400">
              <Icons.next />
            </a>
          </Circle>
          <Circle ref={div5Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-600`}>
            <a href="https://drive.google.com/file/d/1cG3Vyf9bljRQ87CLUOr9quMm1w5m4BGM/view?usp=sharing" target="_blank" className="lg:grayscale-100 hover:grayscale-0 active:grayscale-0">
              <Icons.javascript />
            </a>
          </Circle>
        </div>

        {/* BARIS TENGAH (Hanya Tailwind, Center, dan React) */}
        <div className="flex flex-row items-center justify-between gap-12 sm:gap-20 md:gap-34 lg:gap-40">
          <Circle ref={div2Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-800`}>
            <a href="https://tailwindcss.com/" target="_blank" className="lg:grayscale-100 hover:grayscale-0 active:grayscale-0">
              <Icons.tailwind />
            </a>
          </Circle>
          
          {/* CENTER NODE */}
          <Circle ref={div4Ref} className="scale-150 rounded-xl">
            <h2 className="text-[7px] lg:text-[11px] font-semibold text-center">
              {t("Website Development")}
            </h2>
          </Circle>

          <Circle ref={div6Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-1000`}>
            <a href="https://react.dev/" target="_blank" className="lg:grayscale-100 hover:grayscale-0 active:grayscale-0">
              <Icons.react />
            </a>
          </Circle>
        </div>

        {/* BARIS BAWAH (5 Items) - Neon masuk ke sini */}
        <div className="flex flex-row items-center lg:justify-between justify-center gap-8 sm:gap-16 md:gap-24 lg:gap-32">
          <Circle ref={div3Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-1200`}>
            <a href="https://ai.google.dev/gemini-api/docs?hl=id#javascript" target="_blank" className="lg:grayscale-100 hover:grayscale-0 active:grayscale-0">
              <Icons.gemini />
            </a>
          </Circle>
          <Circle ref={div7Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-1400`}>
            <a href="https://cloud.google.com/" target="_blank" className="lg:grayscale-100 hover:grayscale-0 active:grayscale-0">
              <Icons.googleCloud />
            </a>
          </Circle>
          
          {/* NEON DI PINDAH KE BAWAH TENGAH */}
          <Circle ref={div13Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-1100`}>
            <a href="https://neon.tech/" target="_blank" className="dark:text-white lg:text-gray-500 lg:grayscale-100 hover:text-black  hover:grayscale-0 active:grayscale-0 lg:dark:text-gray-400">
              <Icons.neon />
            </a>
          </Circle>

          <Circle ref={div8Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-1600`}>
            <a href="https://git-scm.com/" target="_blank" className="lg:grayscale-100 hover:grayscale-0 active:grayscale-0">
              <Icons.git />
            </a>
          </Circle>
          <Circle ref={div9Ref} className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000 delay-1800`}>
            <a href="https://github.com/arliannasrul" target="_blank" className="dark:text-white lg:text-gray-500 hover:text-black dark:hover:text-white active:grayscale-0 lg:dark:text-gray-400">
              <Icons.github />
            </a>
          </Circle>
        </div>
      </div>

      {/* SEMUA BEAMS LURUS KE CENTER (TIDAK ADA LENGKUNGAN/CURVATURE) */}
      
      {/* BEAMS ATAS */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div10Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div12Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div11Ref} toRef={div4Ref} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} reverse />

      {/* BEAMS TENGAH */}
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />

      {/* BEAMS BAWAH */}
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div13Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div4Ref} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={div9Ref} toRef={div4Ref} reverse />

    </div>
  );
}