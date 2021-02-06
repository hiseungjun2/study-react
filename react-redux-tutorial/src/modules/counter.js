// redux-actions 이용하여 액션 생성 함수를 더 짧은 코드로 만들기
import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
// export const increase = () => ({ type : INCREASE });
// export const decrease = () => ({ type : DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number : 0
};

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE :
//             return {
//                 number : state.number + 1
//             };
//         case DECREASE : 
//             return {
//                 number : state.number - 1
//             };
//         default :
//             return state;
//     }
// }
const counter = handleActions(
    {
        [INCREASE] : (state, action) => ({ number : state.number + 1 }),
        [DECREASE] : (state, action) => ({ number : state.number - 1 }),
    },
    initialState,
);

export default counter;