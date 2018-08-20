'use strict';
const express = require('express');
const webot = require('weixin-robot');

const app = express();

// 指定回复消息
webot.set('hi', '你好');

webot.set('subscribe', {
  pattern(info) {
    return info.is('event') && info.param.event === 'subscribe';
  },
  handler(info) {
    return '欢迎订阅微信机器人';
  },
});
webot.set('robot', {
  pattern(info) {
    return true;
  },
  handler(info) {
    info.reply = [
      {
        title: '消息1',
        url: 'http://example.com/...',
        picUrl: 'http://example.com/....a.jpg',
        description: '对消息的描述出现在这里',
      },
      {
        title: '消息2',
        url: 'http://example.com/...',
        picUrl: 'http://example.com/....a.jpg',
        description: '对消息的描述出现在这里',
      },
    ];
    return;
  },
});

webot.set('test', {
  pattern: /^test/i,
  handler(info, next) {
    next(null, 'roger that!');
  },
});

// 你可以获取已定义的 rule
//
// webot.get('subscribe') ->
//
// {
//   name: 'subscribe',
//   pattern: function(info) {
//     return info.is('event') && info.param.event === 'subscribe';
//   },
//   handler: function(info) {
//     return '欢迎订阅微信机器人';
//   }
// }
//

// 接管消息请求
webot.watch(app, { token: 'Secrypto2018', path: '/' });

// 启动 Web 服务
// 微信后台只允许 80 端口
app.listen(8000);

// 如果你不想让 node 应用直接监听 80 端口
// 可以尝试用 nginx 或 apache 自己做一层 proxy
// app.listen(process.env.PORT);
// app.enable('trust proxy');
