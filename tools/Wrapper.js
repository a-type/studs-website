import React from 'react';
import { StudsWebsiteThemeProvider } from '../src/theme';

export default class Wrapper extends React.Component {
  render() {
    return React.createElement(StudsWebsiteThemeProvider, {}, React.Children.only(this.props.children));
  }
}
