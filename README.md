# Sail / Render-Hogan

This module provides an engine for rendering [Mustache](http://mustache.github.com/)
templates in [Sail.js](https://github.com/sailjs/sail) applications.  Internally,
[Hogan.js](https://github.com/twitter/hogan.js) is used to render templates.

## Install

##### volo

    $ volo add sailjs/render-hogan

For more information on using volo to manage JavaScript modules, visit [http://volojs.org/](http://volojs.org/).

## Usage

Register engine with [render](https://github.com/sailjs/render) to process
Mustache templates:

```javascript
render.engine('text/x-mustache-template', hogan());
```

## Tests

##### Browser

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari

##### PhantomJS

To run headless tests from a terminal using [PhantomJS](http://phantomjs.org/):

    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
