import * as Localization from "expo-localization"
import i18n from "i18n-js"
import en from "./en.json"
import ja from "./ja.json"
import zhHK from "./zh_HK.json"
// import { useStores } from "../models"

i18n.fallbacks = true
i18n.translations = { en, ja, ...{'zh-Hant-HK': zhHK}}

console.log(Localization, 'Localization.locale')

// const { langStore } = useStores()
// console.log(langStore, 'langStore')
i18n.locale = Localization.locale || "en"

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]
