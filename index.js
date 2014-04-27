/**
  # pull-flickr

  Consume the flickr API (search at this stage) with pull-streams

  ## Example Usage

  <<< examples/water-buffalo.js

**/

module.exports = function(baseOpts) {
  return {
    search: require('./search')(baseOpts)
  };
};
