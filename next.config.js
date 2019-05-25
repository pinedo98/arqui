// next.config.js
const withCSS = require('@zeit/next-css');

// next.config.js
// const withSass = require('@zeit/next-sass');

module.exports = withCSS({
  target: 'serverless',
});

// module.exports = withSass({
//   cssLoaderOptions: {
//     url: false
//   }
// });