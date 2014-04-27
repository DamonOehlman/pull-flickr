/**
  # pull-flickr

  Consume the flickr API (search at this stage) with pull-streams

  ## Example Usage

  Displayed below is a simple example that looks for "water buffalo" in the
  creative commons collection from flickr.

  <<< examples/water-buffalo.js

  To convert the item data into image urls, you can use a `pull.map`
  through in combination with the `flickr.url` function:

  <<< examples/water-buffalo-url.js

  ## Specifying API Options

  While I normally prefer options that use mixed case identifiers, this module
  uses the underscore separated identifiers that are documented in the
  [Flickr Search API](https://www.flickr.com/services/api/).  This means that
  any of the options that are passed through as query string parameters can be
  used in this module.

**/

module.exports = function(baseOpts) {
  return {
    search: require('./search')(baseOpts),
    url: require('./url')
  };
};
