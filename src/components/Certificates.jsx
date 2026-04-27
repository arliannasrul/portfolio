"use client";
import React, { useState } from "react";
import { useLanguage } from "../app/LanguageContext";
import SplitText from "./SplitText/SplitText";
import AnimatedContent from "./AnimatedContent/AnimatedContent";
import certificates, { driveLink } from "../assets/data/certificates";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const Certificates = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="pt-16 pb-24 px-4 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <SplitText
            text={t("Sertifikat & Penghargaan") || "Sertifikat & Penghargaan"}
            className="text-3xl lg:text-4xl font-bold text-[#6497B1] mb-4"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
          />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            {t("Beberapa sertifikasi dan pelatihan yang telah saya selesaikan untuk menunjang keahlian profesional saya.")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center justify-center py-5">
          <div className="flex items-center justify-center w-full h-[300px] md:h-[450px] relative">
            <AnimatePresence mode="popLayout">
              {certificates.map((cert, index) => {
                const distance = index - activeIndex;
                const isCenter = distance === 0;
                const isLeft = distance === -1 || (activeIndex === 0 && index === certificates.length - 1);
                const isRight = distance === 1 || (activeIndex === certificates.length - 1 && index === 0);

                const isVisible = isCenter || isLeft || isRight;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.4,
                      scale: isCenter ? 1.1 : 0.8,
                      x: distance * 320, // Adjusted spacing for wider cards
                      zIndex: isCenter ? 30 : 10,
                      filter: isCenter ? "grayscale(0%)" : "grayscale(100%) brightness(40%)",
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute cursor-pointer"
                    onClick={() => isCenter ? setSelectedCert(cert) : setActiveIndex(index)}
                  >
                    <div className="w-[320px] md:w-[600px] aspect-[1.414/1] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain bg-slate-100 dark:bg-slate-800"
                      />
                      {isCenter && (
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <div className="bg-[#6497B1]/80 p-3 rounded-full">
                            <ZoomIn className="text-white w-8 h-8" />
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-16">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-[#6497B1] hover:text-white transition-all border border-slate-200 dark:border-slate-700"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {certificates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "w-10 bg-[#6497B1]" : "w-2 bg-slate-300 dark:bg-slate-700"}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-[#6497B1] hover:text-white transition-all border border-slate-200 dark:border-slate-700"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <AnimatedContent distance={20} direction="vertical">
            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-2.5 text-[#6497B1] border-2 border-[#6497B1] rounded-full font-semibold hover:bg-[#6497B1] hover:text-white transition-all duration-300 text-sm"
            >
              {t("Lihat Semua Sertifikat")}
            </a>
          </AnimatedContent>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-14 right-0 p-3 text-white hover:text-red-500 transition-colors"
                onClick={() => setSelectedCert(null)}
              >
                <X size={36} />
              </button>
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-white/10 object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
