/*
 * @Author: icezeros
 * @Date: 2018-08-27 19:07:13
 * @Last Modified by: icezeros
 * @Last Modified time: 2018-08-28 11:26:13
 */
'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index(ctx) {
    ctx.body = 'hi, egg';
  }
  async create(ctx) {
    console.log(ctx.request.body);
    await ctx.model.Test.create({ body: ctx.request.body });
    ctx.body = { resutl: 'hi, egg' };
  }
}

module.exports = TestController;
