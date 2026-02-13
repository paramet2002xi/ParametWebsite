'use client';

import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Layout, Smartphone, ChevronRight, Monitor } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { use } from 'react';

// Custom Figma Icon
const FigmaIcon = () => (
    <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-12 md:w-12 md:h-18">
        <path d="M6 36C9.31371 36 12 33.3137 12 30V24H6C2.68629 24 0 26.6863 0 30C0 33.3137 2.68629 36 6 36Z" fill="#0ACF83" />
        <path d="M0 18C0 21.3137 2.68629 24 6 24H12V12H6C2.68629 12 0 14.6863 0 18Z" fill="#A259FF" />
        <path d="M0 6C0 9.31371 2.68629 12 6 12H12V0H6C2.68629 0 0 2.68629 0 6Z" fill="#F24E1E" />
        <path d="M12 0V12H18C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0H12Z" fill="#FF7262" />
        <path d="M24 18C24 21.3137 21.3137 24 18 24H12V12H18C21.3137 12 24 14.6863 24 18Z" fill="#1ABCFE" />
    </svg>
);

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

            {/* 1. HERO SECTION (Maintained Style) */}
            <section className="relative w-full min-h-screen flex items-center bg-white px-6 py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT: Text Info */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/#portfolio" className="inline-flex items-center text-slate-400 hover:text-slate-900 mb-8 transition-colors">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Projects
                            </Link>

                            <h2 className="text-xl font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
                                CASE STUDY
                            </h2>

                            <div className="flex flex-col gap-2 mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center relative overflow-hidden shrink-0">
                                        <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%]"></div>
                                        <div className="w-8 h-4 bg-white absolute bottom-4"></div>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-none">
                                        Business.
                                    </h1>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-none ml-2 md:ml-24">
                                    Corporation
                                </h1>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="bg-slate-900 p-4 rounded-2xl shadow-xl w-20 h-20 flex items-center justify-center">
                                    <FigmaIcon />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Skewed Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] w-full flex items-center justify-center order-1 lg:order-2"
                    >
                        <div className="relative w-[130%] right-[-15%] transform rotate-[-12deg] hover:rotate-[-8deg] transition-all duration-700 ease-out">
                            {/* Desktop Mockup */}
                            <div className="absolute top-0 right-10 w-[85%] aspect-video bg-white shadow-2xl rounded-lg border border-slate-200 overflow-hidden z-20">
                                <div className="w-full h-full relative">
                                    <Image
                                        src="/Projects/iBusiness Corporation/Perform/1-1 Edit Home.png"
                                        alt="iBusiness Desktop"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                            {/* Mobile Mockup */}
                            <div className="absolute top-[30%] right-[65%] w-[25%] aspect-[9/19] bg-slate-900 shadow-2xl rounded-[2rem] border-[6px] border-slate-800 overflow-hidden z-30">
                                <div className="w-full h-full relative bg-white">
                                    <Image
                                        src="/Projects/iBusiness Corporation/Perform/1-3 Services.png"
                                        alt="iBusiness Services Mobile"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. OVERVIEW & CONTEXT (Dark Section) */}
            <section className="bg-slate-950 py-24 text-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h3 className="text-red-500 font-bold tracking-widest uppercase mb-4 text-sm">
                            PRODUCT OVERVIEW
                        </h3>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                            {project.caseStudy.overview}
                        </p>
                    </motion.div>

                    {/* Context Grid */}
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="border-t border-slate-800 pt-16"
                    >
                        <h3 className="text-blue-500 font-bold tracking-widest uppercase mb-12 text-sm">
                            PROJECT CONTEXT
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            <div>
                                <h4 className="text-white font-bold text-lg mb-2">Role & Responsibility</h4>
                                <p className="text-slate-400">{project.caseStudy.myRole}</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-2">Timeline</h4>
                                <p className="text-slate-400">{project.caseStudy.timeline}</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-2">Tools Used</h4>
                                <p className="text-slate-400">{project.caseStudy.tools.join(', ')}</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-2">Platform</h4>
                                <p className="text-slate-400">Web, Mobile Responsive</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. PROCESS / SITEMAP (White Section) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h3 className="text-red-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span> PROCESS : SITEMAP
                        </h3>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-xl"
                    >
                        {/* Simulated Sitemap Visual */}
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="w-32 h-12 bg-yellow-400 rounded flex items-center justify-center text-slate-900 font-bold mb-8 shadow-md">HOME</div>
                            <div className="w-0.5 h-8 bg-slate-300 mb-8"></div>
                            <div className="w-full max-w-3xl border-t-2 border-slate-300 relative h-8">
                                <div className="absolute left-0 top-0 w-0.5 h-8 bg-slate-300"></div>
                                <div className="absolute left-1/4 top-0 w-0.5 h-8 bg-slate-300"></div>
                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-8 bg-slate-300"></div>
                                <div className="absolute right-1/4 top-0 w-0.5 h-8 bg-slate-300"></div>
                                <div className="absolute right-0 top-0 w-0.5 h-8 bg-slate-300"></div>
                            </div>
                            <div className="grid grid-cols-5 gap-4 w-full max-w-3xl text-center">
                                {['About Us', 'Services', 'News', 'Showcase', 'Contact'].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-full bg-blue-100 py-3 rounded text-blue-800 font-semibold text-sm mb-2">{item}</div>
                                        <div className="w-0.5 h-4 bg-slate-300"></div>
                                        <div className="w-full bg-white border border-slate-200 py-2 rounded text-slate-500 text-xs">Sub-page</div>
                                        <div className="w-full bg-white border border-slate-200 py-2 rounded text-slate-500 text-xs mt-1">Detail</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. LARGE MOCKUP SHOWCASE */}
            <section className="py-12 bg-slate-50 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h3 className="text-blue-500 font-bold tracking-widest uppercase mb-12 text-sm inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> UX/UI DESIGN
                    </h3>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[16/10] max-w-4xl mx-auto shadow-2xl rounded-t-2xl overflow-hidden border-t-8 border-x-8 border-slate-800 bg-slate-800"
                    >
                        <div className="w-full h-full bg-white relative">
                            <Image
                                src="/Projects/iBusiness Corporation/Perform/1-1 Edit Home.png"
                                alt="Main Desktop UI"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. DESIGN SYSTEM (Vertical Layout) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-blue-500 font-bold tracking-widest uppercase mb-16 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> DESIGN SYSTEM
                    </h3>

                    {/* Colors */}
                    <div className="mb-20">
                        <h4 className="text-slate-900 font-bold text-lg mb-8 flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-blue-500">Color Palette</h4>
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                            {/* Primary Blue */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 rounded-full bg-[#007AFF] shadow-lg"></div>
                                <span className="text-xs font-mono text-slate-500 uppercase">Primary Blue</span>
                            </div>
                            {/* Dark Text */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 rounded-full bg-[#1e293b] shadow-lg"></div>
                                <span className="text-xs font-mono text-slate-500 uppercase">Dark Slate</span>
                            </div>
                            {/* Dark Grey */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 rounded-full bg-[#334155] shadow-lg"></div>
                                <span className="text-xs font-mono text-slate-500 uppercase">Grey 800</span>
                            </div>
                            {/* Light Grey */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 rounded-full bg-[#f8fafc] shadow-lg border border-slate-200"></div>
                                <span className="text-xs font-mono text-slate-500 uppercase">Light Bg</span>
                            </div>
                            {/* White */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 rounded-full bg-white shadow-lg border border-slate-200"></div>
                                <span className="text-xs font-mono text-slate-500 uppercase">White</span>
                            </div>
                        </div>
                    </div>

                    {/* Typography - Inter Showcase */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-slate-50 p-12 rounded-2xl">
                        <div>
                            <h4 className="text-slate-900 font-bold text-lg mb-8 flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-blue-500">Typography</h4>
                            <h2 className="text-[6rem] md:text-[8rem] font-bold text-blue-500 leading-none tracking-tighter mb-4">
                                Inter
                            </h2>
                            <div className="space-y-2 text-slate-600">
                                <p className="text-xl"><span className="font-bold text-slate-900">Inter Bold</span> for Headings</p>
                                <p className="text-xl"><span className="font-medium text-slate-900">Inter Medium</span> for UI Elements</p>
                                <p className="text-xl"><span className="font-normal text-slate-900">Inter Regular</span> for Body text</p>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-xl text-white font-sans space-y-4 shadow-xl">
                            <div className="flex justify-between border-b border-slate-700 pb-2">
                                <span>Inter</span>
                                <span>Regular</span>
                            </div>
                            <p className="text-2xl font-bold">Aa Bb Cc Dd</p>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Inter is a variable font family carefully crafted & designed for computer screens. Inter features a tall x-height to aid in readability of mixed-case and lower-case text.
                            </p>
                        </div>
                    </div>

                    {/* Components Grid (Simulated) */}
                    <div>
                        <h4 className="text-slate-900 font-bold text-lg mb-8 flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-blue-500">Components</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Button Primary */}
                            <div className="p-6 bg-slate-50 rounded-lg flex flex-col items-center justify-center gap-4 border border-slate-100">
                                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-500/30 font-medium">Primary</button>
                                <span className="text-xs text-slate-400">Button / Primary</span>
                            </div>
                            {/* Button Secondary */}
                            <div className="p-6 bg-slate-50 rounded-lg flex flex-col items-center justify-center gap-4 border border-slate-100">
                                <button className="px-6 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium">Secondary</button>
                                <span className="text-xs text-slate-400">Button / Secondary</span>
                            </div>
                            {/* Input Field */}
                            <div className="p-6 bg-slate-50 rounded-lg flex flex-col items-center justify-center gap-4 border border-slate-100 col-span-2">
                                <div className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-400 text-sm">Input Placeholder...</div>
                                <span className="text-xs text-slate-400">Input Field</span>
                            </div>
                            {/* Card */}
                            <div className="p-6 bg-slate-50 rounded-lg flex flex-col items-center justify-center gap-4 border border-slate-100 row-span-2">
                                <div className="w-full bg-white rounded-xl shadow p-4 space-y-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg"></div>
                                    <div className="w-3/4 h-3 bg-slate-200 rounded"></div>
                                    <div className="w-full h-2 bg-slate-100 rounded"></div>
                                    <div className="w-full h-2 bg-slate-100 rounded"></div>
                                </div>
                                <span className="text-xs text-slate-400">Card Component</span>
                            </div>
                            {/* Toggle / Checkbox */}
                            <div className="p-6 bg-slate-50 rounded-lg flex flex-col items-center justify-center gap-4 border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-6 bg-green-500 rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                                    <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-white text-xs">✓</div>
                                </div>
                                <span className="text-xs text-slate-400">Controls</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. UI SHOWCASE - DESKTOP */}
            <section className="py-24 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-center gap-2 mb-16">
                        <Monitor className="text-blue-500 w-6 h-6" />
                        <h3 className="text-white font-bold tracking-widest uppercase text-lg">UI DESIGN (DESKTOP)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div className="relative group overflow-hidden rounded-xl shadow-2xl border-4 border-zinc-800">
                                <Image src="/Projects/iBusiness Corporation/Perform/1-1 Edit Home.png" alt="Desktop UI 1" width={800} height={600} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                                    <span className="text-white font-bold">Home Page</span>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-2xl border-4 border-zinc-800">
                                <Image src="/Projects/iBusiness Corporation/Perform/1-2 About.png" alt="Desktop UI 2" width={800} height={600} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                                    <span className="text-white font-bold">About Us</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 md:mt-16">
                            <div className="relative group overflow-hidden rounded-xl shadow-2xl border-4 border-zinc-800">
                                <Image src="/Projects/iBusiness Corporation/Perform/1-7 News & Activity.png" alt="Desktop UI 3" width={800} height={600} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                                    <span className="text-white font-bold">News & Activity</span>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-2xl border-4 border-zinc-800">
                                <Image src="/Projects/iBusiness Corporation/Perform/1-8 Contact.png" alt="Desktop UI 4" width={800} height={600} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                                    <span className="text-white font-bold">Contact Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. UI SHOWCASE - MOBILE */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-center gap-2 mb-16">
                        <Smartphone className="text-blue-500 w-6 h-6" />
                        <h3 className="text-white font-bold tracking-widest uppercase text-lg">UI DESIGN (MOBILE)</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['/Projects/iBusiness Corporation/Perform/1-3 Services.png', '/Projects/iBusiness Corporation/Perform/1-4 Showcase.png', '/Projects/iBusiness Corporation/Perform/1-7-1 News & Activity.png', '/Projects/iBusiness Corporation/Perform/1-4-1 Showcase-DITP CARE.png'].map((src, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-[2rem] border-8 border-zinc-800 shadow-2xl bg-white aspect-[9/19]">
                                <div className="absolute top-0 w-full h-full">
                                    <Image src={src} alt={`Mobile UI ${index}`} fill className="object-cover object-top hover:object-bottom transition-[object-position] duration-[3s] ease-in-out" />
                                </div>
                            </div>
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
