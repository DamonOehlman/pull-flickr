module.exports = function(baseOpts) {
  return {
    search: require('./search')(baseOpts)
  };
};
