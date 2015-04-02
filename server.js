var connect = require('connect');
var serveStatic = require('serve-static');
var parseurl = require('parseurl');
var route = require('./route');
var layout = require('./layout');

var app = connect();

// Serve js bundles and secret prize image.
app.use(serveStatic(__dirname + '/bundles'));
app.use('/images', serveStatic(__dirname + '/images'));

app.use(function(req, res) {
  route(parseurl(req).path, function(err, content) {
    var html = layout(err ? err.message : content);
    res.end(html);
  });
});

app.listen(3333, function(err) {
  if (err) throw err;
  console.log('Go to http://localhost:3333');
});
