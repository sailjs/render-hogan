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
  
  describe("engine with options", function() {
  
    var engine = hogan({ delimiters: '<% %>' });
    
    it('shoud return compiled template function', function() {
      var template = engine('my <%example%> template.');
      expect(template).to.be.a('function');
      
      var output = template({ example: 'Hogan.js' });
      expect(output).to.be.equal('my Hogan.js template.');
    });
    
  });
  
  return { name: "test.render-hogan" }
});
