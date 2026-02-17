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
                        className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000"
                    >
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
                                        src="/Projects/iBusiness Corporation/Perform/1-1 Edit Home.png"
                                        alt="iBusiness Home Page"
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
                                        src="/Projects/iBusiness Corporation/Perform/1-2 About.png"
                                        alt="iBusiness About Page"
                                        fill
                                        className="object-cover object-top"
                                    />
                                    {/* Glass reflection effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                                </div>
                            </motion.div>
                        </div>
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
                                        The Challenge
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.caseStudy.problem}
                                    </p>
                                </div>
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        The Solution
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.caseStudy.solution}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
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
                        <div className="min-w-[768px] flex flex-col items-center">
                            {/* Home Node */}
                            <div className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold shadow-lg mb-10 relative z-10">
                                HOME PAGE
                            </div>

                            {/* Connecting Lines */}
                            <div className="relative w-full max-w-4xl h-8 mb-4">
                                {/* Vertical from Home */}
                                <div className="absolute left-1/2 -translate-x-1/2 -top-10 h-10 w-0.5 bg-slate-300"></div>
                                {/* Horizontal Bar */}
                                <div className="absolute top-0 left-10 right-10 h-0.5 bg-slate-300"></div>
                                {/* Vertical Connectors */}
                                <div className="absolute top-0 left-10 h-8 w-0.5 bg-slate-300"></div>
                                <div className="absolute top-0 left-1/4 h-8 w-0.5 bg-slate-300"></div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
                                <div className="absolute top-0 right-1/4 h-8 w-0.5 bg-slate-300"></div>
                                <div className="absolute top-0 right-10 h-8 w-0.5 bg-slate-300"></div>
                            </div>

                            {/* Second Level Nodes */}
                            <div className="grid grid-cols-5 gap-4 w-full max-w-4xl">
                                {['About Us', 'Services', 'News', 'Showcase', 'Contact'].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-full bg-blue-50 border border-blue-100 py-3 rounded-lg text-blue-700 font-semibold text-sm text-center shadow-sm mb-2 hover:shadow-md transition-shadow">
                                            {item}
                                        </div>
                                        {/* Sub-pages indicator */}
                                        <div className="w-0.5 h-3 bg-slate-300"></div>
                                        <div className="w-[90%] bg-white border border-slate-200 py-2 rounded text-slate-400 text-[10px] text-center uppercase tracking-wider">
                                            Details
                                        </div>
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
                                    <p className="text-5xl font-bold text-slate-900">Inter</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                                        <span className="text-2xl font-bold text-slate-900">Heading 1</span>
                                        <span className="text-slate-400 text-sm">Bold / 36px</span>
                                    </div>
                                    <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                                        <span className="text-xl font-semibold text-slate-900">Heading 2</span>
                                        <span className="text-slate-400 text-sm">SemiBold / 24px</span>
                                    </div>
                                    <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                                        <span className="text-base font-medium text-slate-900">Body Text</span>
                                        <span className="text-slate-400 text-sm">Medium / 16px</span>
                                    </div>
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
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-[#007AFF] rounded-2xl shadow-lg shadow-blue-200"></div>
                                    <div>
                                        <p className="font-bold text-slate-900">Primary Blue</p>
                                        <p className="text-xs text-slate-400">#007AFF</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-[#1E293B] rounded-2xl shadow-lg"></div>
                                    <div>
                                        <p className="font-bold text-slate-900">Slate 900</p>
                                        <p className="text-xs text-slate-400">#1E293B</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-[#64748B] rounded-2xl shadow-md"></div>
                                    <div>
                                        <p className="font-bold text-slate-900">Slate 500</p>
                                        <p className="text-xs text-slate-400">#64748B</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-[#F1F5F9] rounded-2xl border border-slate-200"></div>
                                    <div>
                                        <p className="font-bold text-slate-900">Slate 100</p>
                                        <p className="text-xs text-slate-400">#F1F5F9</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-white rounded-2xl border border-slate-200"></div>
                                    <div>
                                        <p className="font-bold text-slate-900">White</p>
                                        <p className="text-xs text-slate-400">#FFFFFF</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. UI SHOWCASE */}
            <section className="py-24 bg-slate-900 text-white">
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

                    {/* Desktop Screens */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {[
                            { src: '/Projects/iBusiness Corporation/Perform/1-1 Edit Home.png', title: 'Home Page' },
                            { src: '/Projects/iBusiness Corporation/Perform/1-2 About.png', title: 'About Us' },
                            { src: '/Projects/iBusiness Corporation/Perform/1-7 News & Activity.png', title: 'News & Activity' },
                            { src: '/Projects/iBusiness Corporation/Perform/1-8 Contact.png', title: 'Contact Us' }
                        ].map((item, idx) => (
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

                    {/* Mobile Screens */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            '/Projects/iBusiness Corporation/Perform/1-3 Services.png',
                            '/Projects/iBusiness Corporation/Perform/1-4 Showcase.png',
                            '/Projects/iBusiness Corporation/Perform/1-7-1 News & Activity.png',
                            '/Projects/iBusiness Corporation/Perform/1-4-1 Showcase-DITP CARE.png'
                        ].map((src, index) => (
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
                                        src={src}
                                        alt={`Mobile UI ${index}`}
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
            <div className="bg-zinc-950 border-t border-zinc-900 py-16 text-center">
                <Link href="/#portfolio" className="text-slate-500 hover:text-white transition-colors uppercase tracking-widest text-sm">
                    Back to All Projects
                </Link>
            </div>
        </main>
    );
}
