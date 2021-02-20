const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
// router.get('/', ctx => {
//     ctx.body = '홈';
// });
// router.get('/about/:name?', ctx => {
//     const { name } = ctx.params;
//     // name의 존재 유무에 따라 다른 결과 출력
//     ctx.body = name ? `${name}의 소개` : '소개';
// });
// router.get('/post', ctx => {
//     const { id } = ctx.query;
//     // id의 존재 유무에 따라 다른 결과 출력
//     ctx.body = id ? `포스트 ${id}` : `포스트 아이디가 없습니다.`;
// })

// 라우터 설정 (여러 파일로 분리한 것)
router.use('/api', api.routes());   // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// next 함수는 Promise 함수를 반환
// next 함수가 반환하는 Promise 는 다음에 처리해야 할 미들웨어가 끝나야 완료
// app.use(async (ctx, next) => {
//     console.log(ctx.url);
//     console.log(1);
//     if (ctx.query.authorized != '1') {      // localhost:4000/?authorized=1
//         ctx.status = 401;   // Unauthorized
//         return;
//     }
//     // next().then(() => {
//     //     console.log('END');
//     // });
//     await next();
//     console.log('END');
// })

// app.use((ctx, next) => {
//     console.log(2);
//     next();
// }) 

// app.use(ctx => {
//     ctx.body = 'hello World';
// });

app.listen(4000, () => {
    console.log('Listening to port 4000');
})