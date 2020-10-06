import React, { useState } from 'react';

const IterationSample = () => {
    // const names = ['눈사람', '얼음', '눈', '바람'];
    // const nameList = names.map((name, index) => <li key={index}>{name}</li>);

    const [names, setNames] = useState([
        { id: 1, text: '눈사람'},
        { id: 2, text: '얼음'},
        { id: 3, text: '눈'},
        { id: 4, text: '바람'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState('5');   // 새로운 항목을 추가할 때 사용할 id

    // change 이벤트 함수
    const onChange = (e) => {
        setInputText(e.target.value);
    }

    // click 이벤트 함수
    const onClick = (e) => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });

        setNextId(nextId + 1);      // nextId 값 1 증가
        setNames(nextNames);        // names 값 업데이트
        setInputText('');           // input 박스 초기화
    }

    // remove 함수
    const onRemove = (id) => {
        // 배열 제거
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
    
    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}
            </ul>
        </>
    );
};

export default IterationSample;