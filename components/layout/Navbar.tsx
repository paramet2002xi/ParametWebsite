'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, t } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { lang, toggleLang } = useLanguage();

    const navLinks = [
        { name: t(translations.nav.home, lang), href: '/' },
        { name: t(translations.nav.about, lang), href: '#about' },
        { name: t(translations.nav.education, lang), href: '#education' },
        { name: t(translations.nav.experience, lang), href: '#experience' },
        { name: t(translations.nav.portfolio, lang), href: '#portfolio' },
        { name: t(translations.nav.contact, lang), href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'education', 'experience', 'portfolio', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getSectionId = (href: string) => {
        if (href === '/') return 'home';
        return href.substring(1);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold font-mono tracking-tighter text-slate-900 hover:text-blue-600 transition-colors">
                            PORTFOLIO.
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-1">
                        <div className="flex items-baseline space-x-8 mr-6">
                            {navLinks.map((link) => {
                                const sectionId = getSectionId(link.href);
                                const isActive = activeSection === sectionId;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors duration-300 relative group ${isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                                            }`}
                                    >
                                        {link.name}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all bg-white/80"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            {lang === 'en' ? 'TH' : 'EN'}
                        </button>
                    </div>
                    <div className="flex items-center gap-2 md:hidden">
                        {/* Mobile Language Toggle */}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-600"
                        >
                            <Globe className="w-3 h-3" />
                            {lang === 'en' ? 'TH' : 'EN'}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => {
                                const sectionId = getSectionId(link.href);
                                const isActive = activeSection === sectionId;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${isActive
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
