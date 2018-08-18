/*
 * @Author: icezeros
 * @Date: 2018-08-17 16:15:20
 * @Last Modified by: icezeros
 * @Last Modified time: 2018-08-18 12:13:06
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
  console.log('query : ' + query);
  console.log('body : ' + body);
  console.log('message : ' + JSON.stringify(message));
  const result = await ctx.curl('http://openapi.tuling123.com/openapi/api/v2', {
    // 必须指定 method
    method: 'POST',
    // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
    contentType: 'json',
    data: {
      reqType: 0,
      perception: {
        inputText: {
          text: message.Content,
        },
      },
      userInfo: {
        apiKey: 'ef1393cd4eab471f861a633153525182',
        userId: '310679',
      },
    },
    // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
    dataType: 'json',
  });
  console.log('result : ' + result.data);

  return JSON.stringify(result.data);
  // const scyptoString = this.sha1(original);
  // TODO
});

module.exports = WeixinAuthController;
