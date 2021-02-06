import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 기존에 만들어놓았던 리듀서들을 하나로 합치기
const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;