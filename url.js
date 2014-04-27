var formatter = require('formatter');
var suffixes = {
  'small square': 's',
  'large square': 'q',
  'thumbnail': 't',
  'small': 'm',
  'small:240': 'm',
  'small:320': 'n',
  'medium': '-',
  'medium:500': '-',
  'medium:640': 'z',
  'medium:800': 'c',
  'large': 'b',
  'original': 'o'
};

module.exports = function(type, item) {
  var suffix = suffixes[type] || '';
  var urlstr = 'http://farm{{ farm }}.staticflickr.com/{{ server }}/{{ id }}_{{ secret }}';
  var imageurl = formatter(urlstr + (suffix ? '_' + suffix : '') + '.jpg');

  function genurl(item) {
    return imageurl(item);
  }

  return item ? genurl(item) : genurl;
}
