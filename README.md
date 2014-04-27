# pull-flickr

Consume the flickr API (search at this stage) with pull-streams


[![NPM](https://nodei.co/npm/pull-flickr.png)](https://nodei.co/npm/pull-flickr/)


## Example Usage

```js
var pull = require('pull-stream');
var flickr = require('pull-flickr')({ api_key: 'ca43d47b18b91ff639c9628f9cf828cd' });

// search for water buffalo and output the results to the console
// NOTE: because this is using a pull.log (which uses a pull.drain) all
// the results will be displayed
pull(
  flickr.search('water buffalo', { is_commons: true }),
  pull.log()
);

```

## License(s)

### ISC

Copyright (c) 2014, Damon Oehlman <damon.oehlman@gmail.com>

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
