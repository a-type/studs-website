import Theme, { createThemeProvider } from 'react-studs';
import { injectGlobal } from 'styled-components';
import brandFont from './fonts/Legothick.ttf';

injectGlobal`
  * { box-sizing: border-box; }
  body,html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 14px;
    letter-spacing: 0.28px;
    line-height: 1.5;
  }

  @font-face {
    font-family: 'Legothick';
    src: url(${brandFont});
    font-weight: normal;
    font-style normal;
  }
`;

const theme = new Theme('studs-website', {
  colors: {
    primary: '#444',
    primaryContrast: '#fff',
  },
  fonts: {
    brand: 'Legothick',
  },
});

export default theme;
export const StudsWebsiteThemeProvider = createThemeProvider(theme);
