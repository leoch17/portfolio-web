"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa6";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          {/* NOMBRE Y ESPECIALIZACIÓN */}
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-700">
              {/* 2. Usamos la traducción para el saludo */}
              {t.hero.title}
            </span>
            <br></br>
            {/* 3. Agregamos 'key={language}' para que la animación se reinicie al cambiar de idioma */}
            <TypeAnimation
              sequence={[
                "Leonardo Chourio",
                1000,
                t.hero.roles.fullstack,
                1000,
                t.hero.roles.mobile,
                1000,
                t.hero.roles.web,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p> */}
          {/* BOTONES DE ENLACES */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="https://github.com/leoch17"
              target="_blank"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-500 to-blue-700 hover:bg-slate-200 text-white flex items-center justify-center gap-2"
            >
              Github <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/leonardo-chourio-387839201/"
              target="_blank"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-500 to-blue-700 hover:bg-slate-200 text-white flex items-center justify-center gap-2"
            >
              Linkedin <FaLinkedin />
            </Link>
            <a
              href={t.hero.cvPath} // 4. Link dinámico según el idioma del CV
              download
              className="p-[1px] inline-block w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-500 to-blue-700 mt-3 sm:mt-0"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-7 py-2 flex items-center justify-center gap-2 text-white">
                {/* 5. Texto del botón traducido */}
                {t.hero.downloadCv} <FaFilePdf />
              </span>
            </a>
          </div>
          {/*  */}
        </motion.div>
        {/* FOTO DE PERFIL DE LA WEB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* El contenedor circular se mantiene igual, pero hemos ajustado las clases de la imagen */}
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <img
              src="/images/hero-image.png"
              alt="hero image"
              //--- CAMBIOS AQUÍ ---
              //1. Usamos 'absolute inset-0' para que ocupe todo el div padre.
              //2. 'h-full w-full' asegura que llene el espacio.
              //3. ¡LA CLAVE! 'object-cover' hace que la imagen se escale para llenar el contenedor manteniendo su relación de aspecto (no se estira).
              className="absolute inset-0 h-full w-full object-cover rounded-full"
              //--- FIN CAMBIOS ---
              width={400} // Ajustamos a la medida máxima para mejor calidad
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
