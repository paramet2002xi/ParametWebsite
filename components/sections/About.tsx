'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Bot, Code2, Users, Globe2, ArrowRight } from 'lucide-react';
import { useLanguage, t } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Design & UX': return <PenTool className="w-5 h-5 text-blue-600" strokeWidth={2} />;
        case 'Tools & AI': return <Bot className="w-5 h-5 text-indigo-600" strokeWidth={2} />;
        case 'Technical': return <Code2 className="w-5 h-5 text-blue-600" strokeWidth={2} />;
        case 'Soft Skills': return <Users className="w-5 h-5 text-indigo-600" strokeWidth={2} />;
        case 'Languages': return <Globe2 className="w-5 h-5 text-blue-600" strokeWidth={2} />;
        default: return null;
    }
}

// Connected Skills Mapping
const skillGroups: Record<string, string> = {
    // Design
    'UX Research': 'group-design',
    'Wireframing & Prototyping': 'group-design',
    'Design Systems': 'group-design',
    'UI Components': 'group-design',
    'UI Design': 'group-design',
    // AI
    'Chat GPT': 'group-ai',
    'Perplexity': 'group-ai',
    'NotebookLM': 'group-ai',
    'Gemini': 'group-ai',
    // Web Stack
    'HTML': 'group-web',
    'CSS': 'group-web',
    'JavaScript': 'group-web',
    'Next.js': 'group-web-framework',
    'Tailwind CSS': 'group-web-framework',
    'MySQL': 'group-web-framework'
};

export default function About() {
    const { lang, mounted } = useLanguage();
    const displayLang = mounted ? lang : 'en';
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skillCategories = Object.keys(translations.about.skills) as Array<keyof typeof translations.about.skills>;

    // Helpers to determine if a skill should glow
    const isSkillHighlighted = (skillEnName: string) => {
        if (!hoveredSkill) return false;
        if (hoveredSkill === skillEnName) return true;
        const group = skillGroups[skillEnName];
        const hoveredGroup = skillGroups[hoveredSkill];
        return !!(group && hoveredGroup && group === hoveredGroup);
    }

    return (
        <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* ===== About Title ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        {t(translations.about.title, displayLang)}
                    </h2>
                    {/* Decorative curved underline */}
                    <svg className="mx-auto" width="80" height="12" viewBox="0 0 80 12" fill="none">
                        <path d="M2 10C20 2 60 2 78 10" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </motion.div>

                {/* ===== About Content ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl mx-auto text-center mb-24 px-4"
                >
                    <p className="text-slate-600 leading-relaxed mb-6">
                        {t(translations.about.desc1, displayLang)}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        {t(translations.about.desc2, displayLang)}
                    </p>
                </motion.div>

                {/* ===== Skills Title ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        {displayLang === 'en' ? 'Professional Skills' : 'ทักษะความเชี่ยวชาญ'}
                    </h3>
                    <svg className="mx-auto" width="80" height="12" viewBox="0 0 80 12" fill="none">
                        <path d="M2 10C20 2 60 2 78 10" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </motion.div>

                {/* ===== Skills Grid ===== */}
                <div className="flex flex-col gap-6">
                    {skillCategories.map((category, index) => {
                        const categoryTranslation = translations.about.skillCategories[category as keyof typeof translations.about.skillCategories];
                        const displayName = categoryTranslation ? t(categoryTranslation, displayLang) : category;
                        const skillItems = translations.about.skills[category];

                        // @ts-ignore
                        const impactSentence = translations.about.skillImpacts?.[category];

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                className="group relative bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 hover:border-blue-200 transition-all duration-500"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">

                                    {/* Left Column: Capability & Impact (Width 40%) */}
                                    <div className="md:w-5/12 flex-shrink-0">
                                        {/* Capability Header */}
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:scale-110 transition-all duration-500">
                                                {getCategoryIcon(category)}
                                            </div>
                                            <h4 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                                {displayName}
                                            </h4>
                                        </div>

                                        {/* Animated Underline */}
                                        <div className="w-12 h-1 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-500 transition-all duration-700 ease-out mb-6"></div>

                                        {/* Business Impact */}
                                        <div>
                                            <p className="text-[11px] font-bold text-blue-600/80 uppercase tracking-widest mb-3">Business Impact</p>
                                            <p className="text-slate-700 leading-relaxed text-[15px] font-medium">
                                                {impactSentence ? t(impactSentence, displayLang) : ''}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Vertical Divider (Desktop only) */}
                                    <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                                    {/* Right Column: Execution Strength (Width 60%) */}
                                    <div className="md:w-7/12 md:self-center">
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                                            Execution Strength
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                        </p>
                                        <div className="flex flex-wrap gap-2.5">
                                            {skillItems.map((skill, idx) => {
                                                const highlighted = isSkillHighlighted(skill.en);
                                                const dimmed = hoveredSkill && !highlighted;

                                                return (
                                                    <span
                                                        key={idx}
                                                        onMouseEnter={() => setHoveredSkill(skill.en)}
                                                        onMouseLeave={() => setHoveredSkill(null)}
                                                        className={`px-4 py-2.5 text-[13px] rounded-full font-semibold transition-all duration-300 cursor-default border leading-none ${highlighted
                                                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/40 scale-105 z-10'
                                                            : dimmed
                                                                ? 'bg-slate-50 text-slate-300 border-slate-100 scale-95 opacity-60'
                                                                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                                                            }`}
                                                    >
                                                        {t(skill, displayLang)}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
