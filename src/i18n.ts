import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import app from "./public/locales/pt/app.json";
import app2 from "./public/locales/en/app.json";

declare module "react-i18next" {
    interface CustomTypeOptions {
        defaultNS: "app";
        resources: {
            app: typeof app;
        };
    }
}

i18n.use(initReactI18next).init({
    fallbackLng: "pt",
    debug: true,
    resources: {
        pt: {
            app,
        },
        en: {
            app: app2,
        },
    },
});

export default i18n;
