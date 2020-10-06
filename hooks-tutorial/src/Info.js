import React, { useState, useEffect, useReducer } from 'react';
import useInputs from './useInputs'

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name] : action.value
//     };
// }

const Info = () => {
    // useState 사용
    // const [name, setName] = useState('');
    // const [nickName, setNickName] = useState('');

    // useReducer 사용
    // const [state, dispatch] = useReducer(reducer, {
    //     name : '',
    //     nickName : ''
    // });
    // const { name, nickName} = state;

    // 컴포넌트 재사용
    const [state, onChange] = useInputs({
        name : '',
        nickName : ''
    })
    const {name, nickName} = state;
    
    // 값이 바뀔때마다
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.')
    //     console.log({
    //         name,
    //         nickName
    //     })
    // });

    // 첫 렌더링때만
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.')
    // }, []);

    // 특정 값이 바뀔때만
    // useEffect(() => {
    //     console.log(name);
    // }, [name]);

    // 컴포넌트가 언마운트 되거나 업데이트되기 직전에 작업을 수행하는 경우
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    })

    // useState 사용했을 때
    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // }
    // const onChangeNickName = (e) => {
    //     setNickName(e.target.value);
    // }

    // useReducer 사용했을 때
    // const onChange = (e) => {
    //     dispatch(e.target);
    // }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}></input>
                <input name="nickName" value={nickName} onChange={onChange}></input>
            </div>
            <div>
                <div>
                    <b>이름 : {name}</b>
                </div>
                <div>
                    <b>닉네임 : {nickName}</b>
                </div>
            </div>
        </div>
    );
};

export default Info;