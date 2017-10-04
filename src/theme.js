import React from 'react';
import Theme from 'react-studs';
import { injectGlobal, ThemeProvider } from 'styled-components';
import brandFont from './fonts/Legothick.ttf';

const globals = {
  colors: {
    primary: '#12E2DB',
    white: '#FFFAFF',
    secondary: '#FC5130',
    black: '#050401',
    gray: '#303036',
    grayLight: '#51515B',
    grayLighter: '#71717C',
    grayLightest: '#e8e1e8',
    tertiary: '#ffcc55',
    quaternary: '#233d4d',
    quinary: '#fe7f2d',
  },
  fonts: {
    brand: 'Legothick',
    default: '"Open Sans", Arial, sans-serif',
    scribble: 'Caveat, cursive',
  },
  widths: {
    border: '1px',
  },
  styles: {
    border: 'solid',
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px',
    extraLarge: '32px',
  },
};

injectGlobal`
  * { box-sizing: border-box; }
  body,html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 16px;
    letter-spacing: 0.28px;
    line-height: 1.5;
    color: ${globals.colors.black};
  }

  @font-face {
    font-family: 'Legothick';
    src: url(${brandFont});
    font-weight: normal;
    font-style normal;
  }

  @import url('https://fonts.googleapis.com/css?family=Caveat|Open+Sans|Slabo+27px');
`;

const defaultTheme = new Theme('studs-website', globals);

export default defaultTheme;

// utilities for swapping themes

const secondaryTheme = defaultTheme.extend({
  ...globals,
  colors: {
    ...globals.colors,
    primary: globals.colors.secondary,
    secondary: globals.colors.primary,
    tertiary: globals.colors.quaternary,
    quaternary: globals.colors.tertiary,
    quinary: globals.colors.white,
  },
  fonts: {
    default: 'Caveat, cursive',
  },
});

const blackTheme = defaultTheme.extend({
  ...globals,
  colors: {
    ...globals.colors,
    primary: globals.colors.gray,
    secondary: globals.colors.grayLight,
    tertiary: globals.colors.grayLighter,
    quaternary: globals.colors.white,
    quinary: globals.colors.black,
    black: globals.colors.white,
    white: globals.colors.black,
    gray: globals.colors.white,
  },
  fonts: {
    default: '"Slabo 27px", serif',
  },
  styles: {
    border: 'dashed',
  },
});

const themeChangeListeners = [];

// a special theme provider capable of hot-swapping
export class StudsWebsiteThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.theme = defaultTheme;
    themeChangeListeners.push((newTheme) => {
      this.theme = newTheme;
      this.forceUpdate();
    });
  }

  render() {
    return (<ThemeProvider theme={this.theme.compile()}>{this.props.children}</ThemeProvider>);
  }
}

export const changeTheme = (themeName) => {
  console.log(themeName);
  let newTheme = defaultTheme;
  switch (themeName) {
    case 'secondary':
      newTheme = secondaryTheme;
      break;
    case 'black':
      newTheme = blackTheme;
      break;
    default:
      newTheme = defaultTheme;
      break;
  }
  themeChangeListeners.forEach((listener) => listener(newTheme));
};