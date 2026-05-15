"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { t } = useLanguage();

  // 2. Definimos los links dentro para que se actualicen cuando 't' cambie
  const navLinks = [
    { title: t.nav[0], path: "/" },
    { title: t.nav[1], path: "#about" },
    { title: t.nav[2], path: "#skills" },
    { title: t.nav[3], path: "#projects" },
    { title: t.nav[4], path: "#contact" },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <img
            src="/images/code-logo-web.png"
            alt="Logo de programación"
            width={50} // Ajusta según necesites
            height={50}
          />
        </Link>
        <div className="mobile-menu block md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            {/* El botón de idioma al final */}
            <LanguageSwitcher />
          </ul>
        </div>
      </div>
      {/* 4. Pasamos los navLinks actualizados al menú móvil */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
