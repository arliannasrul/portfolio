// src/components/PortfolioList.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText/SplitText';
import FadeContent from '@/animations/FadeContent/FadeContent';
import { useLanguage } from '../app/LanguageContext';
import portfolioItems from '../assets/data/portfolioItems.js';
import PortfolioCard from './PortfolioCard';

export default function PortfolioList() {
  const { lang, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="portfolio" className="relative py-20 text-center bg-white dark:bg-slate-900 transition-colors pt-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[30%] h-[30%] bg-[#6497B1]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="pb-12">
          <SplitText
            text={t('Proyek Saya')}
            className="text-3xl lg:text-5xl xl:text-6xl text-[#6497B1] font-bold text-center"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
          />
          <FadeContent blur={true} duration={1000} delay={500}>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              {lang === 'id' 
                ? 'Proyek sederhana yang pernah dan sedang saya kerjakan.' 
                : 'Simple projects that I have worked on and am currently working on.'}
            </p>
          </FadeContent>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="flex justify-center pt-20">
            <a
              href="https://github.com/arliannasrul?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 overflow-hidden font-medium text-[#6497B1] bg-transparent border-2 border-[#6497B1] rounded-full transition-all duration-300 hover:text-white"
            >
              <span className="absolute inset-0 w-full h-full bg-[#6497B1] origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 -z-10" />
              <span className="relative z-10">{t('Lihat Lebih Banyak di GitHub')}</span>
            </a>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
