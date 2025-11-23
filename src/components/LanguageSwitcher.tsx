'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale: 'en' | 'es') => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded transition-colors ${locale === 'en'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-border text-foreground hover:bg-border/80'
                    }`}
            >
                English
            </button>
            <button
                onClick={() => switchLanguage('es')}
                className={`px-3 py-1 rounded transition-colors ${locale === 'es'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-border text-foreground hover:bg-border/80'
                    }`}
            >
                Spanish
            </button>
        </div>
    )
}