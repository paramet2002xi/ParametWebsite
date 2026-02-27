'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { useLanguage, t } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

// กำหนด Filter ที่ต้องการแสดง
const filters = ['All', 'Web Design', 'Mobile App', 'Figma'];

export default function Portfolio() {
    const { lang, mounted } = useLanguage();
    const displayLang = mounted ? lang : 'en';
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => {
            if (activeFilter === 'Web Design') return p.type === 'web';
            if (activeFilter === 'Mobile App') return p.type === 'mobile';
            return p.tags.includes(activeFilter);
        });

    return (
        <section id="portfolio" className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ===== Title ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        {t(translations.portfolio.title, displayLang)}
                    </h2>
                    {/* Decorative curved underline */}
                    <svg className="mx-auto" width="80" height="12" viewBox="0 0 80 12" fill="none">
                        <path d="M2 10C20 2 60 2 78 10" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </motion.div>

                {/* ===== Filter Tabs ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-8 mb-14"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            suppressHydrationWarning
                            onClick={() => setActiveFilter(filter)}
                            className={`text-sm md:text-base font-medium pb-1 transition-all duration-200 border-b-2 ${activeFilter === filter
                                ? 'text-slate-900 border-slate-900'
                                : 'text-slate-400 border-transparent hover:text-slate-600 hover:border-slate-300'
                                }`}
                        >
                            {filter === 'All'
                                ? (displayLang === 'en' ? 'See All' : 'ดูทั้งหมด')
                                : filter}
                        </button>
                    ))}
                </motion.div>

                {/* ===== Project Grid ===== */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                            >
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="group block"
                                >
                                    <article className="flex flex-col">
                                        {/* Image */}
                                        <div className="relative aspect-[4/3.5] overflow-hidden mb-3">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>

                                        {/* Content - left-aligned, same titles & content */}
                                        <h3 className="text-slate-900 font-medium text-[15px] md:text-base group-hover:text-slate-700 transition-colors line-clamp-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs font-medium tracking-wider uppercase mt-1">
                                            {project.tags[0]} · {project.id === 'ibusiness' ? '2023' : '2024'}
                                        </p>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
