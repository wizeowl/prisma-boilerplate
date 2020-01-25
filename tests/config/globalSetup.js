require('babel-register');
require('@babel/polyfill/noConflict');

const server = require('../../src/server').default;

module.exports = async () => {
  global.httpServer = await server.start(
    { port: process.env.PORT },
    () => {
      console.log(
        'Test server is running. Playground at http://localhost:4321'
      );
    }
  );
};
