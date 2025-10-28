'use client';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const translations = useTranslations('hero');

    return (
        <section className="hero-section py-20 text-center min-h-screen grid place-items-center transition-colors bg-gradient-to-b from-slate-50 via-blue-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-blue-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg">
                    {translations('title')}
                </h1>
                <p className="text-xl mb-8 text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                    {translations('description')}
                </p>
            </div>
        </section>
    );
}