'use client';

import { motion } from 'framer-motion';
import { useLanguage, t } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function About() {
    const { lang } = useLanguage();

    const skillCategories = Object.keys(translations.about.skills) as Array<keyof typeof translations.about.skills>;

    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(translations.about.title, lang)}</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* ซ้าย: ข้อความแนะนำตัว */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{t(translations.about.role, lang)}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {t(translations.about.desc1, lang)}
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {t(translations.about.desc2, lang)}
                        </p>
                    </motion.div>

                    {/* ขวา: ตารางแสดงทักษะ */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid gap-6"
                    >
                        {skillCategories.map((category) => {
                            const categoryTranslation = translations.about.skillCategories[category as keyof typeof translations.about.skillCategories];
                            const displayName = categoryTranslation ? t(categoryTranslation, lang) : category;
                            const skillItems = translations.about.skills[category];

                            return (
                                <div key={category} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-lg font-bold mb-3 text-blue-600">{displayName}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillItems.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-sm bg-slate-50 border border-slate-200 rounded-md text-slate-700"
                                            >
                                                {t(skill, lang)}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
