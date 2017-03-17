module.exports = {
  database  : 'ntask',
  username  : '',
  password  : '',
  params : {
    dialect : 'sqlite',
    storage : 'ntask.sqlite',
    define  : {
      underscored: true
    }
  },
  jwtSecret: 'Nt4sk-AP1',
  jwtSession: {session: false}
};
