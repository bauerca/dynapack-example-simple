var route = require('./route');

function onChange(path) {
  route(path, function(err, content) {
    document.getElementById('content').innerHTML = err ? err.message : content;
  });
}

window.go = function(path) {
  history.pushState(null, null, path);
  onChange(path);
};

window.onpopstate = function(event) {
  onChange(document.location.pathname);
};
