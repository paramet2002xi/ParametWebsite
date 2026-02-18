'use client';

import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Layout, Smartphone, ChevronRight, Monitor } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { use } from 'react';



export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        notFound();
    }

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <main className="bg-white text-slate-900 font-sans min-h-screen selection:bg-blue-900 selection:text-white overflow-hidden">

            {/* 1. HERO SECTION (Redesigned) */}
            <section className="relative w-full bg-slate-50 px-6 pt-[60px] pb-[60px] overflow-hidden">
                {/* Giant Background Title */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
                    <h1 className="text-[12vw] font-black text-slate-900/5 uppercase tracking-tighter leading-none whitespace-nowrap">
                        {project.title}
                    </h1>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
                    {/* LEFT: Text Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <Link href="/#portfolio" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors group font-medium">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                                Case Study
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-10">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 font-medium shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <Image
                                    src="/Icon/Figma.svg"
                                    alt="Figma"
                                    width={36}
                                    height={54}
                                    className="w-auto h-14"
                                />
                                <span className="text-sm font-medium text-slate-500">Designed in Figma</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: Visual Collage (Website Focus) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000"
                    >
                        {project.type === 'mobile' ? (
                            // MOBILE LAYOUT (iPhone 17 Style - Ultra thin bezels)
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Back Phone (Splash/Login) */}
                                <motion.div
                                    className="absolute top-[10%] left-[20%] lg:left-[25%] w-[45%] md:w-[40%] aspect-[9/19] z-10"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    <motion.div
                                        className="w-full h-full bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border-[4px] border-slate-800"
                                        animate={{ rotate: -12, y: [0, -12, 0] }}
                                        transition={{
                                            rotate: { duration: 0 },
                                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    >
                                        {/* Phone Content */}
                                        <div className="relative w-full h-full bg-slate-800">
                                            <Image
                                                src={project.caseStudy.gallery?.[0]?.src || project.image}
                                                alt={`${project.title} - Main Screen`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Front Phone (Home/Main) */}
                                <motion.div
                                    className="absolute top-[15%] right-[20%] lg:right-[25%] w-[45%] md:w-[40%] aspect-[9/19] z-20"
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                >
                                    <motion.div
                                        className="w-full h-full bg-slate-900 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden border-[4px] border-slate-800 ring-1 ring-slate-900/5"
                                        animate={{ rotate: -6, y: [0, -15, 0] }}
                                        transition={{
                                            rotate: { duration: 0 },
                                            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                                        }}
                                    >
                                        {/* Phone Content */}
                                        <div className="relative w-full h-full bg-white">
                                            <Image
                                                src={project.caseStudy.gallery?.[2]?.src || project.caseStudy.gallery?.[1]?.src || project.image}
                                                alt={`${project.title} - Secondary Screen`}
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Glass reflection effect */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ) : (
                            // WEB LAYOUT (Landscape Desktop)
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Back Image (Home Page) */}
                                <motion.div
                                    className="absolute top-[12%] left-[-2%] lg:left-[-5%] w-[95%] md:w-[90%] aspect-[16/10] bg-slate-900 rounded-lg shadow-2xl overflow-hidden z-10 transform -rotate-[15deg] opacity-60 border-[6px] border-slate-800/50"
                                    initial={{ y: -20, opacity: 0, rotate: -15, scale: 0.9 }}
                                    animate={{ y: 0, opacity: 0.6, rotate: -15, scale: 0.9 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    <div className="relative w-full h-full bg-slate-100">
                                        <Image
                                            src={project.caseStudy.gallery?.[0]?.src || project.image}
                                            alt={`${project.title} - Main Screen`}
                                            fill
                                            className="object-cover object-top opacity-80 mix-blend-multiply"
                                        />
                                    </div>
                                </motion.div>

                                {/* Front Image (About Page) */}
                                <motion.div
                                    className="absolute top-[18%] left-[8%] lg:left-[8%] w-[95%] md:w-[90%] aspect-[16/10] bg-white rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden z-20 transform -rotate-[8deg] border border-slate-200/50 ring-1 ring-slate-900/5"
                                    initial={{ y: 40, opacity: 0, rotate: -8 }}
                                    animate={{ y: 0, opacity: 1, rotate: -8 }}
                                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={project.caseStudy.gallery?.[1]?.src || project.caseStudy.gallery?.[0]?.src || project.image}
                                            alt={`${project.title} - Secondary Screen`}
                                            fill
                                            className="object-cover object-top"
                                        />
                                        {/* Glass reflection effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* 2. OVERVIEW & CONTEXT */}
            <section className="bg-white py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Project Context (Left Column) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1 space-y-10"
                        >
                            <div>
                                <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Role</h3>
                                <p className="text-lg font-medium text-slate-900">{project.caseStudy.myRole}</p>
                            </div>
                            <div className="w-full h-px bg-slate-100"></div>
                            <div>
                                <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Timeline</h3>
                                <p className="text-lg font-medium text-slate-900">{project.caseStudy.timeline}</p>
                            </div>
                            <div className="w-full h-px bg-slate-100"></div>
                            <div>
                                <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.caseStudy.tools.map(tool => (
                                        <span key={tool} className="px-3 py-1 bg-slate-50 text-slate-700 rounded-md text-sm border border-slate-100">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Overview Content (Right 2 Columns) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                {project.caseStudy.overview}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        Problems & Obstacles
                                    </h3>
                                    {Array.isArray(project.caseStudy.problem) ? (
                                        <ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed">
                                            {project.caseStudy.problem.map((item: string, i: number) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-slate-600 leading-relaxed">
                                            {project.caseStudy.problem}
                                        </p>
                                    )}
                                </div>
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        The Solution
                                    </h3>
                                    {Array.isArray(project.caseStudy.solution) ? (
                                        <ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed">
                                            {project.caseStudy.solution.map((item: string, i: number) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-slate-600 leading-relaxed">
                                            {project.caseStudy.solution}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2.5 TARGET USER SECTION */}
            <section className="py-24 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-wider">Target User</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Customers', desc: 'Looking for portfolio or service information' },
                            { title: 'Partners', desc: 'Seeking business collaboration and contact' },
                            { title: 'Job Applicants', desc: 'Interested in the organization culture and jobs' },
                            { title: 'Internal Staff', desc: 'Using internal tools and resources' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                    <span className="text-blue-400 font-bold text-xl">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SITEMAP */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Sitemap Structure</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-200 overflow-x-auto">
                        <div className="min-w-[900px] flex flex-col items-center">
                            {/* Level 1: Home Node */}
                            <div className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold shadow-lg mb-12 relative z-10 border-4 border-slate-100">
                                HOME PAGE
                                {/* Vertical Line Down */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-slate-300"></div>
                            </div>

                            {/* Level 2: Categories */}
                            <div className="relative w-full grid grid-cols-6 gap-4">
                                {/* Horizontal Connecting Line */}
                                <div className="absolute top-0 left-[8.33%] right-[8.33%] h-0.5 bg-slate-300 -translate-y-4"></div>

                                {/* Vertical Connector to Home */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 h-4 w-0.5 bg-slate-300"></div>

                                {[
                                    {
                                        title: 'About',
                                        children: ['Company', 'Our Story']
                                    },
                                    {
                                        title: 'Services',
                                        children: ['Services 1', 'Services 2', 'Services 3', 'Services 4']
                                    },
                                    {
                                        title: 'Showcase',
                                        children: ['Showcase 1', 'Showcase 2', 'Showcase 3', 'Other']
                                    },
                                    {
                                        title: 'Jobs',
                                        children: []
                                    },
                                    {
                                        title: 'News & Activity',
                                        children: []
                                    },
                                    {
                                        title: 'Contact',
                                        children: []
                                    }
                                ].map((category, i) => (
                                    <div key={i} className="flex flex-col items-center relative">
                                        {/* Vertical Line Up to Horizontal Bar */}
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-slate-300"></div>

                                        {/* Category Box */}
                                        <div className="w-full bg-blue-50 border border-blue-200 py-4 rounded-xl text-blue-800 font-bold text-center shadow-sm mb-4 relative z-10">
                                            {category.title}
                                            {/* Vertical Line Down to Children (if any) */}
                                            {category.children.length > 0 && (
                                                <div className="absolute left-1/2 -translate-x-1/2 top-full h-4 w-0.5 bg-slate-300"></div>
                                            )}
                                        </div>

                                        {/* Level 3: Children */}
                                        {category.children.length > 0 && (
                                            <div className="flex flex-col gap-3 w-full pt-4 relative">
                                                {/* Vertical Spine Line */}
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[calc(100%-20px)] w-0.5 bg-slate-300 -z-0"></div>

                                                {category.children.map((child, j) => (
                                                    <div key={j} className="relative z-10 bg-white border border-slate-200 py-3 rounded-lg text-slate-600 text-sm font-medium text-center shadow-sm hover:shadow-md transition-shadow hover:border-blue-300 hover:text-blue-600">
                                                        {child}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DESIGN SYSTEM */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Design System</h2>
                        <p className="text-slate-600 max-w-2xl">A cohesive design language was established to ensure consistency across all pages and devices, focusing on clarity, trust, and professionalism.</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Typography */}
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 text-xs">Ag</span>
                                Typography
                            </h3>

                            <div className="space-y-8">
                                <div>
                                    <p className="text-sm text-slate-500 mb-2 uppercase tracking-wider">Font Family</p>
                                    <p className="text-5xl font-bold text-slate-900">{project.caseStudy.designSystem?.typography?.fontFamily || 'Inter'}</p>
                                </div>
                                <div className="space-y-4">
                                    {project.caseStudy.designSystem?.typography?.scale?.map((type: any, index: number) => (
                                        <div key={index} className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                                            <span className="text-lg font-bold text-slate-900">{type.level}</span>
                                            <span className="text-slate-400 text-sm">{type.weight} / {type.size}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>


                        {/* Colors */}
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 text-xs gap-0.5">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                </span>
                                Color Palette
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {project.caseStudy.designSystem?.colors?.map((color: any, index: number) => (
                                    <div key={index} className="space-y-3">
                                        <div
                                            className="w-full aspect-square rounded-2xl shadow-md border border-slate-100"
                                            style={{ backgroundColor: color.value }}
                                        ></div>
                                        <div>
                                            <p className="font-bold text-slate-900">{color.name}</p>
                                            <p className="text-xs text-slate-400">{color.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. UI SHOWCASE */}
            <section className="py-24 bg-zinc-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl font-bold mb-4">User Interface Design</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto">High-fidelity screens designed with focus on usability, accessibility, and visual hierarchy.</p>
                    </motion.div>

                    {/* Main Screens (First 4) */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {project.caseStudy.gallery?.slice(0, 4).map((item: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative rounded-xl overflow-hidden shadow-2xl bg-zinc-800"
                            >
                                <div className="aspect-[16/10] relative">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Secondary/Mobile Screens (Next 4) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {project.caseStudy.gallery?.slice(4, 8).map((item: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className="relative rounded-[20px] overflow-hidden border-[6px] border-zinc-800 shadow-xl bg-white aspect-[9/19] group"
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}

        </main>
    );
}
