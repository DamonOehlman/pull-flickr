var pull = require('pull-stream');
var flickr = require('../')({ api_key: 'ca43d47b18b91ff639c9628f9cf828cd' });

// search for water buffalo and output the results to the console
// NOTE: because this is using a pull.log (which uses a pull.drain) all
// the results will be displayed
pull(
  flickr.search('water buffalo', { is_commons: true }),
  pull.log()
);
