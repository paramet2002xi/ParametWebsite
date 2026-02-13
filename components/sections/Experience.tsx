'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: 'UX UI Designer',
        company: 'Kaset AI Co., Ltd.',
        period: 'Aug 2025 - Present',
        description: 'Designed user experiences for responsive web and application interfaces based on business objectives and user needs. Collaborated with Project Managers, stakeholders, and development teams to define design direction. Analyzed user flows, pain points, and user behavior, created wireframes (low-fidelity to high-fidelity), and iterated UX based on feedback. Designed UI aligned with approved wireframes and brand guidelines. Utilized and prepared Design Systems and reusable UI components. Supported frontend implementation using Next.js, Tailwind CSS, and TypeScript.',
        type: 'work',
    },
    {
        id: 2,
        role: 'UX UI Designer (Intern)',
        company: 'iBusiness Corporation Co., Ltd.',
        period: 'July 2024 - Oct 2024',
        description: 'Redesigned the company\'s existing website into a new interface. Designed responsive UX/UI for web applications based on business objectives and user needs. Collaborated with the Lead UX/UI Designer and development team. Created low- to high-fidelity wireframes and designed UI based on existing Design Systems. Designed visual assets and marketing banners for special campaigns and seasonal events using Adobe Photoshop.',
        type: 'work',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-3 top-0 bg-white p-1 rounded-full border border-slate-200">
                                <Briefcase className="w-4 h-4 text-blue-600" />
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                    {exp.period}
                                </span>
                            </div>
                            <h4 className="text-lg font-medium text-slate-700 mb-3">{exp.company}</h4>
                            <p className="text-slate-600 leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
