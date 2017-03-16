module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {title: 'buy books'},
        {title: 'fix notebooks'}
      ])
    }
  }
};
