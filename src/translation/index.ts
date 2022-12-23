import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { Alert, I18nManager, NativeModules, Platform } from 'react-native';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import resources from './lang';
import userLanguage from './lang/userLanguage';

const getDeviceLocale = (): string => {
  let locale: string;
  if (Platform.OS === 'ios') {
    const {
      SettingsManager: { settings },
    } = NativeModules;
    locale = settings.AppleLocale || settings.AppleLanguages[0] || 'en';
  } else if (Platform.OS === 'android') {
    locale = NativeModules.I18nManager.localeIdentifier;
  } else {
    locale = 'en';
  }

  const [language] = locale.replace('_', '-').split('-'); // returned device locale can have '_' or '-'
  return language;
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector' as 'languageDetector',
  async: true, // flags below detection to be async
  detect: (cb: Function): Promise<string> =>
    AsyncStorage.getItem(userLanguage)
      .then((language) => {
        console.log('transIndexLang', language);
        if (!language) {
          const locale = getDeviceLocale();
          if (locale == 'ar') {
            if (I18nManager.isRTL == false) {
              I18nManager.forceRTL(true);
              setTimeout(() => {
                RNRestart.Restart();
              }, 3000);
            }
          } else {
            if (I18nManager.isRTL == true) {
              I18nManager.forceRTL(false);
              setTimeout(() => {
                RNRestart.Restart();
              }, 3000);
            }
          }
          return cb(locale);
        }

        if (language == 'ar') {
          if (I18nManager.isRTL == false) {
            I18nManager.forceRTL(true);
            setTimeout(() => {
              RNRestart.Restart();
            }, 3000);
          }
        } else {
          if (I18nManager.isRTL == true) {
            I18nManager.forceRTL(false);
            setTimeout(() => {
              RNRestart.Restart();
            }, 3000);
          }
        }

        return cb(language);
      })
      .catch((e) => {
        console.log('language Detector catch: ', e);
      }),

  init: () => {},

  cacheUserLanguage: (language: string) => {
    AsyncStorage.setItem(userLanguage, language).catch(() => {});
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: 'en',
    resources,
    debug: true,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false, // react is already safe from xss
    },
  });

export default i18n;
