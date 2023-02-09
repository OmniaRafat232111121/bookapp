import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translateEn from './local/en.json'
import translateAr from './local/ar.json'
const resources = {
  en: {
    translation: translateEn
  },
    ar: {
        translation: translateAr
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;