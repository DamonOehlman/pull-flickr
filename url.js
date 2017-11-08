const formatter = require('formatter');
const suffixes = {
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
  const suffix = suffixes[type] || '';
  const urlstr = 'http://farm{{ farm }}.staticflickr.com/{{ server }}/{{ id }}_{{ secret }}';
  const imageurl = formatter(urlstr + (suffix ? '_' + suffix : '') + '.jpg');

  return imageurl(item);
}
