import AsyncStorage from '@react-native-async-storage/async-storage'
import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import ru from './locales/ru.json'
import en from './locales/en.json'
import es from './locales/es.json'
import dayjs from 'dayjs'

const languageDetectorFactory = (fallback) => ({
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (cb) => {
    try {
      const preferredLanguage = await AsyncStorage.getItem('lang')
      if (preferredLanguage) {
        cb(preferredLanguage)
        dayjs.locale(preferredLanguage)
      } else {
        cb(fallback)
        dayjs.locale(fallback)
      }
    } catch {
      cb(fallback)
      dayjs.locale(fallback)
    }
  },
  cacheUserLanguage: async (language) => {
    try {
      await AsyncStorage.setItem('lang', language)
    } catch {}
  },
})

export default i18next
  .use(initReactI18next)
  .use(languageDetectorFactory('ru'))
  .init({
    resources: {
      ru,
      en,
      es,
    },
    // lng: 'ru', // if you're using a language detector, do not define the lng option
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpol..
    },
    react: {withSuspense: true},
  })
