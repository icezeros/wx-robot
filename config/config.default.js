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
  config.mongoose = {
    client: {
      url: process.env.MONGO_URL,
      options: {
        replicaSet: false,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
      }
    }
  }

  return config;
};
