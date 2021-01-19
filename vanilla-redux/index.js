import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션(action) 이름 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
// 액션 함수 생성
const toggleSwitch = () => ({ type : TOGGLE_SWITCH });
const increase = difference => ({ type : INCREASE, difference });
const decrease = () => ({ type : DECREASE });
// 초기값 정의
const initialState = {
    toggle : false,
    counter : 0
}
// reducer(변화를 일으키는) 함수 정의
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함
    switch(action.type) {
        case TOGGLE_SWITCH :
            return {
                ...state,    // 불변성 유지
                toggle : !state.toggle
            };
        case INCREASE :
            return {
                ...state,
                counter : state.counter + action.difference
            };
        case DECREASE :
            return {
                ...state,
                counter : state.counter - 1
            };
        default :
            return state;
    }
}
// 스토어 생성
const store = createStore(reducer);
// render 함수 생성
const render = () => {
    const state = store.getState();     // 현재 상태 가져오기
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerHTML = state.counter;
};
// render 실행
render();
// 구독하기 (스토어의 상태가 바뀔 때 마다 render 함수 호출 되도록)
store.subscribe(render);
// 액션 발생 시키기 (디스패치)
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};