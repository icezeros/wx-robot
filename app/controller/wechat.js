/*
 * @Author: icezeros
 * @Date: 2018-08-17 16:15:20
 * @Last Modified by: icezeros
 * @Last Modified time: 2018-08-17 19:01:59
 */
'use strict';
const crypto = require('crypto');
const Controller = require('egg').Controller;
const wechat = require('co-wechat');

class WeixinAuthController extends Controller {}
WeixinAuthController.prototype.wechat = wechat(
  'Secrypto2018'
  // 当有前置中间件设置 ctx.wx_token 和 ctx.wx_cryptor 时，这里配置随意填写
  // token: 'Secrypto2018',
  // appid: 'wx5972cd3080b9aae9',
  // encodingAESKey: '90c117e5800b2fb6ef7d29b24ccc6d7d',
).middleware(async (message, ctx) => {
  const query = ctx.query;
  const body = ctx.request.body;
  // const { signature, echostr, timestamp, nonce } = query;
  // const original = [ nonce, timestamp, ctx.app.config.wxToken ].sort().join('');
  console.log('query : ' + query);
  console.log('body : ' + body);
  console.log('message : ' + JSON.stringify(message));
  return [
    {
      title: '你来我家接我吧',
      description: '这是女神与高富帅之间的对话',
      picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
      url: 'http://nodeapi.cloudfoundry.com/',
    },
  ];
  // const scyptoString = this.sha1(original);
  // TODO
});

module.exports = WeixinAuthController;
