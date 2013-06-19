define(['require',
        'mocha',
        'chai',
        'mocha-results'],
function(require, mocha, chai, results) {
  mocha.setup('bdd');
  expect = chai.expect
  
  require(['test/render-hogan.test'],
  function() {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { results(mocha.run()); }
  });
});
