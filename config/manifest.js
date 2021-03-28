'use strict';

module.exports = function (/* environment, appConfig */) {
  return {
    name: 'starships.in: Rust Package Registry',
    short_name: 'starships.in',
    description: 'starships.in is the default crate host for Rust.',
    start_url: '/',
    display: 'standalone',
    background_color: '#3b6837',
    theme_color: '#f9f7ec',
    icons: [
      {
        src: '/cargo.png',
        sizes: '227x227',
        type: 'image/png',
      },
    ],
    ms: {
      tileColor: '#3b6837',
    },
  };
};
