var pull = require('pull-stream');
var flickr = require('../')({ api_key: 'ca43d47b18b91ff639c9628f9cf828cd' });
var extend = require('cog/extend');

pull(
  flickr.search('water buffalo', { is_commons: true }),
  pull.map(flickr.url('small square')),
  pull.log()
);
