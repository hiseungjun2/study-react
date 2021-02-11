import { createAction, handleActions } from 'redux-actions';
// redux-saga 이용하기
import { delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// redux-saga 이용하기 위해 선언
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// redux-saga 사용하여 구현
// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// () => undefined 를 두번째 파라미터로 넣어준다.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);
// generator 함수 사용
function* increaseSaga() {
    yield delay(1000);  // 1초 기다림
    yield put(increase());  // 특정 액션 디스패치
    const number = yield select(state => state.counter);
    console.log(`현재 값은 ${number} 입니다.`);
}
function* decreaseSaga() {
    yield delay(1000);  // 1초 기다림
    yield put(decrease());  // 특정 액션 디스패치
}
export function* counterSaga() {
    // takeEvery 는 들어오는 모든 액션에 대해 특정 작업을 처리해줌
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // takeLatest 는 기존에 진행중이던 작업이 있다면 즉시 취소하고
    // 가장 마지막으로 실행된 작업만 수행
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
// export const increaseAsync = () => dispatch => {
//     setTimeout(() => {
//         dispatch(increase());
//     }, 1000);
// }
// export const decreaseAsync = () => dispatch => {
//     setTimeout(() => {
//         dispatch(decrease());
//     }, 1000);
// }

const initialState = 0;     // 상태가 꼭 객체일 필요는 없다. 숫자도 가능

const counter = handleActions(
    {
        [ INCREASE ] : state => state + 1,
        [ DECREASE ] : state => state - 1
    },
    initialState
);

export default counter;