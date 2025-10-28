import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as 'en' | 'es')) {
        locale = routing.defaultLocale;
    }

    const [indexMessages, aboutMessages, programsMessages] = await Promise.all([
        import(`../../messages/${locale}/index.json`),
        import(`../../messages/${locale}/about.json`),
        import(`../../messages/${locale}/programs.json`)
    ]);

    return {
        locale,
        messages: {
            ...indexMessages.default,
            ...aboutMessages.default,
            ...programsMessages.default
        }
    };

});