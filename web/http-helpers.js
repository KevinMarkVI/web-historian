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
  fs.readFile(archive.paths.siteAssets + asset, function (err, data) {
    if (err) {
      fs.readFile(archive.paths.archivedSites + asset, function (err, data) {
        if (err)  {
          callback ? callback() : exports.send404(response);
        } else {
          exports.sendResponse(response, data);
        }
      });
    } else {
      exports.sendResponse(response, data);
    }
  });
};

exports.sendResponse = function(response, obj, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(obj);
};

exports.sendRedirect = function(response, location, statusCode) { //probably more to this
  statusCode = statusCode || 302
  response.writeHead(statusCode, {Location: location});
  response.end();

};
 
// As you progress, keep thinking about what helper functions you can put here!
exports.collectData = function(request, callback) {
  var data = '';
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    callback(data);
  })
}

exports.send404 = function(response) {
  exports.sendResponse(response, '404: Page not found', 404);
}