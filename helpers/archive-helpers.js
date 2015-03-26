var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

//callback?
// may need fs.open and/or fs.close with flags to access files. 

//two files: 
//'./archives/sites.txt'        and  './web/archives/sites.txt'
// for sites to be archived            archived sites 
  
exports.readListOfUrls = function(){ 
  fs.readFile('./archives/sites.txt', function(err, data) { 
    if (err) {
      throw err;
    } else {
      return data.split('/n'); //returns array... probably should check if that is what it is expecting
    }
  });
};

exports.isUrlInList = function(url, callback) { //sites/sites.txt
  fs.readFile('./archives/sites.txt', function(err, data) {
    if (err) {
      throw err;
    }
    data = data.split('/n');
    for (var i = 0; i < data.length; i++) {
      if (data[i] === url) {
        return true;
      }
    }
  });
  return false;
};

exports.addUrlToList = function(fileName, url, callback){
  url += '/n'; //seems like a good idea... might not be
  fs.appendFile(fileName, url, function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Url saved!....maybe....you should check.');
    }
  });
};

exports.isUrlArchived = function(url, callback){ //archives/sites.txt
  fs.readFile('./web/archives/sites.txt', function(err, data) {
    if (err) {
      throw err;
    }
    data = data.split('/n');
    for (var i = 0; i < data.length; i++) {
      if (data[i] === url) {
        return true;
      }
    }
  });
  return false;
};

exports.downloadUrls = function(fileName, callback) { //not sure what this will be associated with. Needs correct fileName
  fs.readFile(fileName, function(err, data) {
    if (err) {
      throw err;
    } else {
      return data.split('/n'); //need to check what format the data is to be returned.
    }
  });
};
