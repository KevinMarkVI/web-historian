var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.getSite = function() {};

exports.saveSite = function() {};


exports.handleRequest = function (req, res) {
  var statusCode = 200;
  var http = fs.readFile('./public/index.html', function(err, data) {
    if (err) {
      throw err;
    } else {
      return data;
    }
  });
  //check path
  // if incorrect send back a 404

  if (req.method === 'GET') {

    httpHelpers.sendResponse(response, http, statusCode);

  } else if (req.method === 'POST') {

  } else if (req.method === 'OPTIONS') {

  }

  res.end(archive.paths.list);
};



//headers are in /http-helpers.js