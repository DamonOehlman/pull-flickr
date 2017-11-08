const baseUrl = 'https://api.flickr.com/services/rest/?';
const https = require('https');
const qs = require('querystring');
const jsonparse = require('cog/jsonparse');
const concat = require('concat-stream');

module.exports = function(opts, callback) {
  https.get(baseUrl + qs.stringify(opts), function(res) {
    res.pipe(concat({ encoding: 'string' }, function(data) {
      callback(null, jsonparse(data));
    }));
  });
};

