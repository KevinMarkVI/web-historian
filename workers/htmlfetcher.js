var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('request');
// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.

var htmlFetcher = function () {
	archive.readListOfUrls(function(data) {
		console.log(data);
	});

}






//for the websites in the archive read the list of URLs from that file and fetch the 
//pages specified by those URLs from the internet, saving each web page into a file on your computer. 
//should run on a schedule using CRON