'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Wrench, CheckCircle2, Users, MessageCircle, Brain, Hand, Heart, Grid3X3 } from 'lucide-react';
import { projects } from '@/lib/data';
import { use } from 'react';

// ===== Animation Variants =====
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find(p => p.id === slug);

    if (!project) {
        notFound();
    }

    const cs = project.caseStudy;

    return (
        <div className="min-h-screen bg-white">
            {/* ===== Hero Banner ===== */}
            <section className="relative h-[50vh] md:h-[60vh] bg-slate-900 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto">
                    <Link href="/#portfolio" className="flex items-center text-white/70 hover:text-white mb-6 transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Portfolio
                    </Link>
                    <motion.h1 {...fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {project.title}
                    </motion.h1>
                    <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm border border-white/20">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* ===== Project Info Bar ===== */}
                <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Role</p>
                            <p className="text-sm font-semibold text-slate-900">{cs.myRole}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Timeline</p>
                            <p className="text-sm font-semibold text-slate-900">{cs.timeline}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Wrench className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Tools</p>
                            <p className="text-sm font-semibold text-slate-900">{cs.tools.join(', ')}</p>
                        </div>
                    </div>
                </motion.div>

                {/* ===== Overview ===== */}
                <motion.section {...fadeInUp} className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                        Overview
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-lg">{cs.overview}</p>
                </motion.section>

                {/* ===== Problem ===== */}
                <motion.section {...fadeInUp} className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-red-500 rounded-full"></span>
                        Problem
                    </h2>
                    {Array.isArray(cs.problem) ? (
                        <ul className="space-y-3">
                            {cs.problem.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-slate-600 leading-relaxed text-lg">{cs.problem}</p>
                    )}
                </motion.section>

                {/* ===== Solution ===== */}
                <motion.section {...fadeInUp} className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-green-500 rounded-full"></span>
                        Solution
                    </h2>
                    {Array.isArray(cs.solution) ? (
                        <ul className="space-y-3">
                            {cs.solution.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-slate-600 leading-relaxed text-lg">{cs.solution}</p>
                    )}
                </motion.section>

                {/* ===== Target Users ===== */}
                {'targetUsers' in cs && cs.targetUsers && (
                    <motion.section {...fadeInUp} className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                            <Users className="w-6 h-6 text-purple-500" />
                            Target Users
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {cs.targetUsers.map((user, i) => (
                                <div key={i} className="p-5 bg-purple-50/50 border border-purple-100 rounded-xl">
                                    <h4 className="font-bold text-slate-900 mb-1">{user.title}</h4>
                                    <p className="text-slate-600 text-sm">{user.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* ===== Empathy Map ===== */}
                {'empathyMap' in cs && cs.empathyMap && (
                    <motion.section {...fadeInUp} className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-pink-500 rounded-full"></span>
                            Empathy Map
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Say */}
                            <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-xl">
                                <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5" /> Say
                                </h4>
                                <ul className="space-y-2">
                                    {cs.empathyMap.say.map((item, i) => (
                                        <li key={i} className="text-slate-600 text-sm italic">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Think */}
                            <div className="p-6 bg-yellow-50/50 border border-yellow-100 rounded-xl">
                                <h4 className="font-bold text-yellow-700 mb-4 flex items-center gap-2">
                                    <Brain className="w-5 h-5" /> Think
                                </h4>
                                <ul className="space-y-2">
                                    {cs.empathyMap.think.map((item, i) => (
                                        <li key={i} className="text-slate-600 text-sm italic">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Do */}
                            <div className="p-6 bg-green-50/50 border border-green-100 rounded-xl">
                                <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                                    <Hand className="w-5 h-5" /> Do
                                </h4>
                                <ul className="space-y-2">
                                    {cs.empathyMap.do.map((item, i) => (
                                        <li key={i} className="text-slate-600 text-sm">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Feel */}
                            <div className="p-6 bg-red-50/50 border border-red-100 rounded-xl">
                                <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                                    <Heart className="w-5 h-5" /> Feel
                                </h4>
                                <ul className="space-y-2">
                                    {cs.empathyMap.feel.map((item, i) => (
                                        <li key={i} className="text-slate-600 text-sm">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* ===== Design System ===== */}
                {cs.designSystem && (
                    <motion.section {...fadeInUp} className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-indigo-500 rounded-full"></span>
                            Design System
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Colors */}
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4">Colors</h4>
                                <div className="space-y-3">
                                    {cs.designSystem.colors.map((color, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg border border-slate-200 shadow-sm flex-shrink-0" style={{ backgroundColor: color.value }} />
                                            <div>
                                                <p className="text-sm font-medium text-slate-900">{color.name}</p>
                                                <p className="text-xs text-slate-400 font-mono">{color.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Typography */}
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4">Typography — {cs.designSystem.typography.fontFamily}</h4>
                                <div className="space-y-3">
                                    {cs.designSystem.typography.scale.map((type, i) => (
                                        <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                                            <span className="text-sm font-medium text-slate-700">{type.level}</span>
                                            <span className="text-xs text-slate-400">{type.weight} · {type.size}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* ===== Layout Grid ===== */}
                {'layoutGrid' in cs && cs.layoutGrid && (
                    <motion.section {...fadeInUp} className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-teal-500 rounded-full"></span>
                            <Grid3X3 className="w-6 h-6 text-teal-500" />
                            Layout Grid
                        </h2>
                        <p className="text-slate-600 mb-6 italic">{cs.layoutGrid.description}</p>
                        {cs.layoutGrid.mobile && (
                            <div className="p-6 bg-teal-50/50 border border-teal-100 rounded-xl">
                                <h4 className="font-bold text-teal-700 mb-4">Mobile Grid</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Device Width</p>
                                        <p className="text-sm font-semibold text-slate-900">{cs.layoutGrid.mobile.deviceWidth}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Content Width</p>
                                        <p className="text-sm font-semibold text-slate-900">{cs.layoutGrid.mobile.contentWidth}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Columns</p>
                                        <p className="text-sm font-semibold text-slate-900">{cs.layoutGrid.mobile.columns}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Gutter</p>
                                        <p className="text-sm font-semibold text-slate-900">{cs.layoutGrid.mobile.gutter}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.section>
                )}

                {/* ===== Main Features ===== */}
                {cs.mainFeatures && (
                    <motion.section {...fadeInUp} className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-amber-500 rounded-full"></span>
                            Key Features
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {cs.mainFeatures.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-amber-50/50 rounded-xl border border-amber-100">
                                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* ===== Gallery ===== */}
                {'gallery' in cs && cs.gallery && (
                    <motion.section {...fadeInUp} className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
                            Gallery
                        </h2>
                        {/* ตรวจสอบว่าเป็นโปรเจกต์ Mobile หรือ Web สำหรับ Gallery Layout */}
                        {'type' in project && project.type === 'mobile' ? (
                            /* Mobile Gallery: แสดงเป็นแนวนอนแบบ phone mockup */
                            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
                                {cs.gallery.map((img, i) => (
                                    <div key={i} className="snap-center flex-shrink-0 flex flex-col items-center">
                                        <div className="relative w-[200px] h-[420px] bg-slate-100 rounded-[2rem] border-4 border-slate-800 shadow-xl overflow-hidden">
                                            <Image
                                                src={img.src}
                                                alt={img.title}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <p className="text-sm text-slate-500 mt-3 font-medium">{img.title}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Web Gallery: แสดงเป็น grid ปกติ */
                            <div className="grid md:grid-cols-2 gap-6">
                                {cs.gallery.map((img, i) => (
                                    <div key={i} className="group relative overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                                        <div className="relative h-64 md:h-80 bg-slate-100">
                                            <Image
                                                src={img.src}
                                                alt={img.title}
                                                fill
                                                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4 bg-white">
                                            <p className="text-sm font-semibold text-slate-900">{img.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.section>
                )}

                {/* ===== Back to Portfolio ===== */}
                <div className="text-center pt-8 border-t border-slate-100">
                    <Link
                        href="/#portfolio"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
}
