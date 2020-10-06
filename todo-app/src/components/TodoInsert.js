import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);     // 두번째 파라미터가 빈 배열일 때는 
                // 컴포넌트가 렌더링될 때 만들었던 함수를 계속해서 재사용

    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue('');       // 값 초기화

        // submit 이벤트는 브라우저에서 새로고침을 유발하기 때문에
        // 이를 방지하기 위하여 아래 함수 호출
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            ></input>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;