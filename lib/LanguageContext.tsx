'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lang } from './translations';

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'en',
    setLang: () => { },
    toggleLang: () => { },
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('lang') as Lang | null;
        if (saved === 'en' || saved === 'th') {
            setLang(saved);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('lang', lang);
        }
    }, [lang, mounted]);

    const toggleLang = () => setLang(prev => (prev === 'en' ? 'th' : 'en'));

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

// Helper: pick the right translation based on current lang
export function t(value: { en: string; th: string }, lang: Lang): string {
    return value[lang];
}
