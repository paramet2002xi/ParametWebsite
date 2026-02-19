'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Download, ArrowLeft } from 'lucide-react';
import { certifications } from '@/components/sections/Certification';

export default function CertificatePage() {
    const params = useParams();
    const slug = params.slug as string;
    const cert = certifications.find(c => c.slug === slug);

    if (!cert) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">Certificate not found</h1>
                    <Link href="/#certification" className="text-blue-600 hover:underline">
                        ← Back to Certifications
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Header bar */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/#certification"
                            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Link>

                        <div className="w-px h-6 bg-slate-200"></div>

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                <Award className="w-4 h-4" />
                            </div>
                            <div>
                                <h1 className="font-bold text-slate-900 text-sm">{cert.title}</h1>
                                <p className="text-xs text-slate-400">{cert.organization} · {cert.year}</p>
                            </div>
                        </div>
                    </div>

                    <a
                        href={`/Certificates/${cert.file}`}
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        <Download className="w-4 h-4" />
                        Download
                    </a>
                </div>
            </motion.div>

            {/* PDF Viewer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-5xl mx-auto px-6 py-8"
            >
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <iframe
                        src={`/Certificates/${cert.file}#toolbar=0&navpanes=0`}
                        className="w-full border-0"
                        style={{ height: 'calc(100vh - 160px)' }}
                        title={cert.title}
                    />
                </div>
            </motion.div>
        </main>
    );
}
