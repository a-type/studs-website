import React, { Component } from 'react';
import { StudsWebsiteThemeProvider } from './theme';
import Gradient from './components/Gradient';
import Article from './components/Article';
import Intro from './sections/Intro';
import Purpose from './sections/Purpose';
import Instructions from './sections/Instructions';
import Install from './sections/Install';
import Footer from './sections/Footer';

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
              <Install />
            </Article>
            <Footer />
          </Gradient>
        </div>
      </StudsWebsiteThemeProvider>
    );
  }
}

export default App;
