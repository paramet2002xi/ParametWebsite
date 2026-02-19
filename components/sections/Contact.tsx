'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { useLanguage, t } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function Contact() {
    const { lang } = useLanguage();

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(translations.contact.title, lang)}</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        {t(translations.contact.subtitle, lang)}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* ซ้าย: ข้อมูลการติดต่อ */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">{t(translations.contact.info, lang)}</h3>
                        <div className="space-y-6">
                            <a href="mailto:p.paramet2002@gmail.com" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors group">
                                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-200 group-hover:border-blue-600 transition-colors mr-4">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{t(translations.contact.emailMe, lang)}</p>
                                    <p className="font-medium">p.paramet2002@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center text-slate-600 group">
                                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-200 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{t(translations.contact.callMe, lang)}</p>
                                    <p className="font-medium">+66 82 945 3652</p>
                                </div>
                            </div>

                            <div className="flex items-center text-slate-600 group">
                                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-200 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{t(translations.contact.location, lang)}</p>
                                    <p className="font-medium">{t(translations.contact.locationValue, lang)}</p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="text-lg font-bold mb-4">{t(translations.contact.followMe, lang)}</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/paramet-kumpapun-610b5a363" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ขวา: แบบฟอร์มติดต่อ */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">{t(translations.contact.nameLabel, lang)}</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                    placeholder={t(translations.contact.namePlaceholder, lang)}
                                    suppressHydrationWarning
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">{t(translations.contact.emailLabel, lang)}</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                    placeholder={t(translations.contact.emailPlaceholder, lang)}
                                    suppressHydrationWarning
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">{t(translations.contact.messageLabel, lang)}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                                    placeholder={t(translations.contact.messagePlaceholder, lang)}
                                    suppressHydrationWarning
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                                suppressHydrationWarning
                            >
                                {t(translations.contact.sendBtn, lang)}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
