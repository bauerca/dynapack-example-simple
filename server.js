var connect = require('connect');
var serveStatic = require('serve-static');
var route = require('./route');
var parseurl = require('parseurl');
var fs = require('fs');

var scripts = fs.readFileSync('bundles/app.html', {encoding: 'utf8'});
var words = 'hey do you want to know a secret';

// Page layout.
function renderString(content) {
  return (
    '<html>' +
    '<head>' +
      '<style>li {cursor: pointer;} li:hover {color: #3366bb;}</style>' +
    '</head>' +
    '<body>' +
      '<h1>Find the secret</h1>' +
      '<ul>' +
      words.split(' ').map(function(word) {
        return '<li onclick="go(\'/' + word + '\')">secret</li>';
      }).join('') +
      '</ul>' +
      '<div id="content">' + content + '</h1>' +
      scripts +
    '</body>' +
    '</html>'
  );
}

var app = connect();

// Serve js bundles and secret prize image.
app.use(serveStatic(__dirname + '/bundles'));
app.use('/images', serveStatic(__dirname + '/images'));

app.use(function(req, res) {
  route(parseurl(req).path, function(err, content) {
    var html = renderString(err ? err.message : content);
    res.end(html);
  });
});

app.listen(3333, function(err) {
  if (err) throw err;
  console.log('Go to http://localhost:3333');
});
