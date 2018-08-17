'use strict';
require('dotenv').config();

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534493649375_4254';
  config.wxToken = process.env.WXTOKEN;

  // add your config here
  config.middleware = [];

  return config;
};
