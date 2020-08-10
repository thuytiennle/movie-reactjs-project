import { createContext } from 'react';
import { dictionaryList } from '../../translations';

// Create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'vi',
  dictionary: dictionaryList.vn,
});
