// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');

/** @type import('@jest/types').Config.InitialOptions */
const config = {
  preset: 'ts-jest',

  // https://github.com/kulshekhar/ts-jest/blob/v25.2.0/docs/user/config/isolatedModules.md
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },

  setupFiles: ['./jest.setup.ts'],
  coveragePathIgnorePatterns: [...defaults.coveragePathIgnorePatterns, './jest.setup.ts'],

  // By default Jest allows for __tests__/*.js, *.spec.js and *.test.js
  // See https://jestjs.io/docs/en/configuration#testregex-string-array-string
  // let's be strict and use *.test.js only
  testRegex: '\\.test\\.tsx?$'
};

module.exports = config;
