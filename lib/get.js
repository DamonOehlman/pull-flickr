var baseUrl = 'https://api.flickr.com/services/rest/?';
var https = require('https');
var qs = require('querystring');
var jsonparse = require('cog/jsonparse');
var concat = require('concat-stream');

module.exports = function(opts, callback) {
  https.get(baseUrl + qs.stringify(opts), function(res) {
    res.pipe(concat({ encoding: 'string' }, function(data) {
      callback(null, jsonparse(data));
    }));
  });
};

