"use client";
import React, { useState, useRef } from "react"; // Añadimos useRef
import emailjs from "@emailjs/browser"; // Importamos la librería
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext"; // Importar el hook

const EmailSection = () => {
  const { t } = useLanguage(); // Extraer traducciones
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef(); // Referencia para el formulario

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reemplaza estos valores con los de tu cuenta de EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("Mensaje enviado:", result.text);
        setEmailSubmitted(true);
      },
      (error) => {
        console.error("Error al enviar:", error.text);
      },
    );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Background Glow */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 to-transparent rounded-full h-80 w-80 z-100 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-100">
        <h5 className="text-xl font-bold text-white my-2">{t.contact.title}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">{t.contact.description}</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/leoch17" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/leonardo-chourio-387839201/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">{t.contact.success}</p>
        ) : (
          /* Añadimos la ref={form} al formulario */
          <form className="flex flex-col" ref={form} onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="from_name"
                className="text-white block mb-2 text-sm font-medium"
              >
                {t.contact.labels.name}
              </label>
              <input
                name="from_name" // Este nombre debe coincidir con el que pongas en el template de EmailJS
                type="text"
                id="from_name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={t.contact.placeholders.name}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                {t.contact.labels.email}
              </label>
              <input
                name="email" // Importante: debe coincidir con {{email}} en EmailJS
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={t.contact.placeholders.email}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                {t.contact.labels.subject}
              </label>
              <input
                name="subject" // Debe coincidir con {{subject}}
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={t.contact.placeholders.subject}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                {t.contact.labels.message}
              </label>
              <textarea
                name="message" // Debe coincidir con {{message}}
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={t.contact.placeholders.message}
              />
            </div>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors"
            >
              {t.contact.labels.button}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
