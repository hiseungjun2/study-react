import React from 'react';

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩중...'}
                {!loadingPost && post && (      // 유효성 검사, post 객체가 유효할때만 아래 렌더링
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr/>
            <section>
                <h1>사용자목록</h1>
                {loadingUsers && '로딩중...'}
                {!loadingUsers && users && (    // 유효성 검사, users 객체가 유효할때만 아래 렌더링
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Sample;