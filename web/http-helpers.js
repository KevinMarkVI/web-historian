var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var http = require('http');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(response, asset, callback) {
  var statusCode = 200;
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  response.writeHead(statusCode, headers);
  response.write(asset);
  response.end();
};

exports.sendResponse = function(response, statusCode) {
  response.writeHead(statusCode, headers);
  response.end();
};

exports.sendRedirect = function(response) { //probably more to this
  response.writeHead(302, {
    'Location': './public/loading.html'
  });
  response.end();

};
 
// As you progress, keep thinking about what helper functions you can put here!
