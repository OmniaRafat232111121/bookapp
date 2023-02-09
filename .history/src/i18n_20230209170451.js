import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateEn from './local/en.json'
import translateAr from './local/ar'
const resources = {
  en: {
    translation: translateEn
  },
  ar: {
    translation: 
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