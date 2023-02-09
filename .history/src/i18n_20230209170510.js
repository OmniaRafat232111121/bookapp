import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateEn from './local/en.json'
import translateAr from './local/ar.json'
const resources = {
  en: {
    translation: translateEn
  },
    ar: {
        translation: tr
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