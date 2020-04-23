module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '57',
          chrome: '64',
          safari: '11.1',
        },
        corejs: {
          version: 2,
        },
        useBuiltIns: 'usage',
      },
    ],
  ],
};
