module.exports = app => {

  app.listen(PORT, () => {
    console.log(`NTASK API - PORT ${app.get('port')}`);
  });

};
