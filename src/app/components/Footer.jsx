"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext"; // Importar el hook

const Footer = () => {
  const { t } = useLanguage(); // Extraer traducciones
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      {/* Cambiamos p-12 por px-4 py-8 para dar más espacio horizontal en móvil */}
      {/* Añadimos items-center para que el texto y el logo estén alineados verticalmente */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <img
            src="/images/code-logo-web.png"
            alt="Logo de programación"
            width={50}
            height={50}
            className="w-[40px] h-[40px] md:w-[60px] md:h-[50px]" // Logo un poco más pequeño en móvil
          />
        </Link>

        {/* text-right asegura que el texto se empuje hacia el borde derecho */}
        <p className="text-slate-600 text-sm md:text-base text-right">
          {t.footer.title}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
