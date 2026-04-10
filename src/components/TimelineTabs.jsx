"use client";
import { useState } from "react";
import { useLanguage } from "../app/LanguageContext";
import TimelineEdu from "./daisyui/TimelineEdu.jsx";
import TimelineReExp from "./daisyui/TimelineReExp.jsx";



export default function TimelineTabs() {
    const [activeTab, setActiveTab] = useState ("related experience")
    const { t } = useLanguage();

    return (
        <div className="max-w-5xl  mx-auto px-4 py-8">
            <div className="flex justify-center pb-14 w-full gap-2 sm:gap-4 px-2"> 
                <button onClick={() => setActiveTab ("education")} className={`text-xl sm:text-2xl w-1/2 max-w-[360px] cursor-pointer px-2 sm:px-4 py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-200 border-2 border-[#6497B1] ${activeTab === "education" ? "bg-[#6497B1] text-white translate-y-[4px] shadow-none" : "text-gray-700 dark:text-gray-300 shadow-[0_4px_0_0_#6497B1] hover:-translate-y-1 hover:shadow-[0_6px_0_0_#6497B1] active:translate-y-[4px] active:shadow-none bg-white dark:bg-slate-950"} `}>
                {t('Education')}
                </button>
                <button onClick={() => setActiveTab ("related experience")} className={`text-xl sm:text-2xl w-1/2 max-w-[360px] cursor-pointer px-2 sm:px-4 py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-200 border-2 border-[#6497B1] ${activeTab === "related experience" ? "bg-[#6497B1] text-white translate-y-[4px] shadow-none" : "text-gray-700 dark:text-gray-300 shadow-[0_4px_0_0_#6497B1] hover:-translate-y-1 hover:shadow-[0_6px_0_0_#6497B1] active:translate-y-[4px] active:shadow-none bg-white dark:bg-slate-950"} `}>
                {t('Pengalaman & Kontribusi')}
                </button>
            </div>
            <div className=" min-h-[700px] transition-all ">
            {activeTab === "education" && <TimelineEdu />}
            {activeTab === "related experience" && <TimelineReExp />}
            
            </div>

        </div>
    )
}