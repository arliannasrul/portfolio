// File: components/SplashScreen.jsx
"use client";
import { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

export default function SplashScreen() {
  const { progress } = useProgress();
  const [isFading, setIsFading] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      // Tunggu 400ms setelah 100% agar user sempat melihat barnya penuh
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 400);

      // Hapus komponen sepenuhnya dari DOM setelah animasi fade selesai (800ms)
      const unmountTimer = setTimeout(() => {
        setIsUnmounted(true);
      }, 1200);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress]);

  // Membersihkan DOM sepenuhnya jika sudah selesai loading
  if (isUnmounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-900 transition-opacity duration-800 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* KONTEN LOADING - Transisi murni fade-out */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none">
        
        {/* Teks Vibe Developer dengan font-mono dan tag </> */}
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center gap-3 font-mono">
          
          HELLO 
          <span className="text-[#6497B1] drop-shadow-[0_0_15px_rgba(100,151,177,0.5)] animate-pulse">
            WORLD
          </span>
          
        </h1>
        
        {/* Bungkus Progress Bar */}
        <div className="w-64 h-[3px] bg-slate-800 rounded-full mt-8 overflow-hidden drop-shadow-md relative">
          {/* Fill Progress Bar dengan efek glow di ujungnya */}
          <div 
            className="h-full bg-[#6497B1] transition-all duration-300 ease-out relative shadow-[0_0_10px_#6497B1]"
            style={{ width: `${progress}%` }}
          >
            {/* Titik terang di ujung progress bar (Glow Effect) */}
            <div className="absolute right-0 top-0 h-full w-2 bg-white opacity-80 shadow-[0_0_10px_white]"></div>
          </div>
        </div>
        
        <p className="mt-5 text-slate-400 text-xs tracking-[0.3em] uppercase font-medium drop-shadow-md flex items-center gap-2">
          Loading 
          <span className="text-[#6497B1] font-bold inline-block min-w-[3ch] text-right font-mono">
            {progress.toFixed(0)}
          </span>
          %
        </p>
      </div>
    </div>
  );
}