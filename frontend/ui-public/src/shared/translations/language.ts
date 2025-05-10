import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'

export const languageOptions = [
  { label: 'Deutsch', value: 'de' },
  { label: 'English', value: 'en' }
];

const supportedLocales = ['de', 'en'] as const
export type SupportedLocale = typeof supportedLocales[number]

// Select a language safely
export const resolvePreferredLanguage = (): SupportedLocale => {
  const saved = localStorage.getItem('preferredLanguage')?.slice(0, 2).toLowerCase()
  const browser = navigator.language.slice(0, 2).toLowerCase()
  if (supportedLocales.includes(saved as SupportedLocale)) return saved as SupportedLocale
  if (supportedLocales.includes(browser as SupportedLocale)) return browser as SupportedLocale
  return 'en'
}

export const preferredLanguage: SupportedLocale = resolvePreferredLanguage()

export const i18n = createI18n({
  legacy: false,
  locale: preferredLanguage,
  fallbackLocale: 'en',
  messages: {
    en,
    de
  }
})

export const changeLanguage = (lang: SupportedLocale) => {
  localStorage.setItem('preferredLanguage', lang)
  i18n.global.locale.value = lang
}
