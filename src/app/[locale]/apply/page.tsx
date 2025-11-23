'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import WaitlistForm from '@/components/WaitlistForm';
import Modal from '@/components/ui/Modal';

export default function Apply() {
    const t = useTranslations('programs');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background transition-colors">
            {/* Hero Section with Title and Form Button */}
            <div className="border-b border-border">
                <div className="max-w-6xl mx-auto px-8 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold text-black mb-4">{t('title')}</h1>
                            <p className="text-lg text-black leading-relaxed max-w-3xl">
                                {t('description')}
                            </p>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-accent-blue-hover transition-all shadow-md hover:shadow-lg font-semibold whitespace-nowrap"
                        >
                            {t('formButton')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-8 py-12">
                {/* Program Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-black mb-4">{t('overview.title')}</h2>
                    <p className="text-black leading-relaxed">
                        {t('overview.content')}
                    </p>
                </section>

                {/* What We Offer */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-black mb-6">{t('whatWeOffer.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {t.raw('whatWeOffer.items').map((item: string, index: number) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="mt-1">
                                    <svg className="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-black">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How It Works */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-black mb-6">{t('howItWorks.title')}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {t.raw('howItWorks.steps').map((step: any, index: number) => (
                            <div key={index} className="bg-card border border-border rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-accent-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold text-black">{step.title}</h3>
                                </div>
                                <p className="text-black text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Who Should Apply */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-black mb-6">{t('eligibility.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {t.raw('eligibility.items').map((item: string, index: number) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="mt-1">
                                    <svg className="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-black">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="text-center py-8 border-t border-border">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-accent-blue text-white text-lg font-bold px-12 py-4 rounded-lg hover:bg-accent-blue-hover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        {t('formButton')}
                    </button>
                </div>
            </div>

            {/* Application Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={t('modalTitle')}
            >
                <WaitlistForm />
            </Modal>
        </div>
    );
}
