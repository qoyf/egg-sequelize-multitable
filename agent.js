'use strict';
module.exports = agent => {
  if (agent.config.sequelizeMultitable.agent) require('./lib/loader')(agent);
};