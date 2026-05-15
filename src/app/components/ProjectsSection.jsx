"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "./LanguageContext"; // Importar el hook

const projectsData = [
  {
    id: 1,
    image: "/images/projects/1.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/leoch17/hankook",
    previewUrl: "https://hankook.vercel.app/",
  },
  {
    id: 2,
    image: "/images/projects/2.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/leoch17/yokohama-landing-nextjs",
    previewUrl: "https://yokohama-landing-nextjs.vercel.app/",
  },
  {
    id: 3,
    image: "/images/projects/3.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/leoch17/Ecommerce-Ruedas-La-Mundial",
    previewUrl: "/#projects",
  },
  {
    id: 4,
    image: "/images/projects/4.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/leoch17/Job-Portal-Grupo-La-Mundial",
    previewUrl: "/#projects",
  },
  // {
  //   id: 5,
  //   image: "/images/projects/5.png",
  //   tag: ["Todos", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   image: "/images/projects/6.png",
  //   tag: ["Todos", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // 1. Traducir y filtrar la data
  const translatedProjects = projectsData.map((project) => ({
    ...project,
    title: t.projects.items[project.id]?.title || "Project",
    description: t.projects.items[project.id]?.description || "",
  }));

  const filteredProjects = translatedProjects.filter(
    (project) =>
      project.tag.includes(tag === t.projects.tags.all ? "Todos" : tag),
    // Nota: El filtrado lógico conviene hacerlo sobre un valor estático o mapeado
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t.projects.title}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("Todos")}
          name={t.projects.tags.all}
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name={t.projects.tags.web}
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name={t.projects.tags.mobile}
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
