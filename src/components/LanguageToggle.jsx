'use client';
import { useContext } from 'react';
import { LanguageContext } from '../app/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useContext(LanguageContext);
  const isEn = lang === 'en';

  return (
    <button
      onClick={toggleLanguage}
      className="mt-2 w-16 h-8 flex items-center
                 bg-gray-300 dark:bg-gray-700
                 rounded-full p-1 transition-colors duration-300 relative"
    >
      <div
        className={`w-7 h-6 bg-white dark:bg-black rounded-full
                    shadow-md transform transition-transform duration-300
                    ${isEn ? 'translate-x-7' : 'translate-x-0'}
                    flex items-center justify-center absolute left-1`}
      >
        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
          {isEn ? 'EN' : 'ID'}
        </span>
      </div>
      
      {/* Background Text Labels */}
      <div className="w-full flex justify-between px-1.5 pointer-events-none">
        <span className={`text-[10px] font-bold ${!isEn ? 'text-transparent' : 'text-gray-500 dark:text-gray-400'}`}>ID</span>
        <span className={`text-[10px] font-bold ${isEn ? 'text-transparent' : 'text-gray-500 dark:text-gray-400'}`}>EN</span>
      </div>
    </button>
  );
}
