import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
// Get text according to id & current language
export function TextTranslation({ id }) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[id] || id;
}
