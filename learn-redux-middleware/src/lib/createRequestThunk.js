// API 요청하기 위한 thunk 함수와 로딩 상태를 리듀서에서 관리하는 작업을
// 따로 분리하여 코드 리팩토링 하는 라이브러리
import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
    // 성공 및 실패 액션 타입을 정의
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch => {
        dispatch({ type });     // 시작
        dispatch(startLoading(type));
        try {
            const response = await request(params);
            dispatch({
                type : SUCCESS,
                payload : response.data
            });     // 성공
            dispatch(finishLoading(type));
        } catch (e) {
            dispatch({
                type : FAILURE,
                payload : e,
                error : true
            });     // 실패
            dispatch(startLoading(type));
            throw e;
        }
    };
};

// 사용법 : createRequestThunk('GET_USERS', api.getUsers);