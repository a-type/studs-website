const path = require('path');

// config for example code styleguide
module.exports = {
  sections: [
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.js',
    },
  ],
  ignore: ['src/components/**/index.js'],
  styleguideDir: 'docs',
  require: ['styled-components', path.join(__dirname, './src/theme')],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'tools/Wrapper'),
  },
};
