"use client";
import React from "react";
import { SKILLS } from "../data/SkillsData";
import { useLanguage } from "./LanguageContext";

const SkillCard = ({ category, skills }) => (
  <div className="bg-[#0f1115] border border-white/10 rounded-2xl p-6 shadow-xl">
    <div className="flex items-center gap-2 mb-8">
      <div className="w-1 h-6 bg-sky-500 rounded-full" />
      <h3 className="text-xl font-semibold text-white">{category}</h3>
    </div>
    <div className="space-y-8">
      {skills.map((skill, index) => (
        <div key={index} className="group">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-sky-500 text-xl">
                {skill.icon}
              </div>
              <div>
                <h4 className="text-white font-medium leading-none">
                  {skill.name}
                </h4>
                {/* CORRECCIÓN 1: Renderizar el número + texto traducido */}
                <span className="text-xs text-slate-500">
                  {skill.yearsCount} {skill.yearsText}
                </span>
              </div>
            </div>
            {/* CORRECCIÓN 2: Usar la propiedad traducida para el nivel */}
            <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-blue-500/30 text-blue-500 bg-blue-500/5">
              {skill.levelTranslated}
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"
              style={{ width: `${skill.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const { t } = useLanguage();

  const translatedSkills = SKILLS.map((cat) => ({
    // Asegúrate de que cat.id coincida con las llaves en LanguageContext
    category: t.skills.categories[cat.id] || cat.category,
    skills: cat.skills.map((s) => ({
      ...s,
      // Buscamos la traducción del nivel usando la llave (expert, advanced, etc.)
      levelTranslated: t.skills.levels[s.levelKey] || s.level,
      yearsText: t.skills.years,
    })),
  }));

  return (
    <section id="skills" className="py-20 bg-[#121212] text-center px-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-green-500/5 text-sky-500 text-xs mb-6">
        <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
        {t.skills.badge}
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {t.skills.title}
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto mb-16">
        {t.skills.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto text-left">
        {translatedSkills.map((item, idx) => (
          <SkillCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
