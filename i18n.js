import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { en, vi } from "./src/translation";

const resources = {
  en: {
    translation: {
      ...en,
    }
  },
  vi: {
    translation: {
      ...vi,
    }
  }
}

const languageDetector = {
  init: Function.prototype,
  type: "languageDetector",
  async: true,
  detect: async (callback) => {
    const lng = await AsyncStorage.getItem("Storage_lng");
    callback(lng);
  },
  cacheUserLanguage: () => { },
}

const i18n = async () => {
  let lng = await AsyncStorage.getItem("Storage_lng");
  if (!lng) {
    lng = "vi"
  }

  return i18next
    // .use(languageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: lng,
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n();