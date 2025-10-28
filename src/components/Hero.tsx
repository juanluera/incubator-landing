'use client';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const translations = useTranslations('hero');

    return (
        <section className="hero-section py-20 text-center min-h-screen grid place-items-center transition-colors">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-8xl font-bold mb-6 text-gray-900 dark:text-white drop-shadow-lg">
                    {translations('title')}
                </h1>
                <p className="text-2xl mb-8 text-gray-700 dark:text-gray-300 drop-shadow-md">
                    {translations('description')}
                </p>
            </div>
        </section>
    );
}