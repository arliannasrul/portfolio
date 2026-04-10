import { useLanguage } from "../../app/LanguageContext";

export default function TimelineReExp () {
  const { t } = useLanguage();
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

  <li>
    <hr className="bg-black dark:bg-white transition-colors duration-400"/>
    <div className="timeline-middle dark:text-white text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end text-start  md:mb-10">
    <h2 className=" lg:text-xl font-semibold text-black dark:text-white">{t('Desa Pandanrejo')}</h2>
    <div className="text-slate-600 dark:text-slate-400">{t('Mahasiswa KKN')}</div>
    <div className="font-mono italic text-sm pb-3 text-slate-500">{t('19 Januari 2026 - 19 Februari 2026')}</div>
      <p className="text-slate-900 dark:text-slate-200">
     {t('exp.kkn.desc')}
      </p>
    </div>
    <hr className="bg-black dark:bg-white transition-colors duration-400"/>
  </li>
  
    <li>
    <div className="timeline-middle dark:text-white text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start text-start mb-10 md:text-end">
      
      <h2 className=" lg:text-xl font-semibold text-black dark:text-white">{t('Fakultas Teknologi Universitas Merdeka Malang')}</h2>
      <div className="text-slate-600 dark:text-slate-400 ">{t('Volunteer PKKMB')}</div>
      <div className="font-mono italic text-sm pb-3 text-slate-500"> {t('3 September 2025 - 4 September 2025')}</div>
     
      <p className="text-slate-900 dark:text-slate-200">
    {t('exp.pkkmb.desc')}
      </p>
    </div>
    <hr className="bg-black dark:bg-white transition-colors duration-400"/>
  </li>

    <li>
    <hr className="bg-black dark:bg-white transition-colors duration-400"/>
    <div className="timeline-middle dark:text-white text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end text-start  md:mb-10">
    <h2 className=" lg:text-xl font-semibold text-black dark:text-white">{t('Shopeefood')}</h2>
    <div className="text-slate-600 dark:text-slate-400">{t('Mitra Driver')}</div>
    <div className="font-mono italic text-sm pb-3 text-slate-500">{t('Mei 2025 - Sekarang')}</div>
      <p className="text-slate-900 dark:text-slate-200">
     {t('exp.shopee.desc')}
      </p>
    </div>
    <hr className="bg-black dark:bg-white transition-colors duration-400"/>
  </li>
  <li>
    <div className="timeline-middle dark:text-white text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start text-start mb-10 md:text-end">
      
      <h2 className=" lg:text-xl font-semibold text-black dark:text-white">{t('Maxim')}</h2>
      <div className="text-slate-600 dark:text-slate-400 ">{t('Mitra Driver')} </div>
      <div className="font-mono italic text-sm pb-3 text-slate-500"> {t('Februari 2024 - Sekarang')}</div>
     
      <p className="text-slate-900 dark:text-slate-200">
    {t('exp.maxim.desc')}
      </p>
    </div>
    <hr className="bg-black dark:bg-white transition-colors duration-400"/>
  </li>
    <li>
    <hr className="bg-black dark:bg-white transition-colors duration-400" />
    <div className="timeline-middle dark:text-white text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end text-start  md:mb-10">
    <h2 className=" lg:text-xl font-semibold text-black dark:text-white">{t('Kerja Kelompok')}</h2>
    <div className="text-slate-600 dark:text-slate-400">Kerja Kelompok</div>
    <div className="font-mono italic text-sm pb-3 text-slate-500">{t('2023 - Sekarang')}</div>
      <p className="text-slate-900 dark:text-slate-200">
        {t('exp.kerja.desc')}
     </p>
     </div>
    <hr className="bg-black dark:bg-white transition-colors duration-400"/>
  </li>
    <li>
    <div className="timeline-middle dark:text-white text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start text-start mb-10 md:text-end">
      
      <h2 className=" lg:text-xl font-semibold text-black dark:text-white">{t('Amazing Malang')}</h2>
      <div className="text-slate-600 dark:text-slate-400 ">{t('Video Editor, Content Designer')}</div>
      <div className="font-mono italic text-sm pb-3 text-slate-500">{t('Februari 2022 - Januari 2023')}</div>
     
      <p className="text-slate-900 dark:text-slate-200">
        {t('exp.intern.desc')}
    
      </p>
    </div>
    <hr className="bg-black dark:bg-white transition-colors duration-400"/>
  </li>


  
  
</ul>

    )
}