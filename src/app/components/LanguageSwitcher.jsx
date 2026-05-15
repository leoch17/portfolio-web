"use client";
import React from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useLanguage } from "./LanguageContext"; // Importa el hook

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage(); // Usa el contexto global

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 border border-sky-500/50 rounded-full bg-sky-500/10 text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300 group"
    >
      <HiOutlineGlobeAlt className="text-lg group-hover:rotate-12 transition-transform" />
      <span className="text-sm font-bold tracking-wider">{language}</span>
    </button>
  );
};

export default LanguageSwitcher;
