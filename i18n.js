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

// const getLng = () => AsyncStorage.getItem("Storage_lng").then((lng) => lng)

// let lng = await AsyncStorage.getItem("Storage_lng");
// if (!lng) {
//   lng = "vi"
// }
// return lng



const i18n = async () => {
  let lng = await AsyncStorage.getItem("Storage_lng");
  if (!lng) {
    lng = "vi"
  }
  // AsyncStorage.getItem("Storage_lng").then(lng => i18next
  //   .use(initReactI18next)
  //   .init({
  //     resources,
  //     lng: 'vi',
  //     interpolation: {
  //       escapeValue: false,
  //     }
  //   }))

  return i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: lng,
      interpolation: {
        escapeValue: false,
      }
    });
}

export default i18n();