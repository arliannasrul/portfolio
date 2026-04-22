// src/assets/data/portfolioItems.js
const portfolioItems = [
  {
    id: 1,
    title: { id: "Toko Online (Buyer & Admin)", en: "Online Store (Buyer & Admin)" },
    description: { 
      id: "Platform e-commerce lengkap dengan fitur dual-role untuk pembeli (belanja) dan admin (manajemen inventori/pesanan).", 
      en: "A complete e-commerce platform with dual-role features for buyers (shopping) and admins (inventory/order management)." 
    },
    image: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864915/Screenshot_2026-04-22_191734_gorsxp.png",
    screenshots: [
      "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864913/Screenshot_2026-04-22_192229_mmpaul.png",
      "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864915/Screenshot_2026-04-22_191734_gorsxp.png"
    ],
    demo: "https://toko-admin-five.vercel.app/", // Update this link if necessary
    github: "https://github.com/arliannasrul/toko-admin", 
    techStack: ["html", "css", "react", "tailwind", "next", "googleCloud", "gemini"],
  },
  {
    id: 2,
    title: { id: "Website KKN", en: "KKN Website" },
    description: { 
      id: "Website informasi dan dokumentasi untuk program Kuliah Kerja Nyata (KKN) mahasiswa.", 
      en: "Information and documentation website for the student community service program (KKN)." 
    },
    image: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864919/Screenshot_2026-04-22_203414_n08jbk.png",
    screenshots: [
      "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864919/Screenshot_2026-04-22_203414_n08jbk.png",
      "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864921/Screenshot_2026-04-22_203254_hbudrm.png"
    ],
    demo: "https://kkn-kelompok5-desapandanrejo.vercel.app/",
    github: "https://github.com/arliannasrul/kkn-kelompok5-desapandanrejo",
    techStack: ["html", "css", "react", "tailwind", "next"],
  },
  {
    id: 3,
    title: { id: "Smart Receipt Hub AI", en: "Smart Receipt Hub AI" },
    description: { 
      id: "Aplikasi manajemen struk pintar dengan fitur AI (Gemini) untuk ekstraksi data otomatis dari foto struk belanja.", 
      en: "Smart receipt management application with AI features (Gemini) for automatic data extraction from receipt photos." 
    },
    image: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864916/Screenshot_2026-04-22_192044_soehzw.png",
    screenshots: [
      "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864916/Screenshot_2026-04-22_192044_soehzw.png",
      "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864914/Screenshot_2026-04-22_191957_qkch2g.png"
    ],
    demo: "https://smart-receipt-gamma.vercel.app/",
    github: "https://github.com/arliannasrul/Smart-Receipt",
    techStack: ["html", "css", "react", "tailwind", "next", "gemini", "googleCloud"],
  },
];

export default portfolioItems;