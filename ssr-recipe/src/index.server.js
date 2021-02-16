// 서버 사이드 렌더링을 위한 엔트리 파일 생성
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// Express 추가
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';
// 정적 파일 제공하기 위한 import
import fs from 'fs';

// asset-manifest.json
const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
);

const chunks = Object.keys(manifest.files)
                .filter(key => /chunk\.js$/.exec(key))      // chunk.js 로 끝나는 키를 찾아서
                .map(key => `<script src="${manifest.files[key]}"></script>`)   // 스크립트 태그로 변환하고
                .join('');  // 합친다.

function createPage(root) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>React App</title>
        <link href="${manifest.files['main.css']}" rel="stylesheet" />
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app</noscript>
        <div id="root">
            ${root}
        </div>
        <script src="${manifest.files['runtime-main.js']}"></script>
        ${chunks}
        <script src="${manifest.files['main.js']}"></script>
    </body>
    </html>
    `;
}

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = (req, res, next) => {
    // 이 함수는 404 에러가 떠야 하는 상황에 404 를 띄우지 않고 서버 사이드 렌더링을 해준다.
    const context = {};
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    const root = ReactDOMServer.renderToString(jsx);    // 렌더링을 하고 
    // res.send(root); // 클라이언트에게 결과물을 응답
    res.send(createPage(root));
};

const serve = express.static(path.resolve('./build'), {
    index : false,      // "/" 경로에서 index.html 을 보여 주지 않도록 설정
});

app.use(serve);     // 순서 중요, serverRender 전에 위치해야 함
app.use(serverRender);

// 5000포트로 서버를 가동
app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
})

// const html = ReactDOMServer.renderToString(
//     <div>Hello Server Side Rendering!</div>
// );

// console.log(html);