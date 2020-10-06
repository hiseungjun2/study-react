// import React, {useState} from 'react';
import React, { useReducer } from 'react';

// reducer 구현
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' :
            // 1 증가
            return { value : state.value + 1};
        case 'DECREMENT' :
            // 1 감소
            return { value : state.value - 1};
        default :
            return state;
    }
}

const Counter = () => {
    // const [value, setValue] = useState(0);
    const [state, dispatch] = useReducer(reducer, {value : 0});

    return (
        <div>
            {/* <p>현재 카운터의 값은 <b>{value}</b> 입니다.</p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button> */}
            <p>현재 카운터의 값은 <b>{state.value}</b> 입니다.</p>
            <button onClick={() => dispatch({ type : 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({ type : 'DECREMENT'})}>-1</button>
        </div>
    );
};

export default Counter;