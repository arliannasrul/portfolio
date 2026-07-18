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
    demo: "https://mitraspace.arliannasrul.my.id",
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
    demo: "https://kkn.arliannasrul.my.id",
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
    demo: "https://smartreceipt.arliannasrul.my.id",
    github: "https://github.com/arliannasrul/Smart-Receipt",
    techStack: ["html", "css", "react", "tailwind", "next", "gemini", "googleCloud"],
  },
  {
    id: 4,
    title: { id: "MitraSpace v2 Admin CMS", en: "MitraSpace v2 " },
    description: {
      id: "Dashboard admin e-commerce premium terintegrasi Payment Gateway, Ekspedisi real-time, CRM, & RBAC.",
      en: "Premium e-commerce admin dashboard integrated with Payment Gateway, real-time Shipping API, CRM, & RBAC.",
    },
    fullDescription: {
      id: "MitraSpace Seller Center adalah dashboard administrasi e-commerce full-stack berbasis Laravel yang dirancang untuk mengelola inventaris, memproses order penjualan, melacak ekspedisi secara real-time, dan mengelola hubungan pelanggan (CRM). Fitur unggulan mencakup: integrasi Doku Payment Gateway untuk sinkronisasi status pembayaran otomatis, integrasi API KiriminAja untuk cek ongkir & generate nomor resi AWB, cetak label pengiriman dengan barcode dinamis, sistem Role-Based Access Control (RBAC) dengan 4 level hak akses, Login Google OAuth, serta navigasi SPA-like (PJAX) tanpa full page reload. Sistem ini terhubung langsung dengan MitraSpace Buyer Store melalui REST API publik.",
      en: "MitraSpace Seller Center is a full-stack Laravel-based e-commerce administration dashboard designed to manage inventory, process sales orders, track shipments in real-time, and handle customer relationships (CRM). Key features include: Doku Payment Gateway integration for automatic payment status sync, KiriminAja API for shipping rates & AWB generation, airway bill printing with dynamic barcodes, a Role-Based Access Control (RBAC) system with 4 access levels, Google OAuth login, and SPA-like navigation (PJAX) without full page reloads. This system is directly connected to the MitraSpace Buyer Store via a public REST API.",
    },
screenshots: [
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1784287380/Screenshot_2026-07-17_18205722_tygpam.png",
        info: {
          id: "Seller Center Dashboard: Menampilkan ringkasan matriks bisnis secara real-time seperti total pendapatan, nilai inventaris, peringatan stok rendah, serta log aktivitas keluar-masuk barang yang tersinkronisasi via API.",
          en: "Seller Center Dashboard: Displays real-time business matrix summaries such as total revenue, inventory value, low stock alerts, and inbound/outbound activity logs synced via API."
        }
      },
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1784287381/Screenshot_2026-07-17_18222522_r4xu4k.png",
        info: {
          id: "Manajemen Order & Logistik: Memantau pesanan pelanggan dari status baru hingga selesai. Terintegrasi penuh dengan layanan ekspedisi (seperti KiriminAja) untuk pembuatan dan pelacakan nomor resi (AWB) secara otomatis.",
          en: "Order & Logistics Management: Monitors customer orders from new to completed statuses. Fully integrated with shipping services (like KiriminAja) for automated airway bill (AWB) generation and tracking."
        }
      },
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1784285743/Screenshot_2026-07-17_16571722_vzlaaa.png",
        info: {
          id: "Buyer Store Front-End: Halaman utama toko (Buyer Store) dengan antarmuka (UI/UX) yang modern, bersih, dan responsif. Menyoroti fitur pelacakan pesanan mandiri dan jaminan pembayaran aman via DOKU.",
          en: "Buyer Store Front-End: The main store page (Buyer Store) featuring a modern, clean, and responsive UI/UX. Highlights self-service order tracking features and secure payment guarantees via DOKU."
        }
      },
      {
        url: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1784285744/Screenshot_2026-07-17_17000922_go0xsw.png",
        info: {
          id: "Katalog Produk Interaktif: Etalase pembeli yang menampilkan filter kategori dinamis, indikator sisa stok yang ditarik secara langsung (real-time) dari server, dan fungsi keranjang belanja yang cepat.",
          en: "Interactive Product Catalog: Buyer storefront displaying dynamic category filters, real-time remaining stock indicators pulled directly from the server, and quick shopping cart functionality."
        }
      }
    ],
    image: "https://res.cloudinary.com/dpxd2wzjr/image/upload/v1776864913/Screenshot_2026-04-22_192229_mmpaul.png",
    demo: "http://mitraspace-admin.vercel.app",
    github: "https://github.com/arliannasrul/inventory-admin",
    techStack: ["html", "css", "php", "laravel", "mysql", "javascript"],
  },
];

export default portfolioItems;