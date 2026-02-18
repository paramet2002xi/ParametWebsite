'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Layout, Palette } from 'lucide-react';
import Image from 'next/image';

import { projects } from '@/lib/data';
import Link from 'next/link';

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Map project data from lib/data (วนลูปแสดงข้อมูลโปรเจกต์) */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
                        >
                            <div className="relative h-56 bg-slate-200 group overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
                                <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-slate-100">
                                    <a href={project.github} className="flex items-center text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">
                                        <Github size={18} className="mr-2" />
                                        Code
                                    </a>
                                    <Link href={`/projects/${project.id}`} className="flex items-center text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">
                                        <ExternalLink size={18} className="mr-2" />
                                        Case Study
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
