'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
    {
        id: 1,
        role: 'Faculty of Science and Technology, Major of Computer Science',
        institution: 'Rajamangala University of Technology Thanyaburi',
        period: '2021 - 2025',
        description: 'GPA 3.20',
    },
    {
        id: 2,
        role: 'Science-Mathematic',
        institution: 'Thanyaburi School',
        period: '2018 - 2021',
        description: 'GPA 3.04',
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-3 top-0 bg-white p-1 rounded-full border border-slate-200">
                                <GraduationCap className="w-4 h-4 text-green-600" />
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
                                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                    {edu.period}
                                </span>
                            </div>
                            <h4 className="text-lg font-medium text-slate-700 mb-3">{edu.role}</h4>
                            <p className="text-slate-600 leading-relaxed font-semibold">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
