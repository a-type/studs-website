import React, { Component } from 'react';
import { StudsWebsiteThemeProvider } from './theme';
import Gradient from './components/Gradient';
import Intro from './sections/Intro';
import Bottom from './sections/Bottom';

class App extends Component {
  render() {
    return (
      <StudsWebsiteThemeProvider>
        <Gradient>
          <Intro />
          <div style={{ height: '600vh' }} />
          <Bottom />
        </Gradient>
      </StudsWebsiteThemeProvider>
    );
  }
}

export default App;
