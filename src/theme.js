import Theme, { createThemeProvider } from 'react-studs';

const theme = new Theme('studs-website', {
  colors: {
    primary: '#13547a',
    secondary: '#80d0c7',
  },
});

export default theme;
export const StudsWebsiteThemeProvider = createThemeProvider(theme);
