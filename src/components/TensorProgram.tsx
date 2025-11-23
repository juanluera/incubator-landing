'use client';
import { useTranslations } from 'next-intl';

export default function TensorProgram() {
    const t = useTranslations('programs');

    return (
        <section className="py-16" style={{ backgroundColor: '#e8d5c3' }}>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">{t('title')}</h2>
                <p className="text-lg text-gray-900 max-w-4xl mx-auto text-center">
                    {t('description')}
                </p>
            </div>
        </section>
    );
}
