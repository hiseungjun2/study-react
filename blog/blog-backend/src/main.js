// 환경설정 파일 연결
require('dotenv').config();
// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// DB 연결
// const mongoose = require('mongoose');
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
// DB 연결
import mongoose from 'mongoose';
import jstMiddleware from './lib/jwtMiddleware';

import api from './api';
// // 가짜 데이터
// import createFakeData from './createFakeData'

import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

// 비구조화 할당을 통해 process.env 내부 값에 대해 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;

// DB 연결
mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
.then(() => {
    console.log('Connected to MongoDB');
    // createFakeData();
})
.catch(e => {
    console.error('e');
})

// const api = require('./api');

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
app.use(jstMiddleware);

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

const buildDirectory = path.resolve(__dirname, '../../blog-frontend/build');
app.use(serve(buildDirectory));
app.use(async ctx => {
    // Not Found 이고 주소가 /api 로 시작하지 않는 경우
    if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
        // index.html 내용 반환
        await send(ctx, 'index.html', { root : buildDirectory });
    }
});

// PORT가 지정되어 있지 않다면 4000을 적용
const port = PORT || 4000;
app.listen(port, () => {
    console.log('Listening to port %d', port);
})