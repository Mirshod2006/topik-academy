import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uzTranslate from '../src/locals/eng.json';
import ruTranslate from '../src/locals/ru.json';
import engTranslate from '../src/locals/eng.json';


const lng = localStorage.getItem('i18nextLng')||'uz';

i18n.use(
    Backend
)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng : 'eng',
    lng:lng,
    debug:'true',
    resources:{
        uz : {translation : uzTranslate},
        ru : {translation : ruTranslate},
        eng : {translation : engTranslate},
    }
})

export default i18n;



