import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import app from './public/locales/pt/app.json';
import en from './public/locales/en/app.json';
import fr from './public/locales/fr/app.json';

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'app';
        resources: {
            app: typeof app;
        };
    }
}

i18n.use(initReactI18next).init({
    fallbackLng: 'pt',
    debug: true,
    resources: {
        pt: {
            app,
        },
        en: {
            app: en,
        },
        fr: {
            app: fr,
        },
    },
});

export default i18n;
