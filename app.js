'use strict';
module.exports = app => {
  if (app.config.sequelizeMultitable.app) require('./lib/loader')(app);
};

