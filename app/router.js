'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/wechatAuth', controller.wechatAuth.index);
  router.all('/wechat', controller.wechat.wechat);
  router.post('/test/coinbase', controller.test.create);
};
