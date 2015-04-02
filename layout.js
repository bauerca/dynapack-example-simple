var fs = require('fs');

var scripts = fs.readFileSync('bundles/browser.html', {encoding: 'utf8'});
var words = 'hey do you want to know a secret';

function layout(content) {
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

module.exports = layout;
