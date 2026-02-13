'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
    {
        id: 1,
        title: 'WEB DESIGN (Figma)',
        organization: 'HACKaTHAILAND',
        year: '2023',
        file: 'paramet-Web-Design-Figma-Web-DesignFigma-Basic-HackaThailand (1).pdf',
    },
    {
        id: 2,
        title: 'Mobile Application Design (Figma)',
        organization: 'HACKaTHAILAND',
        year: '2023',
        file: 'paramet-TU-Mobile-Application-Design-Figma-Mobile-Aplication-DesignFigma-ระดับกลาง-HackaThailand.pdf',
    },
    {
        id: 3,
        title: 'Cybersecurity',
        organization: 'Information Technology Specialists',
        year: '2024',
        file: 'Certificate_Cybersecurity_Paramet Kumpapun.pdf',
    },
];

export default function Certification() {
    return (
        <section id="certification" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <a
                                href={`/Certificates/${cert.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:border-blue-200 group h-full relative"
                            >
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-4 h-4 text-blue-400" />
                                </div>

                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{cert.title}</h3>
                                <p className="text-slate-500 text-sm mb-4 flex-grow">{cert.organization}</p>
                                <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-200 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors">
                                    {cert.year}
                                </span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
