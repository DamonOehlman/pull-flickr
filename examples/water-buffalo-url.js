const pull = require('pull-stream');
const { search, url } = require('../')({ api_key: 'ca43d47b18b91ff639c9628f9cf828cd' });

pull(
  search('water buffalo', { is_commons: true }),
  pull.map(result => url('small square', result)),
  pull.log()
);
