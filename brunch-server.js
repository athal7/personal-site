const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

module.exports = (config, callback) => {
  app.listen(config.port, function () {
    console.log(`Example app listening on port ${config.port}!`);
    callback();
  });

  return app;
};