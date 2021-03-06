require.config({
  baseUrl: 'js/lib',
  paths: {
    'test': '../../..',
    'hogan': '../../vendor/hogan/2.0.0/hogan-2.0.0',
    'mocha': 'mocha/mocha',
    'chai': 'chai/chai'
  },
  packages: [
    { name: 'render-hogan', location: '../../../..', main: 'render-hogan' }
  ],
  shim: {
    'hogan': {
      exports: 'Hogan'
    },
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['../suite']);
