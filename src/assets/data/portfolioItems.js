// src/assets/data/portfolioItems.js
const portfolioItems = [
  {
    id: 1,
    title: { id: "MitraSpace Admin CMS", en: "MitraSpace Admin CMS" },
    description: { 
      id: "Platform e-commerce Multi-Tenant dengan rekomendasi produk berbasis AI.", 
      en: "Multi-Tenant e-commerce platform with AI-powered product recommendations." 
    },
    fullDescription: {
      id: "MitraSpace Admin CMS adalah solusi Multi-Tenant canggih untuk mengelola banyak toko online dari satu dasbor pusat. Fitur utama mencakup integrasi Google Gemini AI untuk personalisasi produk, analitik real-time dengan Recharts, dan sistem inventaris variasi produk yang kompleks. Dibangun menggunakan Next.js 14, TypeScript, dan Prisma untuk performa skala cloud.",
      en: "MitraSpace Admin CMS is a sophisticated Multi-Tenant solution to manage multiple online stores from a single dashboard. Key features include Google Gemini AI integration for personalization, real-time analytics with Recharts, and a complex product variation system. Built using Next.js 14, TypeScript, and Prisma for cloud-scale performance."
    },
    screenshots: [
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864913/Screenshot_2026-04-22_192229_mmpaul.png",
        info: {
          id: "Dashboard Multi-Tenant: Kelola banyak toko secara independen namun terpusat. Dilengkapi dengan Real-Time Analytics menggunakan Recharts untuk memantau pendapatan dan tren penjualan secara instan.",
          en: "Multi-Tenant Dashboard: Manage multiple stores independently but centrally. Equipped with Real-Time Analytics using Recharts to monitor revenue and sales trends instantly."
        }
      },
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864915/Screenshot_2026-04-22_191734_gorsxp.png",
        info: {
          id: "Tech Stack & AI: Dibangun dengan Next.js 14 (App Router), Prisma, dan PostgreSQL. Terintegrasi dengan Google Gemini AI untuk rekomendasi produk cerdas dan sistem variasi produk kompleks (Warna, Ukuran, RAM).",
          en: "Tech Stack & AI: Built with Next.js 14 (App Router), Prisma, and PostgreSQL. Integrated with Google Gemini AI for smart product recommendations and complex variation systems (Color, Size, RAM)."
        }
      }
    ],
    image: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864915/Screenshot_2026-04-22_191734_gorsxp.png",
    demo: "https://toko-admin-five.vercel.app/",
    github: "https://github.com/arliannasrul/toko-admin", 
    techStack: ["html", "css", "react", "tailwind", "next", "googleCloud", "gemini"],
  },
  {
    id: 2,
    title: { id: "Digital Portal KKN Kelompok 5 Desa Pandanrejo", en: "Digital Portal of Group 5 KKN of Pandanrejo Village" },
    description: { 
      id: "Portal edukasi pengelolaan sampah plastik dan mesin pirolisis berbasis AI.", 
      en: "Educational portal for plastic waste management and AI-powered pyrolysis." 
    },
    fullDescription: {
      id: "Platform inovatif untuk mendokumentasikan program KKN Desa Pandanrejo, fokus pada teknologi Mesin Pirolisis. Menggunakan Next.js 15 dan Genkit AI untuk ringkasan dokumen otomatis. Menghadirkan antarmuka premium dengan galeri interaktif untuk memudahkan masyarakat memahami data teknis yang kompleks.",
      en: "An innovative platform documenting the KKN program in Pandanrejo Village, focusing on Pyrolysis Machine technology. Utilizes Next.js 15 and Genkit AI for automated document summarization. Features a premium interface with interactive galleries to help the public understand complex technical data."
    },
    screenshots: [
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864919/Screenshot_2026-04-22_203414_n08jbk.png",
        info: {
          id: "Edukasi & Dokumentasi: Mempublikasikan hasil program KKN dengan fokus pada konversi limbah plastik menjadi bahan bakar alternatif (Mesin Pirolisis). Menggunakan Next.js 15 untuk performa maksimal.",
          en: "Education & Documentation: Publishing KKN program results focusing on plastic waste conversion into alternative fuel (Pyrolysis Machine). Using Next.js 15 for maximum performance."
        }
      },
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864921/Screenshot_2026-04-22_203254_hbudrm.png",
        info: {
          id: "AI Summarization: Integrasi Google Gemini AI via Genkit untuk merangkum dokumen riset PDF secara otomatis. Menghadirkan UI/UX premium dengan galeri interaktif yang mendukung pinch-to-zoom.",
          en: "AI Summarization: Google Gemini AI integration via Genkit for automated PDF research document summarization. Features premium UI/UX with interactive galleries supporting pinch-to-zoom."
        }
      }
    ],
    image: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864919/Screenshot_2026-04-22_203414_n08jbk.png",
    demo: "https://kkn-kelompok5-desapandanrejo.vercel.app/",
    github: "https://github.com/arliannasrul/kkn-kelompok5-desapandanrejo",
    techStack: ["html", "css", "react", "tailwind", "next", "gemini"],
  },
  {
    id: 3,
    title: { id: "Smart Receipt Hub AI", en: "Smart Receipt Hub AI" },
    description: { 
      id: "Aplikasi manajemen pengeluaran dengan ekstraksi data struk otomatis via AI.", 
      en: "Expense management app with automated receipt data extraction via AI." 
    },
    fullDescription: {
      id: "Smart Receipt Hub mengotomatisasi pencatatan keuangan menggunakan Google Gemini AI untuk mengekstraksi data dari foto struk secara instan. Mengutamakan privasi dengan model Self-Hosted Storage, di mana data disimpan langsung di Google Drive pribadi pengguna melalui integrasi API Google Cloud.",
      en: "Smart Receipt Hub automates financial tracking using Google Gemini AI to instantly extract data from receipt photos. Prioritizes privacy with a Self-Hosted Storage model, where data is stored directly in the user's personal Google Drive via Google Cloud API integration."
    },
    screenshots: [
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864916/Screenshot_2026-04-22_192044_soehzw.png",
        info: {
          id: "AI Vision Integration: Implementasi Computer Vision menggunakan Gemini AI untuk ekstraksi data struk belanja secara otomatis, mengurangi input manual secara signifikan.",
          en: "AI Vision Integration: Computer Vision implementation using Gemini AI for automated receipt data extraction, significantly reducing manual input."
        }
      },
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864914/Screenshot_2026-04-22_191957_qkch2g.png",
        info: {
          id: "Privacy-First Architecture: Data sensitif disimpan langsung di Google Drive pribadi pengguna via Google Drive API, bukan di database pusat, memastikan privasi penuh.",
          en: "Privacy-First Architecture: Sensitive data is stored directly in the user's personal Google Drive via Google Drive API, not a central database, ensuring full privacy."
        }
      }
    ],
    image: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864916/Screenshot_2026-04-22_192044_soehzw.png",
    demo: "https://smart-receipt-gamma.vercel.app/",
    github: "https://github.com/arliannasrul/Smart-Receipt",
    techStack: ["html", "css", "react", "tailwind", "next", "gemini", "googleCloud"],
  },
];

export default portfolioItems;