// 라우터를 여러 파일로 분리
const Router = require('koa-router');
// posts 가져오기
const posts = require('./posts');

const api = new Router();

// api.get('/test', ctx => {
//     ctx.body = 'test 성공';
// });
api.use('/posts', posts.routes());

// 라우터를 내보낸다.
module.exports = api;
