const { pull } = require('pull-stream');
const extend = require('cog/extend');
const get = require('./lib/get');

module.exports = function(baseOpts) {
  return (text, searchOpts) => {
    // get our search operation opts
    const opts = extend({}, baseOpts, searchOpts, {
      method: 'flickr.photos.search',
      nojsoncallback: 1,
      text: text,
      format: 'json'
    });

    let queuedResults = [];
    let endOfResults = false;
    let page = 1;

    return (end, callback) => {
      if (end) {
        return callback(end);
      }

      if (sendNextResult(callback)) {
        return;
      }

      getMoreResults(callback);
    }

    function sendNextResult(callback) {
      if (queuedResults.length > 0) {
        callback(false, queuedResults.shift());
        return true;
      }

      if (endOfResults) {
        callback(false);
      }

      return false;
    }

    function getMoreResults(callback) {
      get(extend({ page: page }, opts), (err, data) => {
        if (err) {
          return callback(err);
        }

        // check if the results is ok
        const ok = data && data.stat === 'ok'
          && data.photos && data.photos.photo
          && data.photos.photo.length > 0;

        // if not ok, then end the stream
        if (!ok) {
          return callback(true);
        }

        page += 1;
        queuedResults = queuedResults.concat(data.photos.photo);
        sendNextResult(callback);
      });
    }
  };
};
