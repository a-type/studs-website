const path = require('path');

// config for example code styleguide
module.exports = {
  sections: [
    {
      name: 'Components',
      components: 'src/components/**/*.js',
    },
  ],
  ignore: ['src/components/**/index.js'],
  styleguideDir: 'docs',
  require: ['styled-components'],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'tools/Wrapper'),
  },
};
