import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
import en from "./locales/en/translation.json";
import fi from "./locales/fi/translation.json";

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      fi: { translation: fi },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already protects from XSS
    },
  });

  i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng); // 👈 Save language
});

export default i18n;
