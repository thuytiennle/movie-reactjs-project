import { InputBase, MenuItem, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../../containers/Language/LanguageContext';
import { languageOptions } from '../../translations';

const BootstrapInput = withStyles((theme) => ({
  input: {
    backgroundColor: theme.palette.background,
    border: 'none',
    borderRadius: 4,
    padding: 5,
    fontSize: 16,
    outline: 'none',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      backgroundColor: theme.palette.background,
      borderRadius: 4,
    },
  },
}))(InputBase);

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e) => {
    userLanguageChange(e.target.value);
  };

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('rcml-language');
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <Select
      value={userLanguage}
      onChange={handleLanguageChange}
      label="languageSelctor"
      input={<BootstrapInput />}
      // Prevent vertical scroll bar of page dissapears when we open a Select component .
      MenuProps={{ disableScrollLock: true }}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <MenuItem key={id} value={id}>
          {name.toLocaleUpperCase()}
        </MenuItem>
      ))}
    </Select>
  );
}
