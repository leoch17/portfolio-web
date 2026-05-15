"use client";
import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

const translations = {
  //ESPAÑOL
  ES: {
    // SECCION NAVBAR
    nav: ["Inicio", "Sobre mí", "Habilidades", "Proyectos", "Contacto"],
    //SECCION HERO
    hero: {
      title: "Hola, soy",
      downloadCv: "Descargar CV",
      cvPath: "/pdf/CV-Leonardo-Chourio-spa.pdf",
      roles: {
        fullstack: "FullStack Developer",
        mobile: "Mobile Developer",
        web: "Web Developer",
      },
    },
    //SECCION LOGROS
    achievements: {
      projects: "Proyectos",
      skills: "Tecnologías",
      certifications: "Certificaciones",
      years: "Años",
    },
    //SECCION ACERCA DE
    about: {
      title: "Acerca de mi",
      description:
        "Desarrollador Full-Stack especializado en React y Node.js con 3 años de experiencia construyendo productos digitales en producción para empresas comerciales. He liderado el desarrollo de e-commerce con múltiples sucursales, portales web corporativos y aplicaciones móviles, integrando APIs externas, autenticación de usuarios y optimización de rendimiento.",
      tabs: { education: "Educación", certifications: "Certificaciones" },
    },
    //SECCION HABILIDADES
    skills: {
      badge: "Mi Experiencia",
      title: "Competencias y Tecnologías",
      description:
        "Una descripción general completa de mis habilidades técnicas y niveles de competencia.",
      categories: {
        frontend: "Desarrollo Frontend",
        backend: "Desarrollo Backend & APIs",
        tools: "Herramientas y Otros",
      },
      levels: {
        expert: "Experto",
        advanced: "Avanzado",
        intermediate: "Intermedio",
      },
      years: "años",
    },
    //SECCION PROYECTOS
    projects: {
      title: "Mis Proyectos",
      tags: { all: "Todos", web: "Web", mobile: "Mobile" },
      items: {
        1: {
          title: "Sitio Web de Hankook",
          description:
            "Landing page de alto rendimiento desarrollada con Next.js. Presenta una experiencia de usuario optimizada para SEO y un diseño vibrante basado en la identidad corporativa de la marca, transmitiendo potencia y confianza técnica.",
        },
        2: {
          title: "Sitio Web de Yokohama",
          description:
            "Desarrollo de una landing page moderna utilizando Next.js para maximizar la velocidad de carga. Enfocada en productos premium y herencia automovilística, cuenta con un diseño totalmente responsivo y optimización SEO avanzada.",
        },
        3: {
          title: "E-commerce Ruedas La Mundial",
          description:
            "Plataforma especializada en el sector automotriz desarrollada con Laravel. Implementa una API robusta y escalable diseñada para ofrecer una experiencia de adquisición de productos fluida, priorizando el rendimiento y la gestión eficiente de datos de inventario.",
        },
        4: {
          title: "Portal de Empleos Grupo La Mundial",
          description:
            "Sistema integral de reclutamiento basado en una arquitectura monolítica con Laravel. Utiliza Vite para la optimización de recursos y Axios para una interactividad asíncrona avanzada, agilizando la gestión de vacantes y postulaciones en tiempo real.",
        },
        5: {
          title: "App Móvil de Suscripción Ruedas La Mundial",
          description:
            "Aplicación móvil para la gestión de suscripciones y fidelización automotriz. Integra un sistema de tokens acumulables mediante compras en el e-commerce, permitiendo el canje por servicios especializados dentro de una red de tiendas físicas.",
        },
        6: {
          title: "Chatbot para Automatizar Intranet de Polinter",
          description:
            "Implementación de un chatbot inteligente para la automatización de actualizaciones en la intranet corporativa. Incluye el desarrollo de una aplicación web interna dedicada a la optimización y gestión de procesos operativos críticos.",
        },
      },
    },
    //SECCION CORREO ELECTRÓNICO
    contact: {
      title: "Contáctame",
      description:
        "Actualmente estoy buscando nuevas oportunidades; mi bandeja de entrada está siempre abierta.",
      labels: {
        name: "Nombre",
        email: "Tu Correo Electrónico",
        subject: "Asunto",
        message: "Mensaje",
        button: "Enviar Mensaje",
      },
      placeholders: {
        name: "Juan Pérez",
        email: "ejemplo@correo.com",
        subject: "Escribe tu asunto",
        message: "Escribe tu mensaje aquí...",
      },
      success: "¡Correo electrónico enviado satisfactoriamente!",
    },
    //SECCION FOOTER
    footer: {
      title: "Todos los derechos reservados",
    },
  },

  //INGLES
  EN: {
    //SECCION NAVABR
    nav: ["Home", "About me", "Skills", "Projects", "Contact"],
    //SECCION HERO
    hero: {
      title: "Hi, I'm",
      downloadCv: "Download CV",
      cvPath: "/pdf/CV-Leonardo-Chourio-eng.pdf",
      roles: {
        fullstack: "FullStack Developer",
        mobile: "Mobile Developer",
        web: "Web Developer",
      },
    },
    //SECCION LOGROS
    achievements: {
      projects: "Projects",
      skills: "Technologies",
      certifications: "Certifications",
      years: "Years",
    },
    //SECCION ACERCA DE
    about: {
      title: "About me",
      description:
        "Full-Stack Developer specializing in React and Node.js with 3 years of experience building production-ready digital products for commercial enterprises. I have led the development of multi-storefront e-commerce platforms, corporate web portals, and mobile applications, integrating external APIs, user authentication, and performance optimization.",
      tabs: { education: "Education", certifications: "Certifications" },
    },
    //SECCION HABILIDADES
    skills: {
      badge: "My Experience",
      title: "Skills & Technologies",
      description:
        "A comprehensive overview of my technical skills and proficiency levels.",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend & API Development",
        tools: "Tools & Others",
      },
      levels: {
        expert: "Expert",
        advanced: "Advanced",
        intermediate: "Intermediate",
      },
      years: "years",
    },
    //SECCION PROYECTOS
    projects: {
      title: "My Projects",
      tags: { all: "All", web: "Web", mobile: "Mobile" },
      items: {
        1: {
          title: "Hankook Website",
          description:
            "High-performance landing page built with Next.js. It features an SEO-optimized user experience and a vibrant design based on the brand’s corporate identity, conveying strength and technical expertise.",
        },
        2: {
          title: "Yokohama Website",
          description:
            "Development of a modern landing page using Next.js to maximize loading speed. Focused on premium products and automotive heritage, it features a fully responsive design and advanced SEO optimization.",
        },
        3: {
          title: "E-commerce Ruedas La Mundial",
          description:
            "A platform specializing in the automotive sector, built using Laravel. It features a robust and scalable API designed to provide a seamless product purchasing experience, prioritizing performance and efficient inventory data management.",
        },
        4: {
          title: "Job Portal Grupo La Mundial",
          description:
            "A comprehensive recruitment system built on a monolithic architecture using Laravel. It uses Vite for resource optimization and Axios for advanced asynchronous interactivity, streamlining the management of job openings and applications in real time.",
        },
        5: {
          title: "Subscription Mobile App Ruedas La Mundial",
          description:
            "Mobile app for managing automotive subscriptions and loyalty programs. It features a system of tokens that can be earned through e-commerce purchases, allowing users to redeem them for specialized services within a network of physical stores.",
        },
        6: {
          title: "Chatbot to Automate the Intranet of Polinter",
          description:
            "Implementation of an intelligent chatbot to automate updates on the corporate intranet. This includes the development of an internal web application designed to optimize and manage critical operational processes.",
        },
      },
    },
    contact: {
      title: "Let's Connect",
      description:
        "I'm currently looking for new opportunities; my inbox is always open.",
      labels: {
        name: "Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        button: "Send Message",
      },
      placeholders: {
        name: "John Doe",
        email: "example@email.com",
        subject: "Enter the subject",
        message: "Write your message here...",
      },
      success: "Email sent successfully!",
    },
    //SECCION FOOTER
    footer: {
      title: "All rights reserved",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ES");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ES" ? "EN" : "ES"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
