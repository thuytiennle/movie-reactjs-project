import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { dictionaryList, languageOptions } from '../../translations';
import { LanguageContext } from './LanguageContext';

// it provides the language context to app
export default function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('vi');

  // provider is default params passing to language context
  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      // Get value from languageOptions with seleted is key
      const newLanguage = languageOptions[selected] ? selected : 'vi';
      // Set state of userLanguage with newLanguage
      setUserLanguage(newLanguage);
      // Store selected language in localStorage in case we are off browser. Browser still displays this language when we reopen web
      window.localStorage.setItem('rcml-language', newLanguage);
    },
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
