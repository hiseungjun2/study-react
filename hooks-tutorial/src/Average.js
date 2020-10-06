import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중....');
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    // const onChange = (e) => {
    //     setNumber(e.target.value);
    // };
    // const onInsert = (e) => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('');
    // }

    // useCallback 사용하여 렌더링 성능 최적화
    const onChange = useCallback( (e) => {
        setNumber(e.target.value);
    }, []);     // 컴포넌트가 처음 렌더링할 때만 함수 생성
    const onInsert = useCallback( () => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);     // number 혹은 list가 바뀌었을 때만 함수 생성

    // useMemo 추가
    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}></input>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값</b> {avg}
            </div>
        </div>
    );
};

export default Average;