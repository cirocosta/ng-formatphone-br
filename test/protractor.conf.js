exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'spec-e2e.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080/demo',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
