define(['render-hogan'],
function(hogan) {

  describe("render-hogan", function() {
    
    it('shoud export setup function', function() {
      expect(hogan).to.exist;
      expect(hogan).to.be.a('function');
    });
    
  });
  
  describe("engine", function() {
  
    var engine = hogan();
    
    it('shoud return compiled template function', function() {
      var template = engine('Hello {{name}}');
      expect(template).to.be.a('function');
      
      var output = template({ name: 'World' });
      expect(output).to.be.equal('Hello World');
    });
    
  });
  
  return { name: "test.render-hogan" }
});
