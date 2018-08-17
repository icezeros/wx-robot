/*
 * @Author: icezeros 
 * @Date: 2018-08-17 16:15:20 
 * @Last Modified by: icezeros
 * @Last Modified time: 2018-08-17 16:58:30
 */
'use strict';

const Controller = require('egg').Controller;

class WeixinAuthController extends Controller {
  async index() {
    const { ctx } = this;
    const query = ctx.query;
    const { signature, echostr, timestamp, nonce } = query;
    const original = [nonce, timestamp, ctx.app.config.wxToken].sort().join('');
    console.log('Original str : ' + original);
    console.log('Signature : ' + signature);
    const scyptoString = sha1(original);
    if (signature === scyptoString) {
      this.ctx.body(echostr);
      console.log('Confirm and send echo back');
    } else {
      this.ctx.body('false');
      console.log('Failed!');
    }
  }
  sha1(str) {
    var md5sum = crypto.createHash('sha1');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
  }
}

module.exports = WeixinAuthController;
