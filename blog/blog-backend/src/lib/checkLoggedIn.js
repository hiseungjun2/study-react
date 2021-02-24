// 로그인 해야만 글쓰기, 수정, 삭제할 수 있도록 검증

const checkLoggedIn = (ctx, next) => {
    if (!ctx.state.user) {
        ctx.status = 401;   // Unauthorized
        return;
    }
    return next();
};

export default checkLoggedIn;