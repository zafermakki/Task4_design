import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

import translationEn from "./local/en.json";
import translationAr from "./local/ar.json";
import translationTr from "./local/tr.json";
import translationDe from "./local/de.json";
import translationFr from "./local/fr.json";

const resources = {
  en: {
    translation:translationEn
  },
  ar: {
    translation:translationAr
  },
  tr: {
    translation: translationTr,
  },
  de: {
    translation: translationDe,
  },
  fr: {
    translation: translationFr,
  },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) 
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en',

    interpolation: {
      escapeValue: false 
    },
    react : {
        useSuspense: false
    }
  });

  export default i18n;