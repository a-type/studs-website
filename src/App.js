import React, { Component } from 'react';
import { StudsWebsiteThemeProvider } from './theme';
import Gradient from './components/Gradient';
import Article from './components/Article';
import Intro from './sections/Intro';
import Bottom from './sections/Bottom';
import Purpose from './sections/Purpose';
import Instructions from './sections/Instructions';

class App extends Component {
  render() {
    return (
      <StudsWebsiteThemeProvider>
        <div style={{ position: 'relative' }}>
          <Gradient>
            <Article>
              <Intro />
              <Purpose />
              <Instructions />
            </Article>
            <div style={{ height: '400px' }} />
          </Gradient>
          <Bottom />
        </div>
      </StudsWebsiteThemeProvider>
    );
  }
}

export default App;
