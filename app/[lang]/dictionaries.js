import 'server-only'
 
const dictionaries = {
  en: () => import('@/library/dictionaries/en.json').then((module) => module.default),
  bn: () => import('@/library/dictionaries/bn.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()