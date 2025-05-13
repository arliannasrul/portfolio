'use client';
import { useContext } from 'react';
import { ThemeContext } from '../app/ThemeContext'; 
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  // ambil state dan function dari Context
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="mt-2 w-14 h-8 flex items-center
                 bg-gray-300 dark:bg-gray-700
                 rounded-full p-1 transition-colors duration-300"
    >
      <div
        className={`w-6 h-6 bg-white dark:bg-black rounded-full
                    shadow-md transform transition-transform duration-300
                    ${isDark ? 'translate-x-6' : 'translate-x-0'}
                    flex items-center justify-center`}
      >
        {isDark
          ? <Moon size={16} className="text-slate-400" />
          : <Sun  size={16} className="text-yellow-500" />}
      </div>
    </button>
  );
}
