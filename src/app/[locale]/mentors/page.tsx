'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function MentorsPage() {
    const t = useTranslations('mentors');

    const mentorIds = ['fabian'];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-accent-blue/10 to-background py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Mentors Grid */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mentorIds.map((id) => (
                            <div key={id} className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="relative h-80 w-full overflow-hidden">
                                    <Image
                                        src={t(`list.${id}.image`)}
                                        alt={t(`list.${id}.name`)}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <a
                                            href={t(`list.${id}.linkedin`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all flex items-center space-x-2"
                                        >
                                            <span>{t('viewLinkedin')}</span>
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{t(`list.${id}.name`)}</h3>
                                    <p className="text-accent-blue font-semibold mb-4">{t(`list.${id}.role`)}</p>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t(`list.${id}.bio`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
