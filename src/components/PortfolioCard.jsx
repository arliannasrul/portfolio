"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Icons from '@/assets/data/Icons.jsx';
import { useLanguage } from '../app/LanguageContext';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const PortfolioCard = ({ item }) => {
  const { lang, t } = useLanguage();
  const cardRef = useRef(null);
  
  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Image slideshow state
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen && item.screenshots && item.screenshots.length > 1) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % item.screenshots.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [item.screenshots, isPreviewOpen]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isPreviewOpen) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (item.screenshots) {
      setCurrentImgIndex((prev) => (prev + 1) % item.screenshots.length);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (item.screenshots) {
      setCurrentImgIndex((prev) => (prev - 1 + item.screenshots.length) % item.screenshots.length);
    }
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-[480px] group"
      >
        <div 
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/50 overflow-hidden transition-all duration-500 group-hover:border-[#6497B1]/50"
        >
          {/* Project Image Container with Slideshow */}
          <div 
            className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900 group/image cursor-zoom-in"
            onClick={() => setIsPreviewOpen(true)}
          >
            {item.screenshots ? (
              item.screenshots.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentImgIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            )}
            
            {/* Slideshow Indicators */}
            {item.screenshots && item.screenshots.length > 1 && (
              <div className="absolute bottom-3 right-4 flex gap-1.5 z-20">
                {item.screenshots.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentImgIndex === i ? "w-6 bg-[#6497B1]" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Subtle Overlay on hover */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Content Section */}
          <div 
            className="p-6 flex flex-col h-[calc(480px-208px)]"
            style={{ transform: "translateZ(40px)" }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-[#6497B1] transition-colors line-clamp-1">
              {item.title[lang] || item.title.id}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
              {item.description[lang] || item.description.id}
            </p>

            {/* Tech Stack Logos */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.techStack && item.techStack.map((tech, index) => {
                const IconComponent = Icons[tech];
                return IconComponent ? (
                  <motion.div 
                    key={index} 
                    className="p-1.5 bg-gray-100/50 dark:bg-slate-700/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-slate-600"
                    whileHover={{ y: -3, scale: 1.1 }}
                    title={tech}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <IconComponent />
                    </div>
                  </motion.div>
                ) : null;
              })}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#6497B1] text-white rounded-xl font-semibold text-sm hover:bg-[#4A7A96] transition-all active:scale-95 shadow-lg shadow-[#6497B1]/20"
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-white rounded-xl font-semibold text-sm hover:bg-gray-200 dark:hover:bg-slate-600 transition-all active:scale-95 border border-gray-200 dark:border-slate-600"
              >
                <Github size={16} />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6497B1]/20 to-transparent blur-2xl -z-10" />
        </div>
      </motion.div>

      {/* Image Preview Modal */}
      <AnimatePresence mode='wait'>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              key={currentImgIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full h-auto max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={item.screenshots ? item.screenshots[currentImgIndex] : item.image} 
                alt={item.title.id}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              
              {/* Navigation Buttons */}
              {item.screenshots && item.screenshots.length > 1 && (
                <>
                  <button 
                    className="absolute left-0 md:-left-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-md border border-white/10 active:scale-90"
                    onClick={handlePrev}
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    className="absolute right-0 md:-right-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-md border border-white/10 active:scale-90"
                    onClick={handleNext}
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              {/* Close Button */}
              <button 
                className="absolute -top-12 right-0 md:-top-10 md:-right-10 p-2 bg-white/10 hover:bg-red-500/80 text-white rounded-full transition-all backdrop-blur-md border border-white/10"
                onClick={() => setIsPreviewOpen(false)}
              >
                <X size={24} />
              </button>

              {/* Title Overlay in Modal */}
              <div className="absolute -bottom-16 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-bold mb-1">{item.title[lang] || item.title.id}</h3>
                <div className="flex justify-center gap-1.5 mt-2">
                  {item.screenshots?.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentImgIndex === i ? "w-8 bg-[#6497B1]" : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioCard;
