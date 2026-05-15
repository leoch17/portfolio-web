"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useLanguage } from "./LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage(); // 2. Extraer traducciones
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const TAB_DATA = [
    // {
    //   title: "Skills",
    //   id: "skills",
    //   content: (
    //     <ul className="list-disc pl-2">
    //       <li>Node.js</li>
    //       <li>Express</li>
    //       <li>PostgreSQL</li>
    //       <li>Sequelize</li>
    //       <li>JavaScript</li>
    //       <li>React</li>
    //     </ul>
    //   ),
    // },
    {
      title: "Educación",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>EF SET English Certificate B2</li>
          <li>Universidad Rafael Urdaneta</li>
        </ul>
      ),
    },
    {
      title: "Certificaciones",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Scrum Foundation Professional CERTIPROF</li>
          <li>Meta Frontend Developer Professional Certificate</li>
          <li>AWS Cloud Practitioner (CLF-C02)</li>
          <li>TypeScript: The Complete Developer&apos;s Guide</li>
          <li>Docker & Kubernetes: The Practical Guide</li>
          <li>Node.js, Express, MongoDB & More (The Complete Bootcamp)</li>
          <li>Next.js 14 & React — The Complete Guide</li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/cozy-coding.webp"
          width={500}
          height={500}
          alt="imagen coding-lazy seccion about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-base lg:text-lg text-justify">
            {t.about.description}
          </p>
          <div className="flex flex-row justify-start mt-8">
            {/* <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {t.about.tabs.education}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {t.about.tabs.certifications}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
