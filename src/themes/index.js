import defaultTheme from './default';
import darkTheme from './dark';

const themes = { defaultTheme, darkTheme };

export default function getTheme(theme) {
  return themes[theme];
}
