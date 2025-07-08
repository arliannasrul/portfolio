// src/components/PortfolioList.jsx
"use client";

import React from 'react';
import SplitText from '@/components/SplitText/SplitText';
import FadeContent from '@/animations/FadeContent/FadeContent';
import portfolioItems from '../assets/data/portfolioItems.js';
import Icons from '@/assets/data/Icons.jsx'; // Impor komponen Icons

export default function PortfolioList() {
  return (
    <section id="portfolio" className="py-12 text-center bg-white dark:bg-slate-900 transition-colors pt-24">
      <div className="pb-6">
        <SplitText
          text="Proyek Saya"
          className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#6497B1] lg:px-7 font-semibold text-center "
          delay={90}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <FadeContent key={item.id} blur={true} duration={800} easing="ease-out" initialOpacity={0} delay={item.id * 100}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-100 dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div
                  className="w-full h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-[#6497B1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {item.techStack && item.techStack.map((tech, index) => {
                      const IconComponent = Icons[tech]; // Dapatkan komponen ikon dari objek Icons
                      return IconComponent ? (
                        <div key={index} className="flex-shrink-0">
                          <IconComponent />
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </a>
            </FadeContent>
          ))}
        </div>
      </div>

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="flex justify-center pt-12">
          <a
            href="https://github.com/arliannasrul?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-[#6497B1] border-2 border-[#6497B1] rounded-lg hover:bg-[#6497B1] hover:text-white transition-all duration-300 font-medium"
          >
            Lihat Lebih Banyak di GitHub
          </a>
        </div>
      </FadeContent>
    </section>
  );
}