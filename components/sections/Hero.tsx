'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-0 bg-white overflow-hidden relative">
            {/* ส่วนประกอบพื้นหลัง - รูปทรงตกแต่ง */}
            <div className="absolute top-0 right-0 -z-10 opacity-30">
                <div className="w-96 h-96 bg-blue-100 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute bottom-0 left-0 -z-10 opacity-30">
                <div className="w-64 h-64 bg-slate-100 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* ซ้าย: เนื้อหาข้อความ - คำแนะนำตัวและปุ่ม Action */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <span className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                            Available for new projects
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                                PARAMET KUMPAPUN
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-medium text-slate-700 mb-6">
                            UX/UI Designer
                        </h2>

                        <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
                            I design intuitive and beautiful digital experiences.
                            Focused on user-centered design, responsive layouts,
                            and creating interfaces that solve real problems.
                        </p>

                        {/* ปุ่ม Call to Action */}
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-8">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1"
                            >
                                Let's Talk
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>

                            <a
                                href="/resume.pdf"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-slate-600 bg-white border-2 border-slate-200 rounded-full hover:bg-slate-50 hover:text-blue-600 transition-all duration-300 hover:border-blue-600"
                            >
                                Resume
                                <Download className="ml-2 w-5 h-5" />
                            </a>
                        </div>


                    </motion.div>

                    {/* ขวา: รูปโปรไฟล์พร้อมเอฟเฟกต์ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 relative w-full flex justify-center md:justify-end"
                    >
                        <div className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] lg:w-[650px] lg:h-[650px] mt-8 md:mt-0">
                            {/* เอฟเฟกต์แสงสีฟ้าด้านหลัง */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[60px] -z-10"></div>

                            {/* Decorative Squiggles */}

                            <svg className="absolute bottom-10 left-0 w-16 h-16 text-slate-300 -z-10" viewBox="0 0 100 100" fill="none">
                                <path d="M10 50 Q 25 25 50 50 T 90 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>

                            {/* Image Container */}
                            <div className="w-full h-full relative z-10">
                                <Image
                                    src="/Image/Header.png"
                                    alt="Paramet Kumpapun"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
