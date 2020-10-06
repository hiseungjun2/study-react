import React, { useState } from 'react';

const EventPractice = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');

    // useState 에 문자열이 아닌 객체를 넣기
    const [form, setForm] = useState({
        username : '',
        message : ''
    })
    
    const {username, message} = form;

    // const onChangeUsername = (e) => {
    //     setUsername(e.target.value);
    // }
    // const onChangeMessage = (e) => {
    //     setMessage(e.target.value);
    // }

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + ': ' + message);
        // setUsername('');
        // setMessage('');
        setForm({
            username : '',
            message : ''
        })
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자이름"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;