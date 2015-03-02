var ensure = require('node-ensure');

var secret = './secret' /*js*/;
var nope = './nope' /*js*/;

function route(path, render) {
  var page = (path === '/secret') ? secret : nope;

  ensure([page], function(err) {
    var html;

    if (!err) {
      // 'page' is an html string.
      html = require(page);
    }

    render(err, html);
  });
}

module.exports = route;
