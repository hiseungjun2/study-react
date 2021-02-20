const Koa = require('koa');

const app = new Koa();

// next 함수는 Promise 함수를 반환
// next 함수가 반환하는 Promise 는 다음에 처리해야 할 미들웨어가 끝나야 완료
app.use(async (ctx, next) => {
    console.log(ctx.url);
    console.log(1);
    if (ctx.query.authorized != '1') {      // localhost:4000/?authorized=1
        ctx.status = 401;   // Unauthorized
        return;
    }
    // next().then(() => {
    //     console.log('END');
    // });
    await next();
    console.log('END');
})

app.use((ctx, next) => {
    console.log(2);
    next();
}) 

app.use(ctx => {
    ctx.body = 'hello World';
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
})