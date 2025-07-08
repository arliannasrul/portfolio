// src/app/portfolio/page.jsx
"use client"; // Komponen halaman ini menggunakan fitur sisi klien.

import React from 'react';
import PortfolioList from '@/components/portfolioList'; // Sesuaikan path jika diperlukan
import Navbar from '@/components/Navbar'; // Mengasumsikan Navbar Anda diimpor di sini untuk tata letak keseluruhan
import MusicPlayer from '@/components/MusicPlayer'; // Mengasumsikan MusicPlayer Anda diimpor di sini

export default function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Navbar dan MusicPlayer kemungkinan sudah di-render oleh RootLayout Anda (src/app/layout.tsx). */}
      {/* Jika demikian, Anda bisa menghapus baris di bawah ini untuk menghindari rendering ganda. */}
      {/* <Navbar /> */}
      <main>
        <PortfolioList />
      </main>
      {/* <MusicPlayer /> */}
    </div>
  );
}