var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
var url = require('url');
// require more modules/folders here!

// exports.getSite = function() {};

// exports.saveSite = function() {};


exports.handleRequest = function (req, res) {

  // if (req.url) { //not sure
  //   statusCode = 404
  //   httpHelpers.sendResponse(res, statusCode)
  // }
  var statusCode = 200;
  
 // console.log('Request: ', req); //need to find req.something that will point to what file needs to be sent. 
  

  if (req.method === 'GET') {
    var urlPath = url.parse(req.url).pathname;

    if (urlPath === '/') {urlPath = '/index.html';}

    httpHelpers.serveAssets(res, urlPath, function() {

      if (urlPath[0] === '/') {urlPath = urlPath.slice(1);}
      
      archive.isUrlInList(urlPath, function(found) {

        if (found) {
          httpHelpers.sendRedirect(res, '/loading.html');
        } else {
          httpHelpers.send404(res);
        }
      });
    });



  } else if (req.method === 'POST') { 
    httpHelpers.collectData(req, function(data) {
      if (data) {
        var url = JSON.parse(data).url;
      } 
      archive.isUrlInList(url, function(found) {
        if (found) {

          archive.isUrlArchived(url, function (exists) {
            if (exists) {
              archive.sendRedirect(res, '/' + url);

            } else {
              archive.sendRedirect(res, '/loading.html');
            }
          });
        } else {
          archive.addUrlToList(url, function () {
            httpHelpers.sendRedirect(res, '/loading.html');
          })
        }
      });
    });
  } else {
    httpHelpers.send404(res);
  }
};



