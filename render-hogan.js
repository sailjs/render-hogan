/**
 * render-hogan
 *
 * This module implements support for rendering [Mustache](http://mustache.github.com/)
 * templates using [Hogan.js](https://github.com/twitter/hogan.js).
 */
define(['hogan'],
function(Hogan) {
  
  /**
   * Setup Hogan.js template engine.
   *
   * When rendering, this engine returns a compiled template function which can
   * be cached for performance optimization.
   *
   * Examples:
   *
   *     render.engine('text/x-mustache-template', hogan());
   *
   * A Note on MIME Types:
   *
   * It has become common convention to include templates within HTML by
   * enclosing them within script tags:
   *
   *     <script type=“text/template”>...</script>
   *
   * Recommended practice for Sail.js applications is to be more specific when
   * indicating the MIME type, both as a way to communicate explicitly with
   * other developers and as a means to use multiple template engines within an
   * application.
   *
   * While no standard exists, the following list of MIME types are used to
   * indicate Mustache templates in practice:
   *
   *  * text/x-mustache-template
   *      [Announcing Handlebars.js](http://yehudakatz.com/2010/09/09/announcing-handlebars-js/)
   *
   * @return {Function}
   * @api public
   */
  return function() {
    
    return function(str) {
      var template = Hogan.compile(str);
    
      return function(context, partials, indent) {
        return template.render(context, partials, indent);
      }
    }
  }
  
});
