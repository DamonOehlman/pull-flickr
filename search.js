var concat = require('concat-stream');
var config = require('./config');
var pull = require('pull-core');
var extend = require('cog/extend');
var jsonparse = require('cog/jsonparse');
var request = require('hyperquest');
var qs = require('querystring');

module.exports = function(baseOpts) {

  return pull.Source(function(text, searchOpts) {
    // get our search operation opts
    var opts = extend({}, baseOpts, searchOpts, {
      method: 'flickr.photos.search',
      nojsoncallback: 1,
      text: text,
      format: 'json'
    });

    var queuedResults = [];
    var endOfResults = false;
    var page = 1;

    function getMoreResults(cb) {
      var writer = concat({ encoding: 'string' }, function(data) {
        var ok;

        // attempt to parse to json
        data = jsonparse(data);

        // check if the results is ok
        ok = data && data.stat === 'ok' &&
          data.photos && data.photos.photo &&
          data.photos.photo.length > 0;

        // if not ok, then end the stream
        if (! ok) {
          return cb(true);
        }

        // add to the queued results
        queuedResults = queuedResults.concat(data.photos.photo);

        // now try and provide the result
        next(null, cb);
      });

      request(config.baseUrl + qs.stringify(extend({ page: page }, opts))).pipe(writer);

      // increase the page number
      page += 1;
    }

    function next(end, cb) {
      var nextResult;

      // if we are at the end, then abort immediately
      if (end) {
        return cb(end);
      }

      // get the next result
      nextResult = queuedResults.shift();

      if (! nextResult) {
        // if we are at the end of results, flag that we are at the end
        if (endOfResults) {
          return cb(true);
        }

        // otherwise, get more results
        return getMoreResults(cb);
      }

      // supply the next result
      cb(null, nextResult);
    }

    return next;
  });
};
