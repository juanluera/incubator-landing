'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale: 'en' | 'es') => {
        router.replace(pathname,{locale : newLocale});
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded ${
                    locale === 'en'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800'
                }`}
            >
                English
            </button>
            <button
                onClick={() => switchLanguage('es')}
                className={`px-3 py-1 rounded ${
                    locale === 'es'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800'
                }`}
            >
                Spanish
            </button>
        </div>
    )
}