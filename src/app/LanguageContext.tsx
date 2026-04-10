'use client';

import { ReactNode, createContext, useState, useEffect, useContext } from 'react';

type Language = 'id' | 'en';

interface LanguageContextProps {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextProps>({
  lang: 'id',
  toggleLanguage: () => {},
  t: (key: string) => key,
});

const translations: Record<'id' | 'en', Record<string, string>> = {
  id: {
    // Navbar
    'Home': 'Beranda',
    'Tech Stack': 'Keahlian',
    'Experience': 'Pengalaman',
    'Portfolio': 'Portofolio',
    'Contact': 'Kontak',

    // Page.jsx - Intro
    'About Gw': 'Tentang Saya',
    'intro.desc': 'Halo, saya Nasrul, mahasiswa Sistem Informasi semester 6 di Malang yang berfokus pada Web Development. Saya memiliki minat besar dalam membangun aplikasi web yang efisien dan fungsional. Dengan latar belakang akademis yang kuat dan ketertarikan mendalam pada inovasi digital, saya berkomitmen untuk terus mengembangkan solusi teknologi yang relevan bagi kebutuhan masa depan.',
    'Get in Touch!': 'Hubungi Saya!',
    'Let\'s be friends.': 'Mari berteman denganku.',
    'Download Resume': 'Unduh Resume',
    'I\'m a': 'I\'m a', // typically untranslated or 'Saya seorang' - let's keep it 'I\'m a' as it matches the spinning text in English
    
    // Page.jsx - Sections
    'Pengalaman': 'Pengalaman',
    'Lihat Lebih Banyak': 'Lihat Lebih Banyak',
    
    // Footer
    'Hubungi Saya': 'Hubungi Saya',
    'Kota Malang, Jawa Timur': 'Kota Malang, Jawa Timur',
    'Kategori': 'Kategori',
    'Beranda': 'Beranda',
    'Tentang Saya': 'Tentang Saya',
    'Portofolio': 'Portofolio',
    'Keahlian': 'Keahlian',
    'Kontak': 'Kontak',
    'Sosial Media': 'Sosial Media',
    'Dibuat dengan': 'Dibuat dengan',
    'oleh': 'oleh',
    'Menggunakan': 'Menggunakan',
    
    // Timeline Tabs
    'Education': 'Education',
    'Pengalaman & Kontribusi': 'Pengalaman & Kontribusi',
    
    // Timeline Edu
    'Universitas Merdeka Malang': 'Universitas Merdeka Malang',
    'S1 - Sistem Informasi': 'S1 - Sistem Informasi',
    '2023 - Sekarang': '2023 - Sekarang',
    'edu.univ.desc': 'Fokus studi meliputi penguasaan Full-stack Web Development & Mobile Development, perancangan sistem, dan optimasi algoritma. Melalui dedikasi penuh terhadap kurikulum Sistem Informasi, saya mampu mengintegrasikan teori rekayasa perangkat lunak ke dalam implementasi praktis, dan juga saya berhasil meraih IPK 3.91, yang mencerminkan komitmen saya terhadap keunggulan teknis dan akademis.',
    'SMK Negeri 4 Malang': 'SMK Negeri 4 Malang',
    'Multimedia': 'Multimedia',
    '2019 - 2023': '2019 - 2023',
    'edu.smk.desc': 'Mempelajari tentang multimedia, seperti desain grafis, video editing, UI/UX dan animasi 2D. Disini saya belajar banyak tentang dunia multimedia, dan saya juga belajar untuk bekerja sama dengan tim dalam membuat konten yang berkualitas. Saya juga belajar untuk berkomunikasi dengan baik kepada atasan dan rekan kerja, serta belajar untuk mengatur waktu dengan baik dalam menyelesaikan tugas yang diberikan.',

    // Timeline ReExp
    'Kerja Kelompok': 'Kerja Kelompok',
    'exp.kerja.desc': 'Berdiksusi dengan teman-teman tentang tugas yang diberikan dosen, dan mengerjakan tugas tersebut secara bersama-sama. Saya juga sering membantu teman-teman saya dalam mengerjakan tugas yang diberikan dosen, dan saya juga sering meminta bantuan kepada teman-teman saya jika saya mengalami kesulitan dalam mengerjakan tugas tersebut.',
    'Amazing Malang': 'Amazing Malang',
    'Video Editor, Content Designer': 'Video Editor, Content Designer',
    'Februari 2022 - Januari 2023': 'Februari 2022 - Januari 2023',
    'exp.intern.desc': 'Praktek kerja lapangan saat SMK di Amazing Malang, saya belajar banyak tentang dunia video editing dan content design. Saya belajar untuk mengedit video dengan baik dan benar, serta membuat konten seperti microblog seputar wisata di Malang raya yang tentunya menarik untuk dipublikasikan di media sosial. Selain itu, saya juga belajar untuk bekerja sama dengan tim dalam membuat konten yang berkualitas. Saya juga belajar untuk berkomunikasi dengan baik kepada atasan dan rekan kerja, serta belajar untuk mengatur waktu dengan baik dalam menyelesaikan tugas yang diberikan.',

    'Desa Pandanrejo': 'Desa Pandanrejo',
    'Mahasiswa KKN': 'Mahasiswa KKN',
    '19 Januari 2026 - 19 Februari 2026': '19 Januari 2026 - 19 Februari 2026',
    'exp.kkn.desc': 'Selama masa Kuliah Kerja Nyata (KKN) di Desa Pandanrejo, saya dipercaya sebagai Co-Sie PDD. Dalam peran ini, saya bertanggung jawab penuh atas manajemen publikasi, dokumentasi kegiatan, serta perancangan media informasi visual untuk setiap program kerja. Pengalaman ini mengasah kemampuan saya dalam mengomunikasikan nilai-nilai program kepada masyarakat luas melalui konten yang kreatif dan sistematis.',

    'Fakultas Teknologi Universitas Merdeka Malang': 'Fakultas Teknologi Informasi Universitas Merdeka Malang',
    'Volunteer PKKMB': 'Volunteer PKKMB',
    '3 September 2025 - 4 September 2025': '3 September 2025 - 4 September 2025',
    'exp.pkkmb.desc': 'Berperan sebagai Co-Humas dalam kegiatan PKKMB Fakultas Teknologi Informasi Universitas Merdeka Malang 2025. Bertanggung jawab dalam mengelola alur informasi dan komunikasi antara panitia dengan mahasiswa baru. Pengalaman ini mengasah kemampuan saya dalam manajemen waktu, koordinasi tim lintas divisi, serta teknik komunikasi massa yang efektif dalam lingkungan skala besar',

    'Shopeefood': 'Shopeefood',
    'Mitra Driver': 'Mitra Driver',
    'Mei 2025 - Sekarang': 'Mei 2025 - Sekarang',
    'exp.shopee.desc': 'Bekerja paruh waktu sebagai mitra driver ShopeeFood telah mengasah kemampuan saya dalam manajemen waktu secara efektif di tengah kesibukan akademik. Dalam peran ini, saya mengembangkan keterampilan komunikasi interpersonal saat berinteraksi dengan pelanggan dan mitra merchant, serta melatih kesabaran dalam menghadapi situasi lapangan yang dinamis. Pengalaman ini juga membentuk kemandirian finansial dan kedisiplinan saya dalam mengelola manajemen keuangan untuk mendukung biaya pendidikan secara mandiri.',

    'Maxim': 'Maxim',
    'Februari 2024 - Sekarang': 'Februari 2024 - Sekarang',
    'exp.maxim.desc': 'Bekerja paruh waktu sebagai driver Maxim, selama bekerja paruh waktu sebagai driver maxim saya belajar untuk mengatur waktu dengan baik dikarenakan saya harus membagi waktu antara kuliah dan bekerja. Selain itu, saya juga belajar untuk berkomunikasi dengan baik kepada penumpang yang saya antar, dan saya juga belajar untuk bersabar dalam menghadapi berbagai macam karakter penumpang yang saya antar. Saya juga belajar untuk mengatur keuangan dengan baik, karena saya harus mengatur pengeluaran dan pemasukan selama bekerja paruh waktu sebagai driver maxim untuk mendukung biaya pendidikan secara mandiri.',

    // Portfolio List
    'Proyek Saya': 'Proyek Saya',
    'Lihat Lebih Banyak di GitHub': 'Lihat Lebih Banyak di GitHub',

    // Rotating Text
    'Mahasiswa Sistem Informasi': 'Mahasiswa Sistem Informasi',
    'Web Developer': 'Web Developer',
    'Tech Enthusiast': 'Tech Enthusiast',
    'Gamer': 'Gamer',

    // TechStack
    'Website Development': 'Pengembangan Website',

    // Music Player
    'Gagal memuat lagu:': 'Gagal memuat lagu:',
    'Sembunyikan Playlist': 'Sembunyikan Playlist',
    'Tampilkan Playlist': 'Tampilkan Playlist',
  },
  en: {
    // Navbar
    'Home': 'Home',
    'Tech Stack': 'Tech Stack',
    'Experience': 'Experience',
    'Portfolio': 'Portfolio',
    'Contact': 'Contact',

    // Page.jsx - Intro
    'About Gw': 'About Me',
    'intro.desc': 'Hello, I\'m Nasrul, a 6th-semester Information Systems student in Malang focusing on Web Development. I have a huge interest in building efficient and functional web applications. With a strong academic background and a deep passion for digital innovation, I am committed to continuously developing technology solutions relevant to future needs.',
    'Get in Touch!': 'Get in Touch!',
    'Let\'s be friends.': 'Let\'s be friends.',
    'Download Resume': 'Download Resume',
    'I\'m a': 'I\'m a',
    
    // Page.jsx - Sections
    'Pengalaman': 'Experience',
    'Lihat Lebih Banyak': 'See More',
    
    // Footer
    'Hubungi Saya': 'Contact Me',
    'Kota Malang, Jawa Timur': 'Malang City, East Java',
    'Kategori': 'Categories',
    'Beranda': 'Home',
    'Tentang Saya': 'About Me',
    'Portofolio': 'Portfolio',
    'Keahlian': 'Skills',
    'Kontak': 'Contact',
    'Sosial Media': 'Social Media',
    'Dibuat dengan': 'Made with',
    'oleh': 'by',
    'Menggunakan': 'Using',
    
    // Timeline Tabs
    'Education': 'Education',
    'Pengalaman & Kontribusi': 'Experience & Contributions',
    
    // Timeline Edu
    'Universitas Merdeka Malang': 'Universitas Merdeka Malang',
    'S1 - Sistem Informasi': 'Bachelor - Information Systems',
    '2023 - Sekarang': '2023 - Present',
    'edu.univ.desc': 'My studies focus on Full-stack Web & Mobile Development, system design, and algorithm optimization. Through full dedication to the Information Systems curriculum, I can integrate software engineering theory into practical implementations. I also achieved a GPA of 3.91, reflecting my commitment to technical and academic excellence.',
    'SMK Negeri 4 Malang': 'SMK Negeri 4 Malang',
    'Multimedia': 'Multimedia',
    '2019 - 2023': '2019 - 2023',
    'edu.smk.desc': 'Studied multimedia, including graphic design, video editing, UI/UX, and 2D animation. I learned a lot about the multimedia world and how to collaborate with a team to create high-quality content. I also learned effective communication with superiors and colleagues, as well as good time management in completing tasks.',

    // Timeline ReExp
    'Kerja Kelompok': 'Group Work',
    'exp.kerja.desc': 'Discussing assignments given by lecturers with friends, and completing those assignments together. I also frequently help my friends with their assignments, and I ask them for help when I encounter difficulties with my own tasks.',
    'Amazing Malang': 'Amazing Malang',
    'Video Editor, Content Designer': 'Video Editor, Content Designer',
    'Februari 2022 - Januari 2023': 'February 2022 - January 2023',
    'exp.intern.desc': 'During my vocational high school internship at Amazing Malang, I learned a lot about the world of video editing and content design. I learned how to edit videos properly and create content like microblogs about tourism in the greater Malang area, making it engaging for social media publication. Additionally, I learned to work in a team to create quality content, communicate well with superiors and coworkers, and manage my time effectively to complete assigned tasks.',

    'Desa Pandanrejo': 'Pandanrejo Village',
    'Mahasiswa KKN': 'Community Service Student',
    '19 Januari 2026 - 19 Februari 2026': 'January 19, 2026 - February 19, 2026',
    'exp.kkn.desc': 'During the Community Service (KKN) program in Pandanrejo Village, I was entrusted as the Co-Coordinator of Publication, Decoration, and Documentation (PDD). I was fully responsible for publication management, event documentation, and designing visual information media for every program. This experience honed my ability to communicate program values to the broader community through creative and systematic content.',

    'Fakultas Teknologi Universitas Merdeka Malang': 'Faculty of Information Technology, Universitas Merdeka Malang',
    'Volunteer PKKMB': 'Orientation Volunteer (PKKMB)',
    '3 September 2025 - 4 September 2025': 'September 3, 2025 - September 4, 2025',
    'exp.pkkmb.desc': 'Acted as Co-Public Relations during the 2025 New Student Orientation (PKKMB) at the Faculty of Information Technology, Universitas Merdeka Malang. I was responsible for managing the flow of information and communication between the committee and new students. This experience improved my time management skills, cross-division team coordination, and effective mass communication techniques in a large-scale environment.',

    'Shopeefood': 'ShopeeFood',
    'Mitra Driver': 'Driver Partner',
    'Mei 2025 - Sekarang': 'May 2025 - Present',
    'exp.shopee.desc': 'Working part-time as a ShopeeFood driver partner has sharpened my ability to manage time effectively amidst a busy academic schedule. In this role, I developed interpersonal communication skills interacting with customers and merchant partners, as well as patience in handling dynamic real-world situations. This experience also built my financial independence and discipline in managing finances to support my own education.',

    'Maxim': 'Maxim',
    'Februari 2024 - Sekarang': 'February 2024 - Present',
    'exp.maxim.desc': 'Working part-time as a Maxim driver taught me great time management since I had to balance studying and working. Furthermore, I learned to coordinate and communicate effectively with passengers and developed patience when dealing with various passenger characteristics. It also taught me strong financial management since I must manage my daily expenses and income independently to support my education.',
    // Portfolio List
    'Proyek Saya': 'My Projects',
    'Lihat Lebih Banyak di GitHub': 'See More on GitHub',

    // Rotating Text
    'Mahasiswa Sistem Informasi': 'Information Systems Student',
    'Web Developer': 'Web Developer',
    'Tech Enthusiast': 'Tech Enthusiast',
    'Gamer': 'Gamer',

    // TechStack
    'Website Development': 'Website Development',

    // Music Player
    'Gagal memuat lagu:': 'Failed to load song:',
    'Sembunyikan Playlist': 'Hide Playlist',
    'Tampilkan Playlist': 'Show Playlist',
  }
};

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('id');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && (storedLang === 'id' || storedLang === 'en')) {
      setLang(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'id' ? 'en' : 'id';
    setLang(nextLang);
    localStorage.setItem('language', nextLang);
  };

  const t = (key: string) => {
    // If not mounted, wait for client hydation to prevent mismatch
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
