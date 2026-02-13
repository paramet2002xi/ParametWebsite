'use client';

import { motion } from 'framer-motion';

const skills = {
    'Design & UX': ['UX Research', 'Wireframing & Prototyping', 'Design Systems', 'UI Components', 'UI Design'],
    'Tools & AI': ['Figma', 'Adobe Photoshop', 'Canva', 'Chat GPT', 'Gemini', 'Perplexity', 'Stitch', 'NotebookLM'],
    Technical: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'Tailwind CSS', 'MySQL'],
    'Soft Skills': ['Cross-team Collaboration', 'Analytical & Systematic Thinking', 'Problem Solving', 'Active Learning & Adaptability', 'Attention to Detail'],
    Languages: ['Thai (Native)', 'English (Intermediate)'],
};

export default function About() {
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">UX/UI Designer</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            I am a UX/UI Designer with experience in designing responsive websites and applications, focusing on user-centered design aligned with business objectives. I work across UX research, wireframing, and UI design, with a foundational understanding of frontend development that supports effective collaboration with development teams.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            I aim to deliver practical, high-quality design solutions through clear workflows and teamwork.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid gap-6"
                    >
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold mb-3 text-blue-600">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm bg-slate-50 border border-slate-200 rounded-md text-slate-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
