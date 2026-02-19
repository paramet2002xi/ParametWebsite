'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Link from 'next/link';
import { useLanguage, t } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

// ข้อมูลใบรับรองพร้อมลิงก์ไปยังไฟล์ PDF
export const certifications = [
    {
        id: 1,
        slug: 'web-design-figma',
        title: 'WEB DESIGN (Figma)',
        organization: 'HACKaTHAILAND',
        year: '2023',
        file: 'paramet-Web-Design-Figma-Web-DesignFigma-Basic-HackaThailand (1).pdf',
    },
    {
        id: 2,
        slug: 'mobile-app-design-figma',
        title: 'Mobile Application Design (Figma)',
        organization: 'HACKaTHAILAND',
        year: '2023',
        file: 'paramet-TU-Mobile-Application-Design-Figma-Mobile-Aplication-DesignFigma-ระดับกลาง-HackaThailand.pdf',
    },
    {
        id: 3,
        slug: 'cybersecurity',
        title: 'Cybersecurity',
        organization: 'Information Technology Specialists',
        year: '2024',
        file: 'Certificate_Cybersecurity_Paramet Kumpapun.pdf',
    },
    {
        id: 4,
        slug: 'create-apps-championship',
        title: 'Create Apps Championship',
        organization: 'Create Apps Championship',
        year: '2025',
        file: 'Create Apps Championship 2025-26..pdf',
    },
];

export default function Certification() {
    const { lang } = useLanguage();

    return (
        <section id="certification" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(translations.certification.title, lang)}</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/certificates/${cert.slug}`}
                                className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-blue-200 group h-full"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rounded-xl group-hover:scale-110">
                                    <Award className="w-7 h-7" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">{cert.title}</h3>
                                <p className="text-slate-400 text-sm mb-5 flex-grow">{cert.organization}</p>
                                <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                                    {cert.year}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
