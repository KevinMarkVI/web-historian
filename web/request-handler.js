var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.getSite = function() {};

exports.saveSite = function() {};


exports.handleRequest = function (req, res) {
  //check path
  // if incorrect send back a 404



  var statusCode = 200;

  var http = './public/index.html'
  
  console.log('Request: ', req); //need to find req.something that will point to what file needs to be sent. 
  

  if (req.method === 'GET') {
    fs.readFile(path.join(archive.paths.siteAssets, 'index.html'), function(err, data) { //request.method
      if (err) return;
      httpHelpers.serveAssets(res, data, statusCode); 
    });


  } else if (req.method === 'POST') {
    return;

  } else if (req.method === 'OPTIONS') {
    return;
  }
  //res.end(archive.paths.list);
};



//headers are in /http-helpers.js