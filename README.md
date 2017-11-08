
# pull-flickr

Consume the flickr API (search at this stage) with pull-streams


[![NPM](https://nodei.co/npm/pull-flickr.png)](https://nodei.co/npm/pull-flickr/)

[![bitHound Score](https://www.bithound.io/github/DamonOehlman/pull-flickr/badges/score.svg)](https://www.bithound.io/github/DamonOehlman/pull-flickr) 

## Example Usage

Displayed below is a simple example that looks for "water buffalo" in the
creative commons collection from flickr.

```js
const pull = require('pull-stream');
const flickr = require('pull-flickr')({ api_key: 'ca43d47b18b91ff639c9628f9cf828cd' });

// search for water buffalo and output the results to the console
// NOTE: because this is using a pull.log (which uses a pull.drain) all
// the results will be displayed
pull(
  flickr.search('water buffalo', { is_commons: true }),
  pull.log()
);

```

To convert the item data into image urls, you can use a `pull.map`
through in combination with the `flickr.url` function:

```js
const pull = require('pull-stream');
const { search, url } = require('pull-flickr')({ api_key: 'ca43d47b18b91ff639c9628f9cf828cd' });

pull(
  search('water buffalo', { is_commons: true }),
  pull.map(result => url('small square', result)),
  pull.log()
);

```

## Specifying API Options

While I normally prefer options that use mixed case identifiers, this module
uses the underscore separated identifiers that are documented in the
[Flickr Search API](https://www.flickr.com/services/api/).  This means that
any of the options that are passed through as query string parameters can be
used in this module.

## License(s)

### ISC

Copyright (c) 2017, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
