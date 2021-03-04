import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form : auth.register,
        auth : auth.auth,
        authError : auth.authError,
        user : user.user
    }));
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form : 'register',
                key : name,
                value
            })
        );
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();     // 기본 이벤트 막기
        const { username, password, passwordConfirm } = form;
        if ([username, password, passwordConfirm].includes('')) {   // 3 가지 항목 중 하나라도 비어있다면
            setError('빈 칸을 모두 입력하세요');
            return;
        }
        if (password !== passwordConfirm) {   // 비밀번호가 일치하지 않는다면
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({ form : 'register', key : 'password', value : '' }));     // 비밀번호 항목 초기화
            dispatch(changeField({ form : 'register', key : 'passwordConfirm', value : '' }));  // 비밀번호 확인 항목 초기화
            return;
        }
        dispatch(register({ username, password }));
    };

    // 컴포넌트가 처음 렌더링될 때 form 을 초기화
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    // 회원가입 성공/실패 처리
    useEffect(() => {
        if (authError) {
            // 계정명이 이미 존재할 때
            if (authError.response.status === 409) {
                setError('이미 존재하는 계정입니다.');
                return;
            }
            // 기타 이유
            setError('회원가입 실패');
            return;
        }
        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    // user 값이 잘 설정되는 지 확인
    useEffect(() => {
        if (user) {
            console.log('check API 성공');
            console.log(user);
            history.push('/');  // 홈화면으로 이동
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('localStorage is not working');
            }
        }
    }, [history, user]);

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(RegisterForm);