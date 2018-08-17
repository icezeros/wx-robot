'use strict';
require('dotenv').config();

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534493649375_4254';
  config.wxToken = 'Secrypto2018';
  config.security = {
    csrf: false,
    // csrf: { ignoreJSON: true },
  };
  // add your config here
  config.middleware = [];

  return config;
};
