// See [console.assert not throwing with v22.4.0](https://github.com/facebook/jest/issues/5634)
import assert from 'assert'; // eslint-disable-line import/newline-after-import
console.assert = assert;

// See [Event: 'unhandledRejection'](https://nodejs.org/api/process.html#process_event_unhandledrejection)
// See [Bluebird Error management configuration](http://bluebirdjs.com/docs/api/error-management-configuration.html)
process.on('unhandledRejection', (reason: Error | any, _promise: Promise<any>) => {
  throw reason;
});
